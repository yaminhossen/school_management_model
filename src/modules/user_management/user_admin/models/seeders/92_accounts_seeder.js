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
        function set_data(id,branch_id,title,description) {
            data.push({
                id,branch_id,title,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'Capital','This category includes accounts for large investments in assets with long-term benefits');
        set_data(2,2,'Revenue','Accounts in this category track all sources of income for the school');
        set_data(3,3,'Assets','Accounts for assets owned by the school, including cash, investments, land, buildings, equipment');

       await queryInterface.bulkDelete('accounts', null, {});

       try {
           await queryInterface.bulkInsert('accounts', data, {});
        
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
        await queryInterface.bulkDelete('accounts', null, {});
    },
};
