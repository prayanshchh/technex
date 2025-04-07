SELECT p.project_name, j.judge_id, j.expertise
FROM SCORES s
JOIN PROJECTS p ON s.project_id = p.project_id
JOIN JUDGES j ON s.judge_id = j.judge_id;