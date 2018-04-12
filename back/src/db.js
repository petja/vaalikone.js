import knex from 'knex'

export default knex({
    client: 'mysql2',
    connection: require('../../knexfile.js')[process.env.NODE_ENV || 'development'].connection,
})
