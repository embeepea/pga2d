(ns pga2d.clifford
  (:require [pga2d.grassmann :as gr]))

(enable-console-print!)

;; sp = "sum of products"
;; takes a vec of vecs, and returns the sum of the products of the elements of each vec
;;  e.g. (sp [[2 3] [4 5] [6 7]]) => (+ (* 2 3) (* 4 5) (* 6 7)) => (+ 6 20 42) => 68
(defn sp [as] (apply + (map #(apply * %) as)))

;; sd = "sum difference":
;; if receives 2 vecs of vecs, return the difference of sp of first and sp of second
;; if receives just one vec of vecs, return sp of that vec
(defn sd
  ([as bs] (- (sp as) (sp bs)))
  ([as] (sp as)))

(defn gp [sig
          {[a] :0 [a0 a1 a2] :1 [A0 A1 A2] :2 [A] :3}
          {[b] :0 [b0 b1 b2] :1 [B0 B1 B2] :2 [B] :3}]
  (gr/multivector_native
   [(+ (sd [[a b] [a1 b1] [a2 b2]] [[A0 B0]])
       (* sig (sd [[a0 b0]] [[A B] [A1 B1] [A2 B2]])))]

   [(sd [[a0 b] [a b0] [A2 b1] [a2 B1]] [[A0 B] [A B0] [A1 b2] [a1 B2]])
    (+ (sd [[a1 b] [a b1] [A0 b2]] [[a2 B0]])
       (* sig (sd [[a0 B2]] [[A1 B] [A2 b0] [A B1]])))
    (+ (sd [[a2 b] [a1 B0] [a b2]] [[A0 b1]])
       (* sig (sd [[A1 b0]] [[A2 B] [a0 B1] [A B2]])))]

   [(+ (sd [[A0 b] [a B0] [a1 b2]] [[a2 b1]])
       (* sig (sd [[a0 B] [A b0] [A2 B1]] [[A1 B2]])))
    (sd [[A1 b] [a1 B] [a2 b0] [A b1] [a B1] [A0 B2]] [[A2 B0]  [a0 b2]])
    (sd [[A2 b] [a2 B] [A1 B0] [a0 b1] [A b2] [a B2]] [[a1 b0] [A0 B1]])]

   [(sd [[A b] [a B] [A0 b0] [a0 B0] [A1 b1] [a1 B1] [A2 b2] [a2 B2]])]))


; find orthogonal complement (multiply by pseudoscalar)
(defn polarized [sig mv]
  (gp sig mv (gr/pseudoscalar 1)))

;; the follow pos def inner product produces correct result
;; for ideal elements (lines or points) in euclidean or hyperbolic
;; metric.
(defn ideal-inner-product [v0 v1]  ;; positive definite ip
  (apply + (map * v0 v1)))

;; evaluate gp(mv, reverse(mv)) to obtain a scalar
(defn ordinary-norm-squared [sig mv]
  (get ((gp sig mv (gr/ga-reverse mv)) :0) 0))

;; private function to decide whether the k-vector is ideal (null vector)
;; only allow 1- and 2-vectors
(defn ideal?
  ([sig mv]
   (ideal? sig mv (ordinary-norm-squared sig mv))
    )
  ([sig mv nv]
   (and
     (mv :kvector?)
     (and (= nv 0)
          (or (gr/line? mv)
              (gr/point? mv)
              )
          )
     )
    )
  )

;; a rotor is a translator when its center is ideal
(defn translator? [sig rotor]
  (when (rotor :rotor?)
    (let [grade-2 (gr/grade rotor 2)]
      (ideal? sig grade-2)
      )
    )
  )

;; return the norm squared of a k-vector or rotor
;; evaluate the ideal norm when the ordinary norm is 0 
(defn norm-squared [sig mv]
    (when (or (mv :kvector?) (mv :rotor?))
        (if (and (not (mv :rotor?)) (ideal? sig mv))
          (let [v (mv (get gr/gradekeys (mv :k)))]
            (ideal-inner-product v v))
          (ordinary-norm-squared sig mv)
          )
        )
    )

(defn norm [sig mv]
  (Math.sqrt (Math.abs (norm-squared sig mv))))

; normalize a k-vector to have norm 1 (when possible) or else return it unchanged
(defn normalized [sig mv]
  (let [n2 (norm-squared sig mv)]
  (when (not= n2 nil)
    (let [result (gr/times mv (/ 1.0 (norm sig mv)))
          ;; handle special case of euclidean point: force positive-z
          flip (and
                   (= sig 0)
                   (= (mv :k) 2)
                   (< (get (gr/point-from mv) 2) 0)
                   )]
      (if flip (gr/times result -1) result)
      ))))

(def e0 (gr/line 0 0 1))

;; calculate the angle of a rotation or distance of a translation
(defn measure-of-rotor [sig rotor]
  (when (rotor :rotor?)
    (let [grade-2 (gr/grade rotor 2)]
      ;; check if it's a translator
      (if (translator?  sig rotor )
        (let [distance (norm sig grade-2)]
          distance)
        (let [zneg (< (get (rotor :2) 0) 0)  ;; z-coordinate; XXX make metric-neutral
              xcord (gr/scalar-from rotor)  ;; cosine of angle
              pnorm (norm sig grade-2)
              ycord (if zneg (- pnorm) pnorm)
              pangle (Math.atan2 ycord xcord)]
            (println (str "xcord = " xcord " pnorm = " pnorm " ycord = " ycord))
            pangle)
          )
        )
      )
    )

; invert a k-vector or a rotor
(defn inverse [sig mv]
  (when (or (mv :kvector?) (mv :rotor?))
    (let [n2 (norm-squared sig mv)]
      (when (and (not= nil n2) (not= 0 n2))
        (gr/times mv (/ 1.0 n2))
        )
      )
    )
  )

;;
;; isometry code
;;
(defn reflector [sig mirror]
  (when (and (mirror :kvector?) (= (mirror :k) 1))
    (fn [X] (gp sig (gp sig mirror X) mirror))
    )
  )


(defn ga [sig]
  {
   :gp                    (fn [mv1 mv2] (gp sig mv1 mv2))
   :ordinary-norm-squared (fn [mv] (ordinary-norm-squared sig mv))
   :norm-squared          (fn [mv] (norm-squared sig mv))
   :norm                  (fn [mv] (norm sig mv))
   :normalized            (fn [mv] (normalized sig mv))
   :polarized             (fn [mv] (polarized sig mv))
   :inverse               (fn [mv] (inverse sig mv))
   :ideal?                (fn [mv] (ideal? sig mv))
   :measure-of-rotor      (fn [mv] (measure-of-rotor sig mv))
   :reflector             (fn [mv] (reflector sig mv))
   :translator?           (fn [mv] (translator? sig mv))
   }
)
