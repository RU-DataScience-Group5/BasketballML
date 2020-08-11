SELECT append_rookie."Player", append_rookie."season", append_rookie."Tm", append_rookie."rookie_votes", mvp."First" as mvp_votes

FROM
(SELECT all_players_adv."Player", all_players_adv."season", all_players_adv."Tm", roy."First" as rookie_votes FROM all_players_adv
LEFT OUTER JOIN roy
ON roy."Player" = all_players_adv."Player" AND roy."season" = all_players_adv."season" AND roy."Tm" = all_players_adv."Tm") as append_rookie

LEFT OUTER JOIN mvp
ON mvp."Player" = append_rookie."Player" AND mvp."season" = append_rookie."season" AND mvp."Tm" = append_rookie."Tm"

WHERE mvp."First" >= 0 AND append_rookie."rookie_votes" >=0