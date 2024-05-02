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
        function set_data(id,branch_id,staff_id,teacher_id,transaction_date,base_salary,deductions,bonuses,payment_type,account_log_id) {
            data.push({
                id,branch_id,staff_id,teacher_id,transaction_date,base_salary,deductions,bonuses,payment_type,account_log_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,'2024-02-14',15000,500,1500,'Regular',1);
        set_data(2,2,2,2,'2024-02-14',20000,500,200,'Regular',2);
        set_data(3,3,3,3,'2024-02-14',20000,500,200,'Bonus',3);
        

       await queryInterface.bulkDelete('branch_employee_payroll_transactions', null, {});

       try {
           await queryInterface.bulkInsert('branch_employee_payroll_transactions', data, {});
        
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
        await queryInterface.bulkDelete('branch_employee_payroll_transactions', null, {});
    },
};
