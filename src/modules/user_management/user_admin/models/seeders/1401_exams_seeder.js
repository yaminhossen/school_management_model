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
        function set_data(id,branch_id,title,month,description) {
            data.push({
                id,branch_id,title,month,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'mid term','2024-02-14','mid term exam will start next sunday');
        set_data(2,2,'final term','2024-04-14','final term exam will start next saturday');
        set_data(3,3,'class test','2024-06-14','class test exam will start next monday');

       await queryInterface.bulkDelete('exams', null, {});

       try {
           await queryInterface.bulkInsert('exams', data, {});
        
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
        await queryInterface.bulkDelete('exams', null, {});
    },
};

