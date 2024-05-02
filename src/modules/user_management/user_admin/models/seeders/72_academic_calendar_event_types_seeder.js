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
        function set_data(id,title,description) {
            data.push({
                id,title,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,'Examinations','Dates for mid-term exams, final exams, and assessments');
        set_data(2,'Sports Day',' Annual event for sports competitions and activities.');
        set_data(3,'Cultural Events','Celebrations of cultural festivals, anniversaries, and special occasions');
        

       await queryInterface.bulkDelete('academic_calendar_event_types', null, {});

       try {
           await queryInterface.bulkInsert('academic_calendar_event_types', data, {});
        
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
        await queryInterface.bulkDelete('academic_calendar_event_types', null, {});
    },
};
