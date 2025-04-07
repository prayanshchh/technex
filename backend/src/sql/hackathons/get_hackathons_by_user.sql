SELECT h.* FROM HACKATHONS h
JOIN REGISTRATIONS r ON h.hackathon_id = r.hackathon_id
WHERE r.user_id = ?;