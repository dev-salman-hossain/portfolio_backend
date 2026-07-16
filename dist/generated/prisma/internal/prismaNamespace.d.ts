import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "achievement" | "blog" | "certificate" | "contactMessage" | "education" | "experience" | "githubStats" | "portfolio" | "project" | "projectCategory" | "projectImage" | "projectTag" | "projectView" | "seoSetting" | "service" | "session" | "skill" | "socialLink" | "testimonial" | "user" | "visitorAnalytics";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Achievement: {
            payload: Prisma.$AchievementPayload<ExtArgs>;
            fields: Prisma.AchievementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AchievementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                findFirst: {
                    args: Prisma.AchievementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                findMany: {
                    args: Prisma.AchievementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                create: {
                    args: Prisma.AchievementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                createMany: {
                    args: Prisma.AchievementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                delete: {
                    args: Prisma.AchievementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                update: {
                    args: Prisma.AchievementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                deleteMany: {
                    args: Prisma.AchievementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AchievementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                upsert: {
                    args: Prisma.AchievementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                aggregate: {
                    args: Prisma.AchievementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAchievement>;
                };
                groupBy: {
                    args: Prisma.AchievementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchievementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AchievementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchievementCountAggregateOutputType> | number;
                };
            };
        };
        Blog: {
            payload: Prisma.$BlogPayload<ExtArgs>;
            fields: Prisma.BlogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                findFirst: {
                    args: Prisma.BlogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                findMany: {
                    args: Prisma.BlogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>[];
                };
                create: {
                    args: Prisma.BlogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                createMany: {
                    args: Prisma.BlogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>[];
                };
                delete: {
                    args: Prisma.BlogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                update: {
                    args: Prisma.BlogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                deleteMany: {
                    args: Prisma.BlogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>[];
                };
                upsert: {
                    args: Prisma.BlogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPayload>;
                };
                aggregate: {
                    args: Prisma.BlogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlog>;
                };
                groupBy: {
                    args: Prisma.BlogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BlogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogCountAggregateOutputType> | number;
                };
            };
        };
        Certificate: {
            payload: Prisma.$CertificatePayload<ExtArgs>;
            fields: Prisma.CertificateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CertificateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findFirst: {
                    args: Prisma.CertificateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findMany: {
                    args: Prisma.CertificateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                create: {
                    args: Prisma.CertificateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                createMany: {
                    args: Prisma.CertificateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                delete: {
                    args: Prisma.CertificateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                update: {
                    args: Prisma.CertificateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                deleteMany: {
                    args: Prisma.CertificateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CertificateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                upsert: {
                    args: Prisma.CertificateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                aggregate: {
                    args: Prisma.CertificateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCertificate>;
                };
                groupBy: {
                    args: Prisma.CertificateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CertificateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateCountAggregateOutputType> | number;
                };
            };
        };
        ContactMessage: {
            payload: Prisma.$ContactMessagePayload<ExtArgs>;
            fields: Prisma.ContactMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findFirst: {
                    args: Prisma.ContactMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findMany: {
                    args: Prisma.ContactMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                create: {
                    args: Prisma.ContactMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                createMany: {
                    args: Prisma.ContactMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                delete: {
                    args: Prisma.ContactMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                update: {
                    args: Prisma.ContactMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                upsert: {
                    args: Prisma.ContactMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                aggregate: {
                    args: Prisma.ContactMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactMessage>;
                };
                groupBy: {
                    args: Prisma.ContactMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageCountAggregateOutputType> | number;
                };
            };
        };
        Education: {
            payload: Prisma.$EducationPayload<ExtArgs>;
            fields: Prisma.EducationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EducationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                findFirst: {
                    args: Prisma.EducationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                findMany: {
                    args: Prisma.EducationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                create: {
                    args: Prisma.EducationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                createMany: {
                    args: Prisma.EducationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                delete: {
                    args: Prisma.EducationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                update: {
                    args: Prisma.EducationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                deleteMany: {
                    args: Prisma.EducationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EducationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>[];
                };
                upsert: {
                    args: Prisma.EducationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EducationPayload>;
                };
                aggregate: {
                    args: Prisma.EducationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEducation>;
                };
                groupBy: {
                    args: Prisma.EducationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EducationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EducationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EducationCountAggregateOutputType> | number;
                };
            };
        };
        Experience: {
            payload: Prisma.$ExperiencePayload<ExtArgs>;
            fields: Prisma.ExperienceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExperienceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                findFirst: {
                    args: Prisma.ExperienceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                findMany: {
                    args: Prisma.ExperienceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                create: {
                    args: Prisma.ExperienceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                createMany: {
                    args: Prisma.ExperienceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                delete: {
                    args: Prisma.ExperienceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                update: {
                    args: Prisma.ExperienceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                deleteMany: {
                    args: Prisma.ExperienceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExperienceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
                };
                upsert: {
                    args: Prisma.ExperienceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExperiencePayload>;
                };
                aggregate: {
                    args: Prisma.ExperienceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExperience>;
                };
                groupBy: {
                    args: Prisma.ExperienceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExperienceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExperienceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExperienceCountAggregateOutputType> | number;
                };
            };
        };
        GithubStats: {
            payload: Prisma.$GithubStatsPayload<ExtArgs>;
            fields: Prisma.GithubStatsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GithubStatsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GithubStatsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                findFirst: {
                    args: Prisma.GithubStatsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GithubStatsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                findMany: {
                    args: Prisma.GithubStatsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>[];
                };
                create: {
                    args: Prisma.GithubStatsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                createMany: {
                    args: Prisma.GithubStatsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GithubStatsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>[];
                };
                delete: {
                    args: Prisma.GithubStatsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                update: {
                    args: Prisma.GithubStatsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                deleteMany: {
                    args: Prisma.GithubStatsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GithubStatsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GithubStatsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>[];
                };
                upsert: {
                    args: Prisma.GithubStatsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GithubStatsPayload>;
                };
                aggregate: {
                    args: Prisma.GithubStatsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGithubStats>;
                };
                groupBy: {
                    args: Prisma.GithubStatsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GithubStatsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GithubStatsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GithubStatsCountAggregateOutputType> | number;
                };
            };
        };
        Portfolio: {
            payload: Prisma.$PortfolioPayload<ExtArgs>;
            fields: Prisma.PortfolioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                findMany: {
                    args: Prisma.PortfolioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                create: {
                    args: Prisma.PortfolioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                createMany: {
                    args: Prisma.PortfolioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                delete: {
                    args: Prisma.PortfolioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                update: {
                    args: Prisma.PortfolioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolio>;
                };
                groupBy: {
                    args: Prisma.PortfolioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioCountAggregateOutputType> | number;
                };
            };
        };
        Project: {
            payload: Prisma.$ProjectPayload<ExtArgs>;
            fields: Prisma.ProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findMany: {
                    args: Prisma.ProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                create: {
                    args: Prisma.ProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                update: {
                    args: Prisma.ProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProject>;
                };
                groupBy: {
                    args: Prisma.ProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCountAggregateOutputType> | number;
                };
            };
        };
        ProjectCategory: {
            payload: Prisma.$ProjectCategoryPayload<ExtArgs>;
            fields: Prisma.ProjectCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ProjectCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[];
                };
                create: {
                    args: Prisma.ProjectCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ProjectCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                update: {
                    args: Prisma.ProjectCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectCategory>;
                };
                groupBy: {
                    args: Prisma.ProjectCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCategoryCountAggregateOutputType> | number;
                };
            };
        };
        ProjectImage: {
            payload: Prisma.$ProjectImagePayload<ExtArgs>;
            fields: Prisma.ProjectImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                findFirst: {
                    args: Prisma.ProjectImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                findMany: {
                    args: Prisma.ProjectImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                create: {
                    args: Prisma.ProjectImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                createMany: {
                    args: Prisma.ProjectImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                delete: {
                    args: Prisma.ProjectImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                update: {
                    args: Prisma.ProjectImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                upsert: {
                    args: Prisma.ProjectImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                aggregate: {
                    args: Prisma.ProjectImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectImage>;
                };
                groupBy: {
                    args: Prisma.ProjectImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectImageCountAggregateOutputType> | number;
                };
            };
        };
        ProjectTag: {
            payload: Prisma.$ProjectTagPayload<ExtArgs>;
            fields: Prisma.ProjectTagFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectTagFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectTagFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectTagFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectTagFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                findMany: {
                    args: Prisma.ProjectTagFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>[];
                };
                create: {
                    args: Prisma.ProjectTagCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                createMany: {
                    args: Prisma.ProjectTagCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectTagCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>[];
                };
                delete: {
                    args: Prisma.ProjectTagDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                update: {
                    args: Prisma.ProjectTagUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectTagDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectTagUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectTagUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectTagUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTagPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectTagAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectTag>;
                };
                groupBy: {
                    args: Prisma.ProjectTagGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectTagGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectTagCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectTagCountAggregateOutputType> | number;
                };
            };
        };
        ProjectView: {
            payload: Prisma.$ProjectViewPayload<ExtArgs>;
            fields: Prisma.ProjectViewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectViewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectViewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectViewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectViewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                findMany: {
                    args: Prisma.ProjectViewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>[];
                };
                create: {
                    args: Prisma.ProjectViewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                createMany: {
                    args: Prisma.ProjectViewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectViewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>[];
                };
                delete: {
                    args: Prisma.ProjectViewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                update: {
                    args: Prisma.ProjectViewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectViewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectViewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectViewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectViewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectViewPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectViewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectView>;
                };
                groupBy: {
                    args: Prisma.ProjectViewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectViewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectViewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectViewCountAggregateOutputType> | number;
                };
            };
        };
        SeoSetting: {
            payload: Prisma.$SeoSettingPayload<ExtArgs>;
            fields: Prisma.SeoSettingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeoSettingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeoSettingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                findFirst: {
                    args: Prisma.SeoSettingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeoSettingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                findMany: {
                    args: Prisma.SeoSettingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>[];
                };
                create: {
                    args: Prisma.SeoSettingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                createMany: {
                    args: Prisma.SeoSettingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SeoSettingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>[];
                };
                delete: {
                    args: Prisma.SeoSettingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                update: {
                    args: Prisma.SeoSettingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                deleteMany: {
                    args: Prisma.SeoSettingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeoSettingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SeoSettingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>[];
                };
                upsert: {
                    args: Prisma.SeoSettingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoSettingPayload>;
                };
                aggregate: {
                    args: Prisma.SeoSettingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeoSetting>;
                };
                groupBy: {
                    args: Prisma.SeoSettingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeoSettingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeoSettingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeoSettingCountAggregateOutputType> | number;
                };
            };
        };
        Service: {
            payload: Prisma.$ServicePayload<ExtArgs>;
            fields: Prisma.ServiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findMany: {
                    args: Prisma.ServiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                create: {
                    args: Prisma.ServiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                createMany: {
                    args: Prisma.ServiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                delete: {
                    args: Prisma.ServiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                update: {
                    args: Prisma.ServiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                upsert: {
                    args: Prisma.ServiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateService>;
                };
                groupBy: {
                    args: Prisma.ServiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Skill: {
            payload: Prisma.$SkillPayload<ExtArgs>;
            fields: Prisma.SkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findFirst: {
                    args: Prisma.SkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findMany: {
                    args: Prisma.SkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                create: {
                    args: Prisma.SkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                createMany: {
                    args: Prisma.SkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                delete: {
                    args: Prisma.SkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                update: {
                    args: Prisma.SkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                deleteMany: {
                    args: Prisma.SkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                upsert: {
                    args: Prisma.SkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                aggregate: {
                    args: Prisma.SkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkill>;
                };
                groupBy: {
                    args: Prisma.SkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillCountAggregateOutputType> | number;
                };
            };
        };
        SocialLink: {
            payload: Prisma.$SocialLinkPayload<ExtArgs>;
            fields: Prisma.SocialLinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                findFirst: {
                    args: Prisma.SocialLinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                findMany: {
                    args: Prisma.SocialLinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                create: {
                    args: Prisma.SocialLinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                createMany: {
                    args: Prisma.SocialLinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                delete: {
                    args: Prisma.SocialLinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                update: {
                    args: Prisma.SocialLinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                deleteMany: {
                    args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                upsert: {
                    args: Prisma.SocialLinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                aggregate: {
                    args: Prisma.SocialLinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSocialLink>;
                };
                groupBy: {
                    args: Prisma.SocialLinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialLinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SocialLinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialLinkCountAggregateOutputType> | number;
                };
            };
        };
        Testimonial: {
            payload: Prisma.$TestimonialPayload<ExtArgs>;
            fields: Prisma.TestimonialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestimonialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                findFirst: {
                    args: Prisma.TestimonialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                findMany: {
                    args: Prisma.TestimonialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>[];
                };
                create: {
                    args: Prisma.TestimonialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                createMany: {
                    args: Prisma.TestimonialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>[];
                };
                delete: {
                    args: Prisma.TestimonialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                update: {
                    args: Prisma.TestimonialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                deleteMany: {
                    args: Prisma.TestimonialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestimonialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>[];
                };
                upsert: {
                    args: Prisma.TestimonialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestimonialPayload>;
                };
                aggregate: {
                    args: Prisma.TestimonialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestimonial>;
                };
                groupBy: {
                    args: Prisma.TestimonialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestimonialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestimonialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestimonialCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        VisitorAnalytics: {
            payload: Prisma.$VisitorAnalyticsPayload<ExtArgs>;
            fields: Prisma.VisitorAnalyticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VisitorAnalyticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VisitorAnalyticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                findFirst: {
                    args: Prisma.VisitorAnalyticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VisitorAnalyticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                findMany: {
                    args: Prisma.VisitorAnalyticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>[];
                };
                create: {
                    args: Prisma.VisitorAnalyticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                createMany: {
                    args: Prisma.VisitorAnalyticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VisitorAnalyticsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>[];
                };
                delete: {
                    args: Prisma.VisitorAnalyticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                update: {
                    args: Prisma.VisitorAnalyticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                deleteMany: {
                    args: Prisma.VisitorAnalyticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VisitorAnalyticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VisitorAnalyticsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>[];
                };
                upsert: {
                    args: Prisma.VisitorAnalyticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorAnalyticsPayload>;
                };
                aggregate: {
                    args: Prisma.VisitorAnalyticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVisitorAnalytics>;
                };
                groupBy: {
                    args: Prisma.VisitorAnalyticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitorAnalyticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VisitorAnalyticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitorAnalyticsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly refreshToken: "refreshToken";
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'ContactStatus'
 */
export type EnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus'>;
/**
 * Reference to a field of type 'ContactStatus[]'
 */
export type ListEnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus[]'>;
/**
 * Reference to a field of type 'ProjectStatus'
 */
export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>;
/**
 * Reference to a field of type 'ProjectStatus[]'
 */
export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>;
/**
 * Reference to a field of type 'SkillCategory'
 */
export type EnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory'>;
/**
 * Reference to a field of type 'SkillCategory[]'
 */
export type ListEnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'UserStatus[]'
 */
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    achievement?: Prisma.AchievementOmit;
    blog?: Prisma.BlogOmit;
    certificate?: Prisma.CertificateOmit;
    contactMessage?: Prisma.ContactMessageOmit;
    education?: Prisma.EducationOmit;
    experience?: Prisma.ExperienceOmit;
    githubStats?: Prisma.GithubStatsOmit;
    portfolio?: Prisma.PortfolioOmit;
    project?: Prisma.ProjectOmit;
    projectCategory?: Prisma.ProjectCategoryOmit;
    projectImage?: Prisma.ProjectImageOmit;
    projectTag?: Prisma.ProjectTagOmit;
    projectView?: Prisma.ProjectViewOmit;
    seoSetting?: Prisma.SeoSettingOmit;
    service?: Prisma.ServiceOmit;
    session?: Prisma.SessionOmit;
    skill?: Prisma.SkillOmit;
    socialLink?: Prisma.SocialLinkOmit;
    testimonial?: Prisma.TestimonialOmit;
    user?: Prisma.UserOmit;
    visitorAnalytics?: Prisma.VisitorAnalyticsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map