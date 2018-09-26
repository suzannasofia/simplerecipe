CREATE TABLE recipes (
  id serial primary key,
  title character varying(255) NOT NULL UNIQUE,
  description text NOT NULL,
  ingredients text NOT NULL,
  instructions text NOT NULL,
  image character varying(255)
);
