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
const tableName = 'teacher_kpi_reports';
const modelName = 'TeacherKpiReportsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare branch_teacher_id: number;
    declare kpi_name: string;
    declare evaluation_date: string;
    declare kpi_value: number;

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
            branch_teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            kpi_name: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            evaluation_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            kpi_value: {
                type: DataTypes.FLOAT.UNSIGNED,
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
