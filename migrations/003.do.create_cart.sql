CREATE TABLE cart (
    user_id INTEGER REFERENCES users(id) NOT NULL, 
    treatment_id INTEGER REFERENCES treatments(id) NOT NULL, 
    comment TEXT, 
    order_date TIMESTAMPTZ DEFAULT now() NOT NULL,
    appointment_date TIMESTAMPTZ NOT NULL
);