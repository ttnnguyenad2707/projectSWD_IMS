import Account from "./Account.js";
import Role from "./Role.js";
import Class from "./Class.js";
import Project from "./Project.js";
import ProjectMember from "./ProjectMember.js";
import Group from "./Group.js";
import ClassAccount from "./ClassMember.js";
import GroupMember from "./GroupMember.js";
// 1 - nhiều account - role
Role.hasMany(Account, { as: "account", foreignKey: "roleId",sourceKey: "id" });

Account.belongsTo(Role, { as: "role", foreignKey: "roleId",targetKey: "id"  });

//nhieu nhieu project - account
Project.belongsToMany(Account, {through: "ProjectMember",foreignKey: "projectId",otherKey: "accountId"});
Account.belongsToMany(Project, {through: "ProjectMember",foreignKey: "accountId",otherKey: "projectId"});

// 1 nhiều : class project
Project.belongsTo(Class, {as:"class",foreignKey: "classId",targetKey: "id"});
Class.hasMany(Project, {as:"project",foreignKey: "classId",sourceKey: "id"});

// nhiều nhiều class-account
Class.belongsToMany(Account, { through: ClassAccount,foreignKey: "classId",otherKey: "accountId" });
Account.belongsToMany(Class, { through: ClassAccount,foreignKey: "accountId",otherKey: "classId"  });

// 1 nhieu class-group
Class.hasMany(Group,{as: 'group',foreignKey: "classId",sourceKey: "id"});
Group.belongsTo(Class,{as: 'class',foreignKey:"classId",sourceKey: "id" });

//nhieu nhieu group account
Group.belongsToMany(Account,{through:GroupMember,foreignKey:"groupId",otherKey: "accountId"})
Account.belongsToMany(Group,{through:GroupMember,foreignKey:"accountId",otherKey:"groupId"})




export { Account, Role, Class, Project,ProjectMember,Group };
