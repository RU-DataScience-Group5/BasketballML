CREATE TABLE public.roy_predictions
(
"Player" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"season" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"Tm" character varying(10) COLLATE pg_catalog."default" NOT NULL,
"model" character varying(100) COLLATE pg_catalog."default" NOT NULL,
	CONSTRAINT roy_predictions_pkey PRIMARY KEY ("Player", "season", "Tm","model")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.roy_predictions
    OWNER to group5;

