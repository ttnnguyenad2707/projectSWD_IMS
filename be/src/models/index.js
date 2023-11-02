import Account from "./Account.js";
import Role from "./Role.js";
import Class from "./Class.js";
import Subject from "./Subject.js";
import SubjectClass from "./Subjectclass.js";

import Issue from "./Issue.js";

Role.hasMany(Account, { as: "account", foreignKey: "roleId" });
Account.belongsTo(Role, { as: "role", foreignKey: "roleId" });
Class.belongsToMany(Subject, {through: SubjectClass});
Subject.belongsToMany(Class, {through: SubjectClass})

export { Account, Role, Class, Issue,Subject };
