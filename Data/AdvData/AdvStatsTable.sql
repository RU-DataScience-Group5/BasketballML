CREATE TABLE public.advanced_stats
(
"Rk" integer,
"PlayerNameID" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"Pos" character varying(10) COLLATE pg_catalog."default" NOT NULL,
"Age" integer,
"Tm" character varying(10) COLLATE pg_catalog."default" NOT NULL,
"G" integer,
"MP" integer,
"PER" double precision,
"TS%" double precision,
"3PAr" double precision,
"FTr" double precision,
"ORB%" double precision,
"DRB%" double precision,
"TRB%" double precision,
"AST%" double precision,
"STL%" double precision,
"BLK%" double precision,
"TOV%" double precision,
"USG%" double precision,
"OWS" double precision,
"DWS" double precision,
"WS" double precision,
"WS/48" double precision,
"OBPM" double precision,
"DBPM" double precision,
"BPM" double precision,
"VORP" double precision,
"season" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"Player" character varying(100) COLLATE pg_catalog."default" NOT NULL,
"PlayerID" character varying(100) COLLATE pg_catalog."default" NOT NULL,
	CONSTRAINT advanced_stats_pkey PRIMARY KEY ("Player", "season", "Tm")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.advanced_stats
    OWNER to group5;

