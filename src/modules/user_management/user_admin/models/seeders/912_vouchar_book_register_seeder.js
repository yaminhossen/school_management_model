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
        function set_data(id,branch_id,book_no,start_serial,end_serial) {
            data.push({
                id,branch_id,book_no,start_serial,end_serial,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'1',1001,1080);
        set_data(2,2,'2',1001,2080);
        set_data(3,3,'3',101,580);

       await queryInterface.bulkDelete('vouchar_book_register', null, {});

       try {
           await queryInterface.bulkInsert('vouchar_book_register', data, {});
        
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
        await queryInterface.bulkDelete('vouchar_book_register', null, {});
    },
};
