import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Achievements
 * const achievements = await prisma.achievement.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Achievement
 *
 */
export type Achievement = Prisma.AchievementModel;
/**
 * Model Blog
 *
 */
export type Blog = Prisma.BlogModel;
/**
 * Model Certificate
 *
 */
export type Certificate = Prisma.CertificateModel;
/**
 * Model ContactMessage
 *
 */
export type ContactMessage = Prisma.ContactMessageModel;
/**
 * Model Education
 *
 */
export type Education = Prisma.EducationModel;
/**
 * Model Experience
 *
 */
export type Experience = Prisma.ExperienceModel;
/**
 * Model GithubStats
 *
 */
export type GithubStats = Prisma.GithubStatsModel;
/**
 * Model Portfolio
 *
 */
export type Portfolio = Prisma.PortfolioModel;
/**
 * Model Project
 *
 */
export type Project = Prisma.ProjectModel;
/**
 * Model ProjectCategory
 *
 */
export type ProjectCategory = Prisma.ProjectCategoryModel;
/**
 * Model ProjectImage
 *
 */
export type ProjectImage = Prisma.ProjectImageModel;
/**
 * Model ProjectTag
 *
 */
export type ProjectTag = Prisma.ProjectTagModel;
/**
 * Model ProjectView
 *
 */
export type ProjectView = Prisma.ProjectViewModel;
/**
 * Model SeoSetting
 *
 */
export type SeoSetting = Prisma.SeoSettingModel;
/**
 * Model Service
 *
 */
export type Service = Prisma.ServiceModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Skill
 *
 */
export type Skill = Prisma.SkillModel;
/**
 * Model SocialLink
 *
 */
export type SocialLink = Prisma.SocialLinkModel;
/**
 * Model Testimonial
 *
 */
export type Testimonial = Prisma.TestimonialModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model VisitorAnalytics
 *
 */
export type VisitorAnalytics = Prisma.VisitorAnalyticsModel;
//# sourceMappingURL=client.d.ts.map