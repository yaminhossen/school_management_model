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
        function set_data(id,branch_id,title,description,date) {
            data.push({
                id,branch_id,title,description,date,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'teacher meating','on sunday will be held on teacher meetings','2024-02-14');
        set_data(2,2,'parents meating','on satarday will be held on parents meetings','2024-02-14');
        set_data(3,3,'studnent meating','on monday will be held on student meetings','2024-02-14');

       await queryInterface.bulkDelete('meetings', null, {});

       try {
           await queryInterface.bulkInsert('meetings', data, {});
        
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
        await queryInterface.bulkDelete('meetings', null, {});
    },
};

