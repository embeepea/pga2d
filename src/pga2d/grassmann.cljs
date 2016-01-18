(ns pga2d.grassmann
  (:require ))

(enable-console-print!)

(defn zeros? [a]
  (every? zero? a))

(defn gradesAreZero [mv]
  [(zeros? (mv :0))
   (zeros? (mv :1))
   (zeros? (mv :2))
   (zeros? (mv :3))]
  )

(def gradekeys [:0 :1 :2 :3])

; Initialize a multivector.
(defn multivector_native [[s] [a b c] [x y z] [p]]
  (let [mv      {:0 [s] :1 [a b c] :2 [x y z] :3 [p]}
        gaz     (gradesAreZero mv)
        kvector (= 1 ((frequencies gaz) false))
        k       (when kvector (first (first (filter #(not (% 1)) (map-indexed vector gaz)))))]
    (assoc mv :gradesAreZero gaz
              :kvector? kvector
              :k k))
  )

;; A constructor which accepts (x, y, z) coordinates
;; and converts to native (z,x,y) coordinates,
;; and scalar and pseudoscalar are not arrays yet.
;; Notice that the homogeneous coordinate comes first
;; in the multivector format although it is the last
;; coordinate in the input coordinates of points & lines

(defn multivector [s [a b c] [x y z] p]
  (multivector_native [s] [c a b] [z x y] [p]))

(defn grade [mv grade]
  (multivector_native
    (if (= grade 0) (mv :0) [0])
    (if (= grade 1) (mv :1) [0 0 0])
    (if (= grade 2) (mv :2) [0 0 0])
    (if (= grade 3) (mv :3) [0])
    )
  )

; Initialize pure k-vectors for different k
(defn point [x y z]
  (multivector 0 [0 0 0] [x y z] 0))

(defn line [a b c]
  (multivector 0 [a b c] [0 0 0] 0))

(defn scalar [s]
  (multivector s [0 0 0] [0 0 0] 0))

(defn pseudoscalar [p]
  (multivector 0 [0 0 0] [0 0 0] p))

; extract the various grades (in (x,y,z) coordinate order)
; either as real values or as 3-vectors
(defn scalarFrom [mv]
  (get (mv :0) 0))

(defn pseudoscalarFrom [mv]
  (get (mv :3) 0))

(defn lineFrom [mv]
  (let [[c a b] (mv :1)]
    [a b c]))

(defn pointFrom [mv]
  (let [[z x y] (mv :2)]
   [x y z]))

; predicates to identify different k-vectors
(defn scalar? [mv]
  (= (mv :k) 0)
  )
(defn line? [mv]
  (= (mv :k) 1)
  )
(defn point? [mv]
  (= (mv :k) 2)
  )
(defn pseudoscalar? [mv]
  (= (mv :k) 3)
  )
(defn evenSubalg? [mv]
  (and (get (mv :gradesAreZero) 1)
       (get (mv :gradesAreZero) 3)))

; calculate highest-grade part of geometric product (incidence only)
(defn wedge [{[a] :0 [a0 a1 a2] :1 [A0 A1 A2] :2 [A] :3}
             {[b] :0 [b0 b1 b2] :1 [B0 B1 B2] :2 [B] :3}]
  ;a*b;
  ;dst.vals[1] = a0*b + a*b0;
  ;dst.vals[2] = a1*b + a*b1;
  ;dst.vals[3] = a2*b + a*b2;
  ;dst.vals[4] = A0*b + a*B0 - a2*b1 + a1*b2;
  ;dst.vals[5] = A1*b + a2*b0 + a*B1 - a0*b2;
  ;dst.vals[6] = A2*b - a1*b0 + a0*b1 + a*B2;
  ;dst.vals[7] = A*b + a*B + A0*b0 + a0*B0 + A1*b1 + a1*B1 + A2*b2 + a2*B2;
  (let [
        r (* a b)
        r0 (+ (* a0 b) (* a b0))
        r1 (+ (* a1 b) (* a b1))
        r2 (+ (* a2 b) (* a b2))
        R0 (+ (* A0 b) (* a B0) (- (* a2 b1)) (* a1 b2))
        R1 (+ (* A1 b) (* a2 b0) (* a B1) (- (* a0 b2)))
        R2 (+ (* A2 b) (- (* a1 b0)) (* a0 b1) (* a B2))
        R (+ (* A b) (* a B) (* A0 b0) (* a0 B0) (* A1 b1) (* a1 B1 ) (* A2 b2) (* a2 B2))
        ]
    (multivector_native [r] [r0 r1 r2] [R0 R1 R2] [R]))
  )

; calculate dual coordinates: an entity's coordinates in the dual grassmann alg.
(defn dual [mv]
  (multivector_native (mv :3) (mv :2) (mv :1) (mv :0)))

; calculate join using dual coordinates
(defn join [mv1 mv2]
  (dual (wedge (dual mv1) (dual mv2))))

; add two multivectors
(defn add [{[a] :0 lineA :1 pointA :2 [A] :3}
             {[b] :0 lineB :1 pointB :2 [B] :3}]
  (multivector_native [(+ a b)]
                      (vec (map + lineA lineB))
                      (vec (map + pointA pointB))
                      [(+ A B)]))

; multiply a vector by a scalar (isn't there an easier way?)
(defn smultiplier [s]
  (fn [v] (map #(* s %) v)))

; multiply a multivector by a scalar
(defn times [mv s]
  (let [smul (smultiplier s)]
    (multivector_native (smul (mv :0)) (smul (mv :1))
                        (smul (mv :2)) (smul (mv :3)))))

; reverse the order of all products of 1-vectors in a mv ('reverse' is already taken)
(defn gareverse [{[s] :0 [c a b] :1 [z x y] :2 [p] :3}]
  (multivector s [a b c] (map - [x y z]) (- p)))

(defn grade [mv  grade]
  (multivector_native
    (if (= grade 0) (mv :0) [0])
    (if (= grade 1) (mv :1) [0 0 0])
    (if (= grade 2) (mv :2) [0 0 0])
    (if (= grade 3) (mv :3) [0])
    )
  )
