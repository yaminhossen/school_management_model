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
        function set_data(id,branch_id,asset_id,useful_life_months,current_value,last_depreciation_date,after_depreciation_value,depreciation_interval,depreciation_amount,depreciation_unit,approximate_lasting_duration) {
            data.push({
                id,branch_id,asset_id,useful_life_months,current_value,last_depreciation_date,after_depreciation_value,depreciation_interval,depreciation_amount,depreciation_unit,approximate_lasting_duration,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,9,10000,'2024-02-14',5500,12,4500,'1pc',20);
        set_data(2,2,2,5,20000,'2024-02-14',10000,12,10000,'1pc',18);
        set_data(3,3,3,9,30000,'2024-02-14',25000,8,5000,'1pc',17);

       await queryInterface.bulkDelete('asset_depreciations', null, {});

       try {
           await queryInterface.bulkInsert('asset_depreciations', data, {});
        
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
        await queryInterface.bulkDelete('asset_depreciations', null, {});
    },
};

