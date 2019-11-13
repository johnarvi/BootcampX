/*
// same as below. but pool is better for psotgres
const { Client } = require('pg');

const client = new Client({
  user: 'vagrant',
  password: '123'
  host: 'localhost',
  database: 'bootcampx'
});

*/


// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
//   .then(res => {
  //     console.log(res.rows);
  //   })
  //   .catch(err => console.error('query error', err.stack));
  
  
  // pool.query(`
  // SELECT id, name, cohort_id
  // FROM students
  // LIMIT 5;
  // `)
  //   .then(res => {
    //     res.rows.forEach(user => {
      //       console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
      //     });
      //   });
      
      // pool.query(`
      // SELECT cohorts.name, students.name, cohort_id
      // FROM students JOIN cohorts on students.cohort_id = cohorts.id
      // LIMIT 5;
      // `)
      //   .then(res => {
        //     console.log(res.rows);
        //   })
        //   .catch(err => console.error('query error', err.stack));
        
        // pool.query(`
        // SELECT students.id as student_id, students.name as name, cohorts.name as cohort
        // FROM students
        // JOIN cohorts ON cohorts.id = cohort_id
        // LIMIT 5;
        // `)
        //   .then(res => {
//     res.rows.forEach(user => {
  //       console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  //     });
  //   });
  // const args = process.argv;
  // const arg = args.slice[1];
  
  // pool.query(`
  // SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  // FROM students
  // JOIN cohorts ON cohorts.id = cohort_id
  // LIMIT ${arg[1]};
  // WHERE cohorts.name = ${arg[0]}
  // `)
  //   .then(res => {
    //     res.rows.forEach(user => {
      //       console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
      //     });
      //   });
      
      /*
      pool.query(`
      SELECT students.id as student_id, students.name as name, cohorts.name as cohort
      FROM students
      JOIN cohorts ON cohorts.id = cohort_id
      WHERE cohorts.name LIKE '%${process.argv[2]}%'
      LIMIT ${process.argv[3] || 5};
      `)
      .then(res => {
        res.rows.forEach(user => {
          console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
        });
      }).catch(err => console.error('query error', err.stack));
      */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
     
/* Paramaterized string */
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
     

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values);
/*
pool.query(queryString, values);
psql receives the query an user input separartely, it then uses user data (values) as data within the query rather than part of the query
*/
