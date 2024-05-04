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
        function set_data(id,branch_id,account_category_id,account_log_id,staff_id,teacher_id,description,amount,is_approved,attachment,date,amount_in_text) {
            data.push({
                id,branch_id,account_category_id,account_log_id,staff_id,teacher_id,description,amount,is_approved,attachment,date,amount_in_text,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,1,1,'last three month salary',100000,'pending','att.pdf','2024-02-14','one lak taka only');
        set_data(2,2,2,2,2,2,'last three month transport cost',50000,'accepted','att.pdf','2024-02-14','fifteen thousand taka only');
        set_data(3,3,3,3,3,3,'last three month snacks bill',10000,'pending','att.pdf','2024-02-14','ten thousand taka only');

       await queryInterface.bulkDelete('account_vouchers', null, {});

       try {
           await queryInterface.bulkInsert('account_vouchers', data, {});
        
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
        await queryInterface.bulkDelete('account_vouchers', null, {});
    },
};
