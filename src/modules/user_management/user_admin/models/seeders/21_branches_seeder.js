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
        function set_data(id,branch_code, name,logo,address,primary_contact, email,map,lat,lng) {
            data.push({
                id,
                branch_code,
                name,logo,address,primary_contact, email, map, lat,lng,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,'22', 'saiful','logo.png','dhaka','923840293', 'saiful@gmail.com','map location','latitude','longitude');
        set_data(2,'23', 'arif','logo.png','khulna','387295375', 'arif@gmail.com','map location','latitude','longitude');
        set_data(3,'33', 'tarif','logo.png','barishal','734534523', 'tarif@gmail.com','map location','latitude','longitude');

        queryInterface.bulkDelete('branches');
        await queryInterface.bulkInsert('branches', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branches', null, {});
    },
};
