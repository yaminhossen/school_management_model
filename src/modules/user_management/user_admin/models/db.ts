import {
    // Model,
    Sequelize,
} from 'sequelize';

import * as user_model from './user_model';
import * as project_model from '../../user_admin copy/models/project_model';
import * as student_attendances_model from './61_student_attendances_model';
import * as teacher_attendances_model from './62_teacher_attendances_model';
import * as staff_attendances_model from './63_staff_attendances_model';
import * as leave_types_model from './64_leave_types_model';
import * as leave_applications_model from './65_leave_applications_model';
import * as leave_application_paids_model from './66_leave_application_paids_model';

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
    StudentAttendancesModel: typeof student_attendances_model.DataModel;
    TeacherAttendancesModel: typeof teacher_attendances_model.DataModel;
    StaffAttendancesModel: typeof staff_attendances_model.DataModel;
    LeaveTypesModel: typeof leave_types_model.DataModel;
    LeaveApplicationsModel: typeof leave_applications_model.DataModel;
    LeaveApplicationPaidsModel: typeof leave_application_paids_model.DataModel;

    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const User = user_model.init(sequelize);
    const Project = project_model.init(sequelize);
    const StudentAttendancesModel = student_attendances_model.init(sequelize);
    const TeacherAttendancesModel = teacher_attendances_model.init(sequelize);
    const StaffAttendancesModel = staff_attendances_model.init(sequelize);
    const LeaveTypesModel = leave_types_model.init(sequelize);
    const LeaveApplicationsModel = leave_applications_model.init(sequelize);
    const LeaveApplicationPaidsModel =
        leave_application_paids_model.init(sequelize);

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
        StudentAttendancesModel,
        TeacherAttendancesModel,
        StaffAttendancesModel,
        LeaveTypesModel,
        LeaveApplicationsModel,
        LeaveApplicationPaidsModel,

        sequelize,
    };
    return models;
};
export default db;
