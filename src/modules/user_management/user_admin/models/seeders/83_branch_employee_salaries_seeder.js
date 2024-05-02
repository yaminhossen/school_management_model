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
        function set_data(id,branch_id,staff_id,teacher_id,effective_date,previous_salary,new_salary,change_type,reason,change_by,is_active) {
            data.push({
                id,branch_id,staff_id,teacher_id,effective_date,previous_salary,new_salary,change_type,reason,change_by,is_active,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,'2024-02-14',15000,20000,'increment','good work',1,'active');
        set_data(2,2,2,2,'2024-02-14',15000,14000,'decrement','bad performance work',1,'active');
        set_data(3,3,3,3,'2024-02-14',15000,20000,'increment','good work',1,'active');
        

       await queryInterface.bulkDelete('branch_employee_salaries', null, {});

       try {
           await queryInterface.bulkInsert('branch_employee_salaries', data, {});
        
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
        await queryInterface.bulkDelete('branch_employee_salaries', null, {});
    },
};
