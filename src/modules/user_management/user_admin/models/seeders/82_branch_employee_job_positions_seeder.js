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
        function set_data(id,name,department,branch_employee_job_pay_grade_id,branch_id) {
            data.push({
                id,name,department,branch_employee_job_pay_grade_id,branch_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,'English Teacher','Arts',1,1);
        set_data(2,'Math Teacher','Science',2,2);
        set_data(3,'Managemet Teacher','Commerce',3,3);
        

       await queryInterface.bulkDelete('branch_employee_job_positions', null, {});

       try {
           await queryInterface.bulkInsert('branch_employee_job_positions', data, {});
        
       } catch (error) {
        
       }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_employee_job_positions', null, {});
    },
};
