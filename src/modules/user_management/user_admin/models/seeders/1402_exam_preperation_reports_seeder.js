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
        function set_data(id,branch_id,exam_id,text,attachments,comments,approved) {
            data.push({
                id,branch_id,exam_id,text,attachments,comments,approved,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,'mid term','file.pdf','mid term exam will start next sunday','approved');
        set_data(2,2,2,'final term','file.pdf','mid term exam will start next monday','approved');
        set_data(3,3,3,'class test','file.pdf','mid term exam will start next saturday','pending');

       await queryInterface.bulkDelete('exam_preperation_reports', null, {});

       try {
           await queryInterface.bulkInsert('exam_preperation_reports', data, {});
        
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
        await queryInterface.bulkDelete('exam_preperation_reports', null, {});
    },
};

