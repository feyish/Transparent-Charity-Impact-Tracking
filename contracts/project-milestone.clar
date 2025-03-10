;; Project Milestone Contract

;; Data Variables
(define-map milestones uint {project: (string-ascii 64), description: (string-ascii 256), completed: bool})
(define-data-var milestone-counter uint u0)

;; Public Functions
(define-public (create-milestone (project (string-ascii 64)) (description (string-ascii 256)))
  (let ((new-id (+ (var-get milestone-counter) u1)))
    (map-set milestones new-id {project: project, description: description, completed: false})
    (var-set milestone-counter new-id)
    (ok new-id)))

(define-public (complete-milestone (id uint))
  (match (map-get? milestones id)
    milestone (begin
      (map-set milestones id (merge milestone {completed: true}))
      (ok true))
    (err u404)))

(define-read-only (get-milestone (id uint))
  (map-get? milestones id))

