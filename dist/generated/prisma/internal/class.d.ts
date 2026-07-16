import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Achievements
  * const achievements = await prisma.achievement.findMany()
  * ```
  */
    get achievement(): Prisma.AchievementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Blogs
      * const blogs = await prisma.blog.findMany()
      * ```
      */
    get blog(): Prisma.BlogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Certificates
      * const certificates = await prisma.certificate.findMany()
      * ```
      */
    get certificate(): Prisma.CertificateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ContactMessages
      * const contactMessages = await prisma.contactMessage.findMany()
      * ```
      */
    get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.education`: Exposes CRUD operations for the **Education** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Educations
      * const educations = await prisma.education.findMany()
      * ```
      */
    get education(): Prisma.EducationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Experiences
      * const experiences = await prisma.experience.findMany()
      * ```
      */
    get experience(): Prisma.ExperienceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.githubStats`: Exposes CRUD operations for the **GithubStats** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more GithubStats
      * const githubStats = await prisma.githubStats.findMany()
      * ```
      */
    get githubStats(): Prisma.GithubStatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Portfolios
      * const portfolios = await prisma.portfolio.findMany()
      * ```
      */
    get portfolio(): Prisma.PortfolioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.project`: Exposes CRUD operations for the **Project** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Projects
      * const projects = await prisma.project.findMany()
      * ```
      */
    get project(): Prisma.ProjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.projectCategory`: Exposes CRUD operations for the **ProjectCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProjectCategories
      * const projectCategories = await prisma.projectCategory.findMany()
      * ```
      */
    get projectCategory(): Prisma.ProjectCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.projectImage`: Exposes CRUD operations for the **ProjectImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProjectImages
      * const projectImages = await prisma.projectImage.findMany()
      * ```
      */
    get projectImage(): Prisma.ProjectImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.projectTag`: Exposes CRUD operations for the **ProjectTag** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProjectTags
      * const projectTags = await prisma.projectTag.findMany()
      * ```
      */
    get projectTag(): Prisma.ProjectTagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.projectView`: Exposes CRUD operations for the **ProjectView** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProjectViews
      * const projectViews = await prisma.projectView.findMany()
      * ```
      */
    get projectView(): Prisma.ProjectViewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.seoSetting`: Exposes CRUD operations for the **SeoSetting** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SeoSettings
      * const seoSettings = await prisma.seoSetting.findMany()
      * ```
      */
    get seoSetting(): Prisma.SeoSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.service`: Exposes CRUD operations for the **Service** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Services
      * const services = await prisma.service.findMany()
      * ```
      */
    get service(): Prisma.ServiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Skills
      * const skills = await prisma.skill.findMany()
      * ```
      */
    get skill(): Prisma.SkillDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SocialLinks
      * const socialLinks = await prisma.socialLink.findMany()
      * ```
      */
    get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Testimonials
      * const testimonials = await prisma.testimonial.findMany()
      * ```
      */
    get testimonial(): Prisma.TestimonialDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.visitorAnalytics`: Exposes CRUD operations for the **VisitorAnalytics** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VisitorAnalytics
      * const visitorAnalytics = await prisma.visitorAnalytics.findMany()
      * ```
      */
    get visitorAnalytics(): Prisma.VisitorAnalyticsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map