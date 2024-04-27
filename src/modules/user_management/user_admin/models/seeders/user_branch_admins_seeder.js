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
        function set_data(id, name, email,phone_number,image='/assets/dashboard/images/avatar.png') {
            data.push({
                id,
                name, email, phone_number, image,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1, 'jawad', 'jawad@gmail.com', '389338');
        set_data(2, 'almas', 'arif@gmail.com', '4647');
        set_data(3, 'abid', 'abid@gmail.com', '07878');

        queryInterface.bulkDelete('user_branch_admins');
        await queryInterface.bulkInsert('user_branch_admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_branch_admins', null, {});
    },
};
