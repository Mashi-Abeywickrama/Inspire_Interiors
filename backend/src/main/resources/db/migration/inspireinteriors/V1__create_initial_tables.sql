-- V1__create_initial_tables.sql

-- Create the 'product' table
CREATE TABLE product (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         description TEXT,
                         price DECIMAL(10, 2) NOT NULL
);

-- Create the 'product_image' table
CREATE TABLE product_image (
                               id SERIAL PRIMARY KEY,
                               product_id INT REFERENCES product(id),
                               url VARCHAR(255) NOT NULL
);

-- Create an index on 'product_image' table
CREATE INDEX idx_product_image_product_id ON product_image(product_id);