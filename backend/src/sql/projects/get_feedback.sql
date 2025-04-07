SELECT u.email, s.feedback
FROM SCORES s
JOIN PROJECTS p ON s.project_id = p.project_id
JOIN TEAMS t ON p.team_id = t.team_id
JOIN TEAM_MEMBERSHIP tm ON t.team_id = tm.team_id
JOIN USER_11 u ON tm.user_id = u.user_id;