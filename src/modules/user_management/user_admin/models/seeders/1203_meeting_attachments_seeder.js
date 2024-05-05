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
        function set_data(id,branch_id,meeting_id,attachment,text) {
            data.push({
                id,branch_id,meeting_id,attachment,text,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,'atta1.pdf','on sunday will be held on student meetings');
        set_data(2,2,2,'atta2.pdf','on monday will be held on parents meetings');
        set_data(3,3,3,'atta3.pdf','on tuesday will be held on weakly meetings');

       await queryInterface.bulkDelete('meeting_attachments', null, {});

       try {
           await queryInterface.bulkInsert('meeting_attachments', data, {});
        
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
        await queryInterface.bulkDelete('meeting_attachments', null, {});
    },
};

