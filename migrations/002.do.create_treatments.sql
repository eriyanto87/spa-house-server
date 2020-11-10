CREATE TABLE treatments (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, 
    name TEXT NOT NULL, 
    length INTEGER NOT NULL, 
    price INTEGER NOT NULL,
    display_name TEXT NOT NULL
);