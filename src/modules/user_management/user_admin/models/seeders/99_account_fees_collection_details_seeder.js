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
        function set_data(id,branch_id,branch_student_id,branch_student_class_id,account_fees_collection_id,branch_class_fees_id,date,fee_amount,diduction,total) {
            data.push({
                id,branch_id,branch_student_id,branch_student_class_id,account_fees_collection_id,branch_class_fees_id,date,fee_amount,diduction,total,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,1,1,'2024-02-14',3000,500,3500);
        set_data(2,2,2,2,2,2,'2024-03-14',2000,1000,3000);
        set_data(3,3,3,3,3,3,'2024-02-14',5000,1000,6000);

       await queryInterface.bulkDelete('account_fees_collection_details', null, {});

       try {
           await queryInterface.bulkInsert('account_fees_collection_details', data, {});
        
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
        await queryInterface.bulkDelete('account_fees_collection_details', null, {});
    },
};
