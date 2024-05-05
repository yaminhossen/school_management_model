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
        function set_data(id,branch_id,asset_category_id,asset_type_id,purchase_date,purchase_cost,current_value,waranty_date,attchments) {
            data.push({
                id,branch_id,asset_category_id,asset_type_id,purchase_date,purchase_cost,current_value,waranty_date,attchments,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,'2024-02-14',1000,1200,'2025-02-14','att.pdf');
        set_data(2,2,2,2,'2024-02-14',2000,2200,'2025-02-14','att.pdf');
        set_data(3,3,3,3,'2024-02-14',1500,2000,'2025-02-14','att.pdf');

       await queryInterface.bulkDelete('assets', null, {});

       try {
           await queryInterface.bulkInsert('assets', data, {});
        
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
        await queryInterface.bulkDelete('assets', null, {});
    },
};

