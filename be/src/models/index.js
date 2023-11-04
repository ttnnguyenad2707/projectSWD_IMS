import Account from "./Account.js";
import Role from "./Role.js";
import Class from "./Class.js";
import Project from "./Project.js";
import ClassAccount from "./ClassMember.js";
import Subject from "./Subject.js";
import SubjectClass from "./Subjectclass.js";

import Issue from "./Issue.js";
// 1 - nhiều account - role
Role.hasMany(Account, { as: "account", foreignKey: "roleId",sourceKey: "id" });
Account.belongsTo(Role, { as: "role", foreignKey: "roleId",targetKey: "id"  });

// //nhieu nhieu project - account
// Project.belongsToMany(Account, {through: "ProjectMember",foreignKey: "projectId",otherKey: "accountId"});
// Account.belongsToMany(Project, {through: "ProjectMember",foreignKey: "accountId",otherKey: "projectId"});

// 1 nhiều : class project
Project.belongsTo(Class, {as:"class",foreignKey: "classId",targetKey: "id"});
Class.hasMany(Project, {as:"project",foreignKey: "classId",sourceKey: "id"});

// nhiều nhiều class-account
Class.belongsToMany(Account, { through: ClassAccount,foreignKey: "classId",otherKey: "accountId" });
Account.belongsToMany(Class, { through: ClassAccount,foreignKey: "accountId",otherKey: "classId"  });





Class.belongsToMany(Subject, {through: SubjectClass});
Subject.belongsToMany(Class, {through: SubjectClass})

//
Project.hasMany(Issue,{as: 'issue',foreignKey: "projectId",sourceKey: "id"});
Issue.belongsTo(Project,{as: 'project',foreignKey:"projectId",sourceKey: "id" });

export { Account, Role, Class, Project,Issue };
