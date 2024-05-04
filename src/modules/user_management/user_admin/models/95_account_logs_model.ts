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
const tableName = 'account_logs';
const modelName = 'AccountLogsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
enum type {
    income = 'income',
    expense = 'expense',
}

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare account_category_id: number;
    declare account_id: number;
    declare amount: number;
    declare type: type;
    declare account_period_id: number;
    declare account_receipt_book_id: number;

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
            account_category_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            account_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            amount: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            type: {
                type: DataTypes.ENUM('income', 'expense'),
                allowNull: true,
            },
            account_period_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            account_receipt_book_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
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
