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
        function set_data(id,branch_id,account_category_id,title,description,date,year,amount) {
            data.push({
                id,branch_id,account_category_id,title,description,date,year,amount,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,'Salary','Six month salary','2024-02-14','2024-02-14',2000000);
        set_data(2,2,2,'Transport','Six month transport cost','2024-02-14','2024-02-14',40000);
        set_data(3,3,3,'Snacks','Six month snacks cost','2024-02-14','2024-02-14',30000);

       await queryInterface.bulkDelete('budgets_model', null, {});

       try {
           await queryInterface.bulkInsert('budgets_model', data, {});
        
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
        await queryInterface.bulkDelete('budgets_model', null, {});
    },
};
