import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_model from './user_model';
import * as branches_model from './21_branches_model';
import * as branch_admins_model from './22_branch_admin_model';
import * as branch_students_model from './25_branch_students_model';
import * as branch_buildings_model from './27_branch_buildings_model';
import * as branch_building_rooms_model from './28_branch_building_rooms_model';
import * as branch_contacts_model from './29_branch_contacts_model';
import * as branch_informations_model from './210_branch_informations_model';
import * as branch_classes_model from './31_branch_classes_model';
import * as branch_class_fee_discount_model from './32_branch_class_fee_discounts_model';
import * as branch_parents_model from './26_branch_parents_model';
import * as branch_staffs_model from './23_branch_staffs_model';
import * as branch_teachers_model from './24_branch_teachers_model';
import * as user_admin_model from './11_user_admins_model';
import * as user_staffs_model from './13_user_staffs_model';
import * as user_teachers_model from './14_user_teachers_model';
import * as user_students_model from './15_user_students_model';
import * as user_parents_model from './16_user_parents_model';
import * as user_staff_informations_model from './17_user_staff_informations_model';
import * as user_teacher_informations_model from './18_user_teacher_informations_model';
import * as user_parent_informations_model from './19_user_parent_informations_model';
import * as user_student_educational_backgrounds_model from './110_user_student_educational_backgrounds_model';
import * as user_student_informations_model from './111_user_student_informations_model';
import * as user_login_histories_model from './112_user_login_histories_model';

import * as user_branch_admins_model from './12_user_branch_admins_model';
import * as project_model from '../../user_admin copy/models/project_model';
require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASS || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
);

interface models {
    User: typeof user_model.DataModel;
    Project: typeof project_model.DataModel;
    BranchesModel: typeof branches_model.DataModel;
    BranchAdminsModel: typeof branch_admins_model.DataModel;
    BranchBuildingsModel: typeof branch_buildings_model.DataModel;
    BranchClassesModel: typeof branch_classes_model.DataModel;
    BranchClassFeeDiscountsModel: typeof branch_class_fee_discount_model.DataModel;
    BranchContactsModel: typeof branch_contacts_model.DataModel;
    BranchInformationsModel: typeof branch_informations_model.DataModel;
    BranchBuildingRoomsModel: typeof branch_building_rooms_model.DataModel;
    BranchStudentsModel: typeof branch_students_model.DataModel;
    BranchParentsModel: typeof branch_parents_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    BranchTeachersModel: typeof branch_teachers_model.DataModel;
    UserAdminModel: typeof user_admin_model.DataModel;
    UserStaffsModel: typeof user_staffs_model.DataModel;
    UserTeachersModel: typeof user_teachers_model.DataModel;
    UserStudentsModel: typeof user_students_model.DataModel;
    UserParentsModel: typeof user_parents_model.DataModel;
    UserStaffInformationsModel: typeof user_staff_informations_model.DataModel;
    UserTeacherInformationsModel: typeof user_teacher_informations_model.DataModel;
    UserParentInformationsModel: typeof user_parent_informations_model.DataModel;
    UserStudentEducationalBackgroundsModel: typeof user_student_educational_backgrounds_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    UserLoginHistoriesModel: typeof user_login_histories_model.DataModel;
    UserBranchAdminsModel: typeof user_branch_admins_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const User = user_model.init(sequelize);
    const Project = project_model.init(sequelize);

    const UserAdminModel = user_admin_model.init(sequelize);
    const BranchesModel = branches_model.init(sequelize);
    const BranchAdminsModel = branch_admins_model.init(sequelize);
    const BranchBuildingsModel = branch_buildings_model.init(sequelize);
    const BranchContactsModel = branch_contacts_model.init(sequelize);
    const BranchClassesModel = branch_classes_model.init(sequelize);
    const BranchClassFeeDiscountsModel =
        branch_class_fee_discount_model.init(sequelize);
    const BranchInformationsModel = branch_informations_model.init(sequelize);
    const BranchBuildingRoomsModel =
        branch_building_rooms_model.init(sequelize);
    const BranchStudentsModel = branch_students_model.init(sequelize);
    const BranchParentsModel = branch_parents_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    const BranchTeachersModel = branch_teachers_model.init(sequelize);
    const UserStaffsModel = user_staffs_model.init(sequelize);
    const UserTeachersModel = user_teachers_model.init(sequelize);
    const UserStudentsModel = user_students_model.init(sequelize);
    const UserParentsModel = user_parents_model.init(sequelize);
    const UserStaffInformationsModel =
        user_staff_informations_model.init(sequelize);
    const UserTeacherInformationsModel =
        user_teacher_informations_model.init(sequelize);
    const UserParentInformationsModel =
        user_parent_informations_model.init(sequelize);
    const UserStudentEducationalBackgroundsModel =
        user_student_educational_backgrounds_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const UserLoginHistoriesModel = user_login_histories_model.init(sequelize);
    const UserBranchAdminsModel = user_branch_admins_model.init(sequelize);

    await sequelize.sync();

    Project.hasOne(User, {
        sourceKey: 'user_id',
        foreignKey: 'id',
        as: 'user',
    });

    User.hasMany(Project, {
        sourceKey: 'id',
        foreignKey: 'user_id',
        as: 'projects',
    });

    let models: models = {
        User,
        Project,
        UserAdminModel,
        UserStaffsModel,
        UserTeachersModel,
        UserStudentsModel,
        UserParentsModel,
        UserStaffInformationsModel,
        UserTeacherInformationsModel,
        UserParentInformationsModel,
        UserStudentEducationalBackgroundsModel,
        UserStudentInformationsModel,
        UserLoginHistoriesModel,
        UserBranchAdminsModel,
        BranchesModel,
        BranchAdminsModel,
        BranchStaffsModel,
        BranchTeachersModel,
        BranchStudentsModel,
        BranchParentsModel,
        BranchBuildingsModel,
        BranchBuildingRoomsModel,
        BranchContactsModel,
        BranchInformationsModel,
        BranchClassesModel,
        BranchClassFeeDiscountsModel,

        sequelize,
    };
    return models;
};
export default db;
