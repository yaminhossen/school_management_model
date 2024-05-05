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
        function set_data(id,branch_id,title,color,description) {
            data.push({
                id,branch_id,title,color,description,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,'Employee','green','Class routine create before next sunday');
        set_data(2,2,'Teacher','red','Class schedule create before next monday');
        set_data(3,3,'Management','yellow','exam fee colect before next sunday');

       await queryInterface.bulkDelete('task_groups', null, {});

       try {
           await queryInterface.bulkInsert('task_groups', data, {});
        
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
        await queryInterface.bulkDelete('task_groups', null, {});
    },
};

