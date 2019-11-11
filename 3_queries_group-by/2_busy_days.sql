/*total number of assignments for each day of bootcamp where total assignments is greater than or equal to 10.*/
SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
HAVING total_assignments >= 10
ORDER BY day;