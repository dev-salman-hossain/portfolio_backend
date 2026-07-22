export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLOCKED: "BLOCKED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ProjectStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const SkillCategory: {
    readonly FRONTEND: "FRONTEND";
    readonly BACKEND: "BACKEND";
    readonly DATABASE: "DATABASE";
    readonly DEVOPS: "DEVOPS";
    readonly TOOL: "TOOL";
};
export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory];
export declare const ContactStatus: {
    readonly UNREAD: "UNREAD";
    readonly READ: "READ";
    readonly REPLIED: "REPLIED";
};
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];
//# sourceMappingURL=enums.d.ts.map