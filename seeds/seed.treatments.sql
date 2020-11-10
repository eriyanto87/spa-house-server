BEGIN;

INSERT INTO treatments (name, length, price, display_name)
VALUES
('massage-60', 60, 99, '60 minute massage'), 
('massage-90', 90, 139, '90 minute massage'), 
('fullset', 120, 99, 'Eyelash Extensions Fullset'), 
('refill', 90, 79, 'Eyelash Extensions Refill')
;

COMMIT;