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
        function set_data(id,branch_id,title,date,description) {
            data.push({
                id,branch_id,title,date,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'Furniture audit','2024-02-14','how much furniture is workable');
        set_data(2,2,'Computer Check','2024-02-14','how much computer is ok');
        set_data(3,3,'Electrick goods','2024-02-14','all fan light and switch is cheacked');

       await queryInterface.bulkDelete('asset_audits', null, {});

       try {
           await queryInterface.bulkInsert('asset_audits', data, {});
        
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
        await queryInterface.bulkDelete('asset_audits', null, {});
    },
};

