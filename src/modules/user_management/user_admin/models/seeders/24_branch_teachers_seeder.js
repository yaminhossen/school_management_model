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
        function set_data(id,user_teacher_id, status,branch_id,class_teacher_id,joining_date,department) {
            data.push({
                id,
                user_teacher_id,
                status,branch_id,class_teacher_id,joining_date,department,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        // set_data(1,22, 'active',21,'junior','2024-02-14','marketing');
        set_data(1,11, 'active',11,23,'2024-03-15','english');
        set_data(2,22, 'block',22,32,'2024-03-15','it');
        set_data(3,33, 'active',33,43,'2024-03-15','english');
        // set_data(1,23, 'active',33,'junior','2024-12-19','It');

        queryInterface.bulkDelete('branch_teachers');
        await queryInterface.bulkInsert('branch_teachers', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_teachers', null, {});
    },
};
