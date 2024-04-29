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
        function set_data(id,branch_id,branch_class_id,branch_class_fee_id,title, description,amount) {
            data.push({
                id,branch_id,branch_class_id,branch_class_fee_id,title, description,amount,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,2,2,2, 'Full free schoolership','He got 890 marks out of 1000',2000);
        set_data(2,3,3,3, '4 out of 4','He got 900 marks out of 1000',2000);
        set_data(3,4,4,4, '3.5 out of 4','He got 700 marks out of 1000',1000);

        queryInterface.bulkDelete('branch_class_fee_waivers');
        await queryInterface.bulkInsert('branch_class_fee_waivers', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_class_fee_waivers', null, {});
    },
};
