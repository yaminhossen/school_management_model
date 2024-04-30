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
        function set_data(id,user_teacher_id, name, ) {
            data.push({
                id,
                user_teacher_id,
                name,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1, 1, 'abdullah');
        set_data(2, 1, 'arif');
        set_data(3, 1, 'sayeed');

        queryInterface.bulkDelete('user_teacher_informations');
        await queryInterface.bulkInsert('user_teacher_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_teacher_informations', null, {});
    },
};
