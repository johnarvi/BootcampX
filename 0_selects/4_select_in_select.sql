/* Select subquerires*/
/* FORMAT */

/*
SELECT (
  SELECT count(*)
  FROM table_name
) as total, other_column
FROM other_table_name
ORDER BY total;
*/

/*
SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
*/

/*average number of students per cohort*/

/*
SELECT count(students) as total_students
FROM students
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts;
*/

/* using the above as a subquerry to below*/
/*
SELECT avg(total_students) as average_students
FROM (
  SELECT count(students) as total_students
  FROM students
  JOIN cohorts on cohorts.id = cohort_id
  GROUP BY cohorts
) as totals_table;
*/
/*
SELECT assignment_id
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
*/
/* using the values returned from the above query to check if a value does not exists in that query below*/
/*
SELECT assignments.name
FROM assignments 
WHERE id NOT IN (1, 2, 3, 4, 5, ...)
*/

SELECT assignments.name
FROM assignments 
WHERE id NOT IN 
(
  SELECT assignment_id
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE students.name = 'Ibrahim Schimmel'
);






