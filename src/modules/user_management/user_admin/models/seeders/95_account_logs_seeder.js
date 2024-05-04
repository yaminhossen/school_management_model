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
        function set_data(id,branch_id,account_category_id,account_id,amount,type,account_period_id,account_receipt_book_id) {
            data.push({
                id,branch_id,account_category_id,account_id,amount,type,account_period_id,account_receipt_book_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,100000,'income',1,1);
        set_data(2,2,2,2,200000,'income',2,2);
        set_data(3,3,3,3,10000,'expense',3,3);

       await queryInterface.bulkDelete('account_logs', null, {});

       try {
           await queryInterface.bulkInsert('account_logs', data, {});
        
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
        await queryInterface.bulkDelete('account_logs', null, {});
    },
};
