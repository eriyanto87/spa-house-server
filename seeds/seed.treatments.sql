BEGIN;

INSERT INTO treatments (name, length, price, display_name)
VALUES
('massage-60', 60, 99, '1 Hour Massage'), 
('massage-90', 90, 139, '1.5 Hour Massage'), 
('fullset', 120, 99, 'Eyelash Extensions Full Set'), 
('fill', 85, 79, 'Eyelash Extensions Refill'),
('manicure', 45, 39, 'Manicure'), 
('pedicure', 50, 49, 'Pedicure'), 
('gel-mani', 60, 49, 'Gel Manicure'), 
('facial', 75, 99, 'Signature Facial');

COMMIT;