import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_model from './user_model';
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

        sequelize,
    };
    return models;
};
export default db;
