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
const tableName = 'account_vouchers';
const modelName = 'AccountVouchersModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
enum approved {
    pending = 'pending',
    accepted = 'accepted',
    rejected = 'rejected',
}

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare account_category_id: number;
    declare account_log_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare description: string;
    declare amount: number;
    declare is_approved: approved;
    declare attachment: string;
    declare date: string;
    declare amount_in_text: string;

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
            account_log_id: {
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
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            amount: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            is_approved: {
                type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
                allowNull: true,
            },
            attachment: {
                type: new DataTypes.STRING(),
                allowNull: true,
            },
            date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            amount_in_text: {
                type: new DataTypes.STRING(120),
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
