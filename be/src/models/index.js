import Account from "./Account.js";
import Role from "./Role.js";
import Class from "./Class.js";

Role.hasMany(Account, { as: "account", foreignKey: "roleId" });

Account.belongsTo(Role, { as: "role", foreignKey: "roleId" });

export { Account, Role, Class };
