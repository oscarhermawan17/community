// import _sequelize from "sequelize";
// import { Sequelize } from "sequelize";

// const DataTypes = _sequelize.DataTypes;

// export default function initModels(sequelize) {


//   return {
//   };
// }
import { User } from './index.js'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  User.sync({ alter: isDev })
}
export default dbInit