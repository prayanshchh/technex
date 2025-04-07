SELECT u.email, r.room_id, p.payment_status
FROM USER_11 u
JOIN ROOMALLOCATIONS ra ON u.user_id = ra.user_id
JOIN ROOMS r ON ra.room_id = r.room_id
JOIN PAYMENTS p ON u.user_id = p.user_id;