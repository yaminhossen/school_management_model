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
        function set_data(id,branch_id,branch_class_id,branch_class_fee_id,title, description,amount,discount_type) {
            data.push({
                id,branch_id,branch_class_id,branch_class_fee_id,title, description,amount,discount_type,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,2,2,2, 'Getter than 80 % marks','He got 890 marks out of 1000',2000,'percentage');
        set_data(2,3,3,3, 'Get GPA-5','He got 900 marks out of 1000',2000,'percentage');
        set_data(3,4,4,4, 'Class topper','He got 920 marks out of 1000',3000,'fixed');

        queryInterface.bulkDelete('branch_classe_fee_discounts');
        await queryInterface.bulkInsert('branch_classe_fee_discounts', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_classe_fee_discounts', null, {});
    },
};
