CREATE VIEW combined_data_vw AS
--SELECT DISTINCT combined_data."Player", combined_data."Tm",combined_data."season", combined_data."{xstat}", combined_data."{ystat}", combined_data.mvp_votes, combined_data.rookie_votes,

SELECT DISTINCT combined_data.*,
CASE
    WHEN mvp_predictions."Player" IS NOT NULL THEN 1
    ELSE 0
END AS mvp_predicted,
CASE
    WHEN roy_predictions."Player" IS NOT NULL THEN 1
    ELSE 0
END AS roy_predicted
FROM combined_data
LEFT JOIN mvp_predictions
ON mvp_predictions."Player" = combined_data."Player" AND mvp_predictions."season" = combined_data."season" AND mvp_predictions."Tm" = combined_data."Tm"
LEFT JOIN roy_predictions
ON roy_predictions."Player" = combined_data."Player" AND roy_predictions."season" = combined_data."season" AND roy_predictions."Tm" = combined_data."Tm"