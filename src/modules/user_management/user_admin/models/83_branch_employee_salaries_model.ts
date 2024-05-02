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
const tableName = 'branch_employee_salaries';
const modelName = 'BranchEmployeeSalariesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
enum change_type {
    increment = 'increment',
    decrement = 'decrement',
    joining = 'joining',
}
enum is_active {
    active = 'active',
    deactive = 'deactive',
}

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare effective_date: string;
    declare previous_salary: number;
    declare new_salary: number;
    declare change_type: change_type;
    declare reason: string;
    declare change_by: number;
    declare is_active: is_active;

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
            staff_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            effective_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            previous_salary: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            new_salary: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            change_type: {
                type: DataTypes.ENUM('increment', 'decrement', 'joining'),
                allowNull: true,
            },
            reason: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            change_by: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            is_active: {
                type: DataTypes.ENUM('active', 'deactive'),
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
