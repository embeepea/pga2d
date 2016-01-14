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

(defn idealInnerPro [v0 v1]  ;; positive definite ip
  (apply + (map * v0 v1)))

;; private function to decide whether the k-vector is ideal (null vector)
;; only allow 1- and 2-vectors
(defn ideal? [mv nv]
  (and (mv :kvector?)
       (and (= nv 0)
            (or (gr/line? mv)
                (gr/point? mv)
                )
            )
       )
  )

; return the norm squared of a k-vector, or else nil
(defn normsquared [sig mv]
    (when (mv :kvector?)
      (let [n2 (get ((gp sig mv (gr/gareverse mv)) :0) 0)] ;; scalar part of gp
        (if (ideal? mv n2)
          (let [v (mv (get gr/gradekeys (mv :k)))]
            (idealInnerPro v v))
          n2
          )
        )
      )
    )

; normalize a k-vector to have norm 1 (when possible) or else return it unchanged
(defn normalized [sig mv]
  (let [ n2 (normsquared sig mv)]
  (when (not= n2 nil)
    (gr/times mv (/ 1.0 (Math.sqrt (Math.abs n2)))))))

; invert a k-vector
(defn inverse [sig mv]
  (when (mv :kvector?)
    (let [n2 (normsquared sig mv)]
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
   :gp                      (fn [mv1 mv2] (gp sig mv1 mv2))
   :normsquared             (fn [mv] (normsquared sig mv))
   :normalized              (fn [mv] (normalized sig mv))
   :polarized               (fn [mv] (polarized sig mv))
   :inverse                 (fn [mv] (inverse sig mv))
  }
)