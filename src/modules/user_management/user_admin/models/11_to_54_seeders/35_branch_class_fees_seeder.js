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
        function set_data(id,branch_id,branch_class_id,name, description,amount,fee_type_id) {
            data.push({
                id,branch_id,branch_class_id,name, description,amount,fee_type_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,2,2, 'Admission fee','Fee paid upon admission to the institution',5000,2);
        set_data(2,3,3, 'Session fee','Fee paid for each academic session',3000,3);
        set_data(3,4,4, 'Exam fee','Fee paid for examination expenses',2000,4);
        // set_data(3,5,5, 'Monthly fee','Fee paid on a monthly basis for tuition');
        // set_data(3,6,6, 'Development fee','Fee for development and infrastructure');
        // set_data(3,7,7, 'library fee',' Fee for access to library resources');
        // set_data(3,8,8, 'Study tour fee','Fee for organized study tours');

       await queryInterface.bulkDelete('branch_class_fees', null, {});

       try {
           await queryInterface.bulkInsert('branch_class_fees', data, {});
        
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
        await queryInterface.bulkDelete('branch_class_fees', null, {});
    },
};
