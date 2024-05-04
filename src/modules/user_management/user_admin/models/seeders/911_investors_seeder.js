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
        function set_data(id,branch_id,title,profit,description) {
            data.push({
                id,branch_id,title,profit,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'Muzzammil',5,'He invest money for 5 percent of profit');
        set_data(2,2,'Almas',5,'He invest money for 5 percent of profit');
        set_data(3,3,'Ehsan',5,'He invest money for 5 percent of profit');

       await queryInterface.bulkDelete('investors', null, {});

       try {
           await queryInterface.bulkInsert('investors', data, {});
        
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
        await queryInterface.bulkDelete('investors', null, {});
    },
};
