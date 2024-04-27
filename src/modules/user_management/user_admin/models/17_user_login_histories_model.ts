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
const tableName = 'user_login_histories';
const modelName = 'UserLoginHistoriesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;

class DataModel extends Model<Infer, InferCreation> {
    declare id: CreationOptional<number>;

    declare user_id: number;
    declare user_table_name: string;
    declare date: string | null;
    declare device: string | null;

    declare false_attempt_count?: number;
    // declare auth_token: string | null;

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
            user_id: {
                type: new DataTypes.NUMBER(),
                allowNull: true,
            },
            user_table_name: {
                type: new DataTypes.STRING(60),
                allowNull: true,
            },
            date: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            device: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },

            // password: {
            //     type: new DataTypes.STRING(120),
            //     allowNull: true,
            // },
            // auth_token: {
            //     type: new DataTypes.STRING(120),
            //     allowNull: true,
            // },
            false_attempt_count: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: 0,
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
