SELECT h.name, SUM(p.amount) AS total_payments
FROM HACKATHONS h
JOIN REGISTRATIONS r ON h.hackathon_id = r.hackathon_id
JOIN PAYMENTS p ON r.user_id = p.user_id
GROUP BY h.hackathon_id;