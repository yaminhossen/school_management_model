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
const tableName = 'asset_depreciations';
const modelName = 'AssetDepreciationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
// enum approved {
//     pending = 'pending',
//     accepted = 'accepted',
//     rejected = 'rejected',
// }

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare branch_id: number;
    declare asset_id: number;
    declare useful_life_months: number;
    declare current_value: number;
    declare last_depreciation_date: string;
    declare after_depreciation_value: number;
    declare depreciation_interval: number;
    declare depreciation_amount: number;
    declare depreciation_unit: string;
    declare approximate_lasting_duration: number;

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
            asset_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            useful_life_months: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            current_value: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            last_depreciation_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            after_depreciation_value: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            depreciation_interval: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            depreciation_amount: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            depreciation_unit: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            approximate_lasting_duration: {
                type: new DataTypes.FLOAT().UNSIGNED,
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
