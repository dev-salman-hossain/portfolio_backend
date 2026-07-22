import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Achievement: "Achievement";
    readonly Blog: "Blog";
    readonly Certificate: "Certificate";
    readonly ContactMessage: "ContactMessage";
    readonly Education: "Education";
    readonly Experience: "Experience";
    readonly GithubStats: "GithubStats";
    readonly Portfolio: "Portfolio";
    readonly Project: "Project";
    readonly ProjectCategory: "ProjectCategory";
    readonly ProjectImage: "ProjectImage";
    readonly ProjectTag: "ProjectTag";
    readonly ProjectView: "ProjectView";
    readonly SeoSetting: "SeoSetting";
    readonly Service: "Service";
    readonly Session: "Session";
    readonly Skill: "Skill";
    readonly SocialLink: "SocialLink";
    readonly Testimonial: "Testimonial";
    readonly User: "User";
    readonly VisitorAnalytics: "VisitorAnalytics";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AchievementScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly issuer: "issuer";
    readonly image: "image";
    readonly achievedAt: "achievedAt";
    readonly createdAt: "createdAt";
};
export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];
export declare const BlogScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly thumbnail: "thumbnail";
    readonly isPublished: "isPublished";
    readonly viewCount: "viewCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum];
export declare const CertificateScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly issuer: "issuer";
    readonly credentialUrl: "credentialUrl";
    readonly issueDate: "issueDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum];
export declare const ContactMessageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly subject: "subject";
    readonly message: "message";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum];
export declare const EducationScalarFieldEnum: {
    readonly id: "id";
    readonly institute: "institute";
    readonly degree: "degree";
    readonly field: "field";
    readonly startYear: "startYear";
    readonly endYear: "endYear";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum];
export declare const ExperienceScalarFieldEnum: {
    readonly id: "id";
    readonly company: "company";
    readonly position: "position";
    readonly description: "description";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];
export declare const GithubStatsScalarFieldEnum: {
    readonly id: "id";
    readonly githubUsername: "githubUsername";
    readonly followers: "followers";
    readonly following: "following";
    readonly publicRepos: "publicRepos";
    readonly totalStars: "totalStars";
    readonly lastSyncedAt: "lastSyncedAt";
    readonly updatedAt: "updatedAt";
};
export type GithubStatsScalarFieldEnum = (typeof GithubStatsScalarFieldEnum)[keyof typeof GithubStatsScalarFieldEnum];
export declare const PortfolioScalarFieldEnum: {
    readonly id: "id";
    readonly heroTitle: "heroTitle";
    readonly heroSubtitle: "heroSubtitle";
    readonly heroDescription: "heroDescription";
    readonly profileImage: "profileImage";
    readonly coverImage: "coverImage";
    readonly resumeUrl: "resumeUrl";
    readonly about: "about";
    readonly email: "email";
    readonly phone: "phone";
    readonly location: "location";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly content: "content";
    readonly thumbnail: "thumbnail";
    readonly githubUrl: "githubUrl";
    readonly liveUrl: "liveUrl";
    readonly technologies: "technologies";
    readonly featured: "featured";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly categoryId: "categoryId";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectCategoryScalarFieldEnum = (typeof ProjectCategoryScalarFieldEnum)[keyof typeof ProjectCategoryScalarFieldEnum];
export declare const ProjectImageScalarFieldEnum: {
    readonly id: "id";
    readonly imageUrl: "imageUrl";
    readonly projectId: "projectId";
    readonly createdAt: "createdAt";
};
export type ProjectImageScalarFieldEnum = (typeof ProjectImageScalarFieldEnum)[keyof typeof ProjectImageScalarFieldEnum];
export declare const ProjectTagScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum];
export declare const ProjectViewScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly viewedAt: "viewedAt";
};
export type ProjectViewScalarFieldEnum = (typeof ProjectViewScalarFieldEnum)[keyof typeof ProjectViewScalarFieldEnum];
export declare const SeoSettingScalarFieldEnum: {
    readonly id: "id";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly ogImage: "ogImage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeoSettingScalarFieldEnum = (typeof SeoSettingScalarFieldEnum)[keyof typeof SeoSettingScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly icon: "icon";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly sessionId: "sessionId";
    readonly refreshToken: "refreshToken";
    readonly deviceInfo: "deviceInfo";
    readonly ipAddress: "ipAddress";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly icon: "icon";
    readonly level: "level";
    readonly category: "category";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const SocialLinkScalarFieldEnum: {
    readonly id: "id";
    readonly platform: "platform";
    readonly url: "url";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum];
export declare const TestimonialScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly designation: "designation";
    readonly company: "company";
    readonly image: "image";
    readonly review: "review";
    readonly featured: "featured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly avatar: "avatar";
    readonly bio: "bio";
    readonly role: "role";
    readonly isVerified: "isVerified";
    readonly isTwoFactorEnabled: "isTwoFactorEnabled";
    readonly status: "status";
    readonly deletedAt: "deletedAt";
    readonly deleteAfter: "deleteAfter";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const VisitorAnalyticsScalarFieldEnum: {
    readonly id: "id";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly country: "country";
    readonly city: "city";
    readonly page: "page";
    readonly createdAt: "createdAt";
};
export type VisitorAnalyticsScalarFieldEnum = (typeof VisitorAnalyticsScalarFieldEnum)[keyof typeof VisitorAnalyticsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map