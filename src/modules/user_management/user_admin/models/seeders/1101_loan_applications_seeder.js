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
        function set_data(id,branch_id,branch_teacher_id,branch_staff_id,loan_type_id,need_date,application_date,reason,status,attachments,will_pay_date,request_amount,pay_amount,given_date) {
            data.push({
                id,branch_id,branch_teacher_id,branch_staff_id,loan_type_id,need_date,application_date,reason,status,attachments,will_pay_date,request_amount,pay_amount,given_date,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1,1,1,1,1,'2024-04-14','2024-02-14','Now i,m not abble to paid my tution fees','Pending','atts.pdf','2024-04-12',10000, 8000,'2024-08-14');
        set_data(2,2,2,2,2,'2024-05-14','2024-02-10','Now i,m not abble to paid my tution fees','Approved','atts1.pdf','2024-05-12',20000, 20000,'2024-08-14');
        set_data(3,3,3,3,3,'2024-04-14','2024-02-14','Now i,m not abble to paid my tution fees','Pending','atts.pdf','2024-04-12',15000, 10000,'2024-08-14');

       await queryInterface.bulkDelete('loan_applications', null, {});

       try {
           await queryInterface.bulkInsert('loan_applications', data, {});
        
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
        await queryInterface.bulkDelete('loan_applications', null, {});
    },
};

