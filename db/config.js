// const sql = require('mssql');
// const config = {
//   server: 'localhost',
//   driver: 'msnodesqlv8', // or your SQL Server instance name
//   database: 'node_crud_app',
//   options: {
    
//     encrypt: true, // Use this if you're on Azure
//     trustServerCertificate: true, // Set to true for local development
//   },
//   authentication: {
//     type: 'default',
//     options: {
//       trustedConnection: true, // Use Windows Authentication
//     }
//   }
// };

// sql.connect(config)
//   .then(pool => {
//     console.log('Connected to SQL Server');
//     return pool;
//   })
//   .catch(err => console.log('Database connection failed: ', err));

// module.exports = sql;

// const sql = require("mssql/msnodesqlv8"); // Import the msnodesqlv8 driver

// const config = {
//   database: "node_crud_app",
//   server: "localhost", // Server name
//   driver: "msnodesqlv8", // Use msnodesqlv8 driver
//   options: {
//     trustedConnection: true, // Use Windows Authentication
//     trustServerCertificate: true // Set to true for local development
//   }
// };

// const conn = new sql.ConnectionPool(config);

// conn.connect()
//   .then(() => {
//     console.log('Connected to SQL Server');

//   })
//   .catch(err => {
//     console.log('Database connection failed: ', err);
//   });

// module.exports = conn;

const sql = require("mssql/msnodesqlv8"); // Import the msnodesqlv8 driver

const config = {
  database: "node_crud_app",
  server: "localhost", // Server name
  driver: "msnodesqlv8", // Use msnodesqlv8 driver
  options: {
    trustedConnection: true, // Use Windows Authentication
    trustServerCertificate: true // Set to true for local development
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.log('Database connection failed: ', err);
    process.exit(1); // Exit process on connection failure
  });

module.exports = {
  sql,
  poolPromise
};
