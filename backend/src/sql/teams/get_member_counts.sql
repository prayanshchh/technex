SELECT t.team_name, COUNT(tm.user_id) AS member_count
FROM TEAMS t
JOIN TEAM_MEMBERSHIP tm ON t.team_id = tm.team_id
GROUP BY t.team_id;