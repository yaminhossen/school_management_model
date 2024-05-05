import {
    // Association,
    DataTypes,
    // HasManyAddAssociationMixin,
    // HasManyCountAssociationsMixin,
    // HasManyCreateAssociationMixin,
    // HasManyGetAssociationsMixin,
    // HasManyHasAssociationMixin,
    // HasManySetAssociationsMixin,
    // HasManyAddAssociationsMixin,
    // HasManyHasAssociationsMixin,
    // HasManyRemoveAssociationMixin,
    // HasManyRemoveAssociationsMixin,
    Model,
    // ModelDefined,
    // Optional,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DefaultSetOptions,
    // NonAttribute,
    // ForeignKey,
} from 'sequelize';

// import {DataModel as Project} from "./project_model"
const tableName = 'task_users';
const modelName = 'TaskUsersModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
enum is_complete {
    pending = 'pending',
    running = 'running',
    completed = 'completed',
    nexttime = 'nexttime',
}

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare task_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare admin_id: number;
    declare is_completed: is_complete;

    declare status?: number;
    declare creator?: number;

    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
}

function init(sequelize: Sequelize) {
    DataModel.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },

            branch_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            task_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            staff_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            admin_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            is_completed: {
                type: new DataTypes.ENUM(
                    'pending',
                    'running',
                    'completed',
                    'nexttime',
                ),
                allowNull: true,
            },

            status: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: 1,
            },
            creator: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: null,
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            tableName: tableName,
            modelName: modelName,
            sequelize, // passing the `sequelize` instance is required
            underscored: true,
        },
    );

    return DataModel;
}

export { init, DataModel };
