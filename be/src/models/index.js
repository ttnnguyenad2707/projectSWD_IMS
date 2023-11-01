import Account from "./Account.js";
import Role from "./Role.js";



Role.hasMany(Account, { as: "account", foreignKey: "roleId" });

Account.belongsTo(Role, { as: "role", foreignKey: "roleId" });


export {Account,Role}