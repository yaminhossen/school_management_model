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
        function set_data(id,user_student_id, previous_institute,year_of_leaving,result) {
            data.push({
                id,
                user_student_id,
                previous_institute,
                year_of_leaving,
                result,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1, 1, 'MIU','2024-02-14','A+');
        set_data(2, 1, 'BIST','2024-02-14','A-');
        set_data(3, 1, 'DIU','2024-02-14','A');

        queryInterface.bulkDelete('user_student_educational_backgrounds');
        await queryInterface.bulkInsert('user_student_educational_backgrounds', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_educational_backgrounds', null, {});
    },
};
