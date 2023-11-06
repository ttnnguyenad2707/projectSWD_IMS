import Account from "./Account.js";
import Role from "./Role.js";
import Class from "./Class.js";
import Project from "./Project.js";
import ClassAccount from "./ClassMember.js";
import Subject from "./Subject.js";
import SubjectClass from "./Subjectclass.js";

import Issue from "./Issue.js";
import Setting from "./Setting.js";
import typeSetting from "./TypeSetting.js";
import Milestone from "./Milestones.js";
// 1 - nhiều account - role
Role.hasMany(Account, { as: "account", foreignKey: "roleId", sourceKey: "id" });
Account.belongsTo(Role, { as: "role", foreignKey: "roleId", targetKey: "id" });

// //nhieu nhieu project - account
// Project.belongsToMany(Account, {through: "ProjectMember",foreignKey: "projectId",otherKey: "accountId"});
// Account.belongsToMany(Project, {through: "ProjectMember",foreignKey: "accountId",otherKey: "projectId"});

// 1 nhiều : class project
Project.belongsTo(Class, {
  as: "classes",
  foreignKey: "classId",
  targetKey: "id",
});
Class.hasMany(Project, {
  as: "project",
  foreignKey: "classId",
  sourceKey: "id",
});

// nhiều nhiều class-account
Class.belongsToMany(Account, {
  through: ClassAccount,
  foreignKey: "classId",
  otherKey: "accountId",
});
Account.belongsToMany(Class, {
  through: ClassAccount,
  foreignKey: "accountId",
  otherKey: "classId",
});

Project.belongsTo(Account, { as: "teacher", foreignKey: "TeacherId" });

Project.belongsTo(Account, { as: "leader", foreignKey: "TeamLeader" });

Class.belongsToMany(Subject, { through: SubjectClass });
Subject.belongsToMany(Class, { through: SubjectClass });

//
Project.hasMany(Issue, {
  as: "issue",
  foreignKey: "projectId",
  sourceKey: "id",
});
Issue.belongsTo(Project, {
  as: "project",
  foreignKey: "projectId",
  sourceKey: "id",
});

Setting.belongsTo(typeSetting, { as: "settingType", foreignKey: "type" });

Milestone.belongsTo(Project,{as:'milestone-project',foreignKey:"projectId"})
Project.hasMany(Milestone, {as:'project-milestone', foreignKey: 'projectId' });

Milestone.belongsTo(Account, { foreignKey: 'user_create_id', as: 'CreatedBy' });
Milestone.belongsTo(Account, { foreignKey: 'assigned_create_id', as: 'AssignedTo' });

export { Account, Role, Class, Project, Issue, ClassAccount };
