CREATE TABLE  all_players_adv AS
SELECT 
all_players."Player", 
all_players."season", 
all_players."Tm", 
all_players."PlayerID", 
all_players."Pos", 
all_players."Age", 
all_players."G", 
all_players."MP", 
all_players."2P",
all_players."2P%",
all_players."2PA",
all_players."3P",
all_players."3P%",
all_players."3PA",
all_players."AST",
all_players."BLK",
all_players."DRB",
all_players."eFG%",
all_players."FG",
all_players."FG%",
all_players."FGA",
all_players."FT",
all_players."FT%",
all_players."FTA",
all_players."GS",
all_players."ORB",
all_players."PF",
all_players."PTS",
all_players."STL",
all_players."TOV",
all_players."TRB",


advanced_stats."PER", 
advanced_stats."TS%", 
advanced_stats."3PAr", 
advanced_stats."FTr", 
advanced_stats."ORB%", 
advanced_stats."DRB%",
advanced_stats."TRB%",
advanced_stats."AST%",
advanced_stats."STL%",
advanced_stats."BLK%",
advanced_stats."TOV%",
advanced_stats."USG%",
advanced_stats."OWS",
advanced_stats."DWS",
advanced_stats."WS",
advanced_stats."WS/48",
advanced_stats."OBPM",
advanced_stats."DBPM",
advanced_stats."BPM",
advanced_stats."VORP"



FROM all_players
JOIN advanced_stats

ON advanced_stats."PlayerID" = all_players."PlayerID" AND advanced_stats."season" = all_players."Season" AND advanced_stats."Tm" = all_players."Tm"