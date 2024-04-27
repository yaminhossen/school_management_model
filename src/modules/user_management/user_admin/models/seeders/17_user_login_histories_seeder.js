'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */



        let data = [];
        function set_data(id, user_id, user_table_name,date,device) {
            data.push({
                id,
                user_id, user_table_name, date, device,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1, 1, 'user_staffs', '2024-02-14','phone');
        set_data(2, 1, 'user_staffs', '2024-02-14','computer');
        set_data(2, 1, 'user_staffs', '2024-02-14','phone');

        queryInterface.bulkDelete('user_login_histories');
        await queryInterface.bulkInsert('user_login_histories', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_login_histories', null, {});
    },
};
