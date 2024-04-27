import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_model from './user_model';
import * as user_admin_model from './user_admin_model';
import * as user_staffs_model from './user_staffs_model';
import * as user_branch_admins_model from './user_branch_admins_model';
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
    UserBranchAdminsModel: typeof user_branch_admins_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const User = user_model.init(sequelize);
    const Project = project_model.init(sequelize);

    const UserAdminModel = user_admin_model.init(sequelize);
    const UserStaffsModel = user_staffs_model.init(sequelize);
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
        UserBranchAdminsModel,

        sequelize,
    };
    return models;
};
export default db;
