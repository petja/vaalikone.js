// Update with your config settings.

module.exports = {

    development         : {
        client              : 'mysql2',
        connection          : {
            database            : 'vaalikone',
            user                : 'root',
            password            : 'QcPLP2qMqQx6FGafU5cmGVB6eZQ2IKjtMz0XfrkU'
        },
        pool                : {
            min                 : 2,
            max                 : 10
        },
        migrations          : {
            tableName           : 'knex_migrations'
        }
    }

}
