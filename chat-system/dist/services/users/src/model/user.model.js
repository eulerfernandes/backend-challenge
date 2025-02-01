"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database"); // Importa a conexão com o banco
// Classe do modelo User
class User extends sequelize_1.Model {
    id;
    email;
    password;
}
exports.User = User;
// Inicializa o modelo User no Sequelize
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: "User",
    tableName: "users", // Nome da tabela no PostgreSQL
    timestamps: true, // Adiciona createdAt e updatedAt
});
// Exporta o modelo User
exports.default = User;
