SELECT tbl.*
FROM combined_data as tbl
  INNER JOIN
  (
    SELECT "Player", MIN(TO_NUMBER(LEFT(season,4),'9999')) as MinPoint
    FROM combined_data
    GROUP BY "Player"
  ) tbl1
  ON tbl1."Player" = tbl."Player"
WHERE tbl1.MinPoint = TO_NUMBER(LEFT(tbl.season,4),'9999')