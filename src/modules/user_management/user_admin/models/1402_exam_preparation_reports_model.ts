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
const tableName = 'exam_preperation_reports';
const modelName = 'ExamPreperationReportsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
enum approved {
    pending = 'pending',
    approved = 'approved',
}

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare exam_id: number;
    declare text: string;
    declare attachments: string;
    declare comments: string;
    declare approved: approved;

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
            exam_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            text: {
                type: new DataTypes.TEXT,
                allowNull: true,
            },
            attachments: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            comments: {
                type: new DataTypes.TEXT,
                allowNull: true,
            },
            approved: {
                type: new DataTypes.ENUM('approved','pending'),
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
