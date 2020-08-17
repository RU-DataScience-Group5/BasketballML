CREATE TABLE public.roy_feature_weights
(
"feature" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"weight" double precision NOT NULL,
"model" character varying(100) COLLATE pg_catalog."default" NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.roy_feature_weights
    OWNER to group5;

