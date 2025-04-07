SELECT h.name AS hackathon, pr.prize_name, s.sponsor_name
FROM HACKATHONS h
JOIN PRIZES pr ON h.hackathon_id = pr.hackathon_id
JOIN SPONSORS s ON pr.sponsor_id = s.sponsor_id;