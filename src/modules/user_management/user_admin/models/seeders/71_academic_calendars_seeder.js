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
        function set_data(id,branch_id,event_name,date,description,event_type_id) {
            data.push({
                id,branch_id,event_name,date,description,event_type_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'pohela blishakh','2024-04-14','The Bengali New Year, celebrates renewal, cultural heritage',1);
        set_data(2,2,'boi mela','2024-02-12','Boi Mela is an annual book fair in Bangladesh, bustling with literary enthusiasts',2);
        set_data(3,3,'independence day','2024-03-26',"March 26th marks Bangladesh's Independence Day",3);
        

       await queryInterface.bulkDelete('academic_calendars', null, {});

       try {
           await queryInterface.bulkInsert('academic_calendars', data, {});
        
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
        await queryInterface.bulkDelete('academic_calendars', null, {});
    },
};
