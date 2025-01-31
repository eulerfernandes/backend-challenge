import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database"; // Importa a conexão com o banco

// Definição dos atributos do usuário
interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

// Define quais atributos são opcionais ao criar um usuário
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Classe do modelo User
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public password!: string;
}

// Inicializa o modelo User no Sequelize
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users", // Nome da tabela no PostgreSQL
    timestamps: true, // Adiciona createdAt e updatedAt
  }
);

// Exporta o modelo User
export default User;
