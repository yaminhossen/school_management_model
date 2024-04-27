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
        function set_data(id,user_student_id,present_address,permanent_address,date_of_birth,gender, nationality,city,state,zip_code,post_code,country,personal_contact_number,parent_contact_number,emergency_contact_number,emergency_contact_name,emergency_contact_relation,parent_relationship,medical_condition,current_medications,speacial_skills,language_proficency,telegram_name, telegram_id) {
            data.push({
                id,
                user_student_id,
                present_address,
                permanent_address,
                date_of_birth,
                gender,
                nationality,
                city,
                state,
                zip_code,
                post_code,
                country,
                personal_contact_number,
                parent_contact_number,
                emergency_contact_number,
                emergency_contact_name,
                emergency_contact_relation,
                parent_relationship,
                medical_condition,
                current_medications,
                speacial_skills,
                language_proficency,
                telegram_name,
                telegram_id,
                created_at:'2024-02-14',
                updated_at:'2024-02-14',
            })
        }
        set_data(1, 1, 'dhaka','khulna','2024-02-14','male','bangladeshi','khulna','khulna','1216','1216','bangladesh','0183203928','93258230580','032948230','abdullah','brother','father','ok','no','athlets','bangla','abu_ehsan','@ehsan1234');
        set_data(2, 1, 'dhaka','barishal','2024-02-14','female','bangladeshi','barishal','barishal','','1216','bangladesh','0183203928','93258230580','032948230','abdullah','brother','father','ok','no','singing','bangla','mz_haque','@muzzummil12');
        set_data(3, 1, 'dhaka','shylhet','2024-02-14','male','bangladeshi','shylhet','shylhet','','1216','bangladesh','0183203928','93258230580','032948230','abdullah','brother','father','ok','no','footballer','english','taimur_long','@taimul1234');
        queryInterface.bulkDelete('user_student_informations');
        await queryInterface.bulkInsert('user_student_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_informations', null, {});
    },
};
