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
        function set_data(id,branch_id,meeting_id,title,description,is_complete) {
            data.push({
                id,branch_id,meeting_id,title,description,is_complete,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,'student progress','on sunday will be held on student meetings','running');
        set_data(2,2,2,'teacher progress','on monday will be held on teacher meetings','pending');
        set_data(3,3,3,'one week progress','on friday will be held on progress meetings','running');

       await queryInterface.bulkDelete('meeting_agendas', null, {});

       try {
           await queryInterface.bulkInsert('meeting_agendas', data, {});
        
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
        await queryInterface.bulkDelete('meeting_agendas', null, {});
    },
};

