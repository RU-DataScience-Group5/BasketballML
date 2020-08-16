CREATE TABLE public.roy_predictions_rank
(
"Player" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"season" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"Tm" character varying(10) COLLATE pg_catalog."default" NOT NULL,
"score" double precision NOT NULL,
	CONSTRAINT roy_predictions_rank_pkey PRIMARY KEY ("Player", "season", "Tm")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.roy_predictions_rank
    OWNER to group5;

