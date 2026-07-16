import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model GithubStats
 *
 */
export type GithubStatsModel = runtime.Types.Result.DefaultSelection<Prisma.$GithubStatsPayload>;
export type AggregateGithubStats = {
    _count: GithubStatsCountAggregateOutputType | null;
    _avg: GithubStatsAvgAggregateOutputType | null;
    _sum: GithubStatsSumAggregateOutputType | null;
    _min: GithubStatsMinAggregateOutputType | null;
    _max: GithubStatsMaxAggregateOutputType | null;
};
export type GithubStatsAvgAggregateOutputType = {
    followers: number | null;
    following: number | null;
    publicRepos: number | null;
    totalStars: number | null;
};
export type GithubStatsSumAggregateOutputType = {
    followers: number | null;
    following: number | null;
    publicRepos: number | null;
    totalStars: number | null;
};
export type GithubStatsMinAggregateOutputType = {
    id: string | null;
    githubUsername: string | null;
    followers: number | null;
    following: number | null;
    publicRepos: number | null;
    totalStars: number | null;
    lastSyncedAt: Date | null;
    updatedAt: Date | null;
};
export type GithubStatsMaxAggregateOutputType = {
    id: string | null;
    githubUsername: string | null;
    followers: number | null;
    following: number | null;
    publicRepos: number | null;
    totalStars: number | null;
    lastSyncedAt: Date | null;
    updatedAt: Date | null;
};
export type GithubStatsCountAggregateOutputType = {
    id: number;
    githubUsername: number;
    followers: number;
    following: number;
    publicRepos: number;
    totalStars: number;
    lastSyncedAt: number;
    updatedAt: number;
    _all: number;
};
export type GithubStatsAvgAggregateInputType = {
    followers?: true;
    following?: true;
    publicRepos?: true;
    totalStars?: true;
};
export type GithubStatsSumAggregateInputType = {
    followers?: true;
    following?: true;
    publicRepos?: true;
    totalStars?: true;
};
export type GithubStatsMinAggregateInputType = {
    id?: true;
    githubUsername?: true;
    followers?: true;
    following?: true;
    publicRepos?: true;
    totalStars?: true;
    lastSyncedAt?: true;
    updatedAt?: true;
};
export type GithubStatsMaxAggregateInputType = {
    id?: true;
    githubUsername?: true;
    followers?: true;
    following?: true;
    publicRepos?: true;
    totalStars?: true;
    lastSyncedAt?: true;
    updatedAt?: true;
};
export type GithubStatsCountAggregateInputType = {
    id?: true;
    githubUsername?: true;
    followers?: true;
    following?: true;
    publicRepos?: true;
    totalStars?: true;
    lastSyncedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GithubStatsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GithubStats to aggregate.
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubStats to fetch.
     */
    orderBy?: Prisma.GithubStatsOrderByWithRelationInput | Prisma.GithubStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GithubStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GithubStats
    **/
    _count?: true | GithubStatsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GithubStatsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GithubStatsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GithubStatsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GithubStatsMaxAggregateInputType;
};
export type GetGithubStatsAggregateType<T extends GithubStatsAggregateArgs> = {
    [P in keyof T & keyof AggregateGithubStats]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGithubStats[P]> : Prisma.GetScalarType<T[P], AggregateGithubStats[P]>;
};
export type GithubStatsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubStatsWhereInput;
    orderBy?: Prisma.GithubStatsOrderByWithAggregationInput | Prisma.GithubStatsOrderByWithAggregationInput[];
    by: Prisma.GithubStatsScalarFieldEnum[] | Prisma.GithubStatsScalarFieldEnum;
    having?: Prisma.GithubStatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GithubStatsCountAggregateInputType | true;
    _avg?: GithubStatsAvgAggregateInputType;
    _sum?: GithubStatsSumAggregateInputType;
    _min?: GithubStatsMinAggregateInputType;
    _max?: GithubStatsMaxAggregateInputType;
};
export type GithubStatsGroupByOutputType = {
    id: string;
    githubUsername: string;
    followers: number;
    following: number;
    publicRepos: number;
    totalStars: number;
    lastSyncedAt: Date | null;
    updatedAt: Date;
    _count: GithubStatsCountAggregateOutputType | null;
    _avg: GithubStatsAvgAggregateOutputType | null;
    _sum: GithubStatsSumAggregateOutputType | null;
    _min: GithubStatsMinAggregateOutputType | null;
    _max: GithubStatsMaxAggregateOutputType | null;
};
export type GetGithubStatsGroupByPayload<T extends GithubStatsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GithubStatsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GithubStatsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GithubStatsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GithubStatsGroupByOutputType[P]>;
}>>;
export type GithubStatsWhereInput = {
    AND?: Prisma.GithubStatsWhereInput | Prisma.GithubStatsWhereInput[];
    OR?: Prisma.GithubStatsWhereInput[];
    NOT?: Prisma.GithubStatsWhereInput | Prisma.GithubStatsWhereInput[];
    id?: Prisma.StringFilter<"GithubStats"> | string;
    githubUsername?: Prisma.StringFilter<"GithubStats"> | string;
    followers?: Prisma.IntFilter<"GithubStats"> | number;
    following?: Prisma.IntFilter<"GithubStats"> | number;
    publicRepos?: Prisma.IntFilter<"GithubStats"> | number;
    totalStars?: Prisma.IntFilter<"GithubStats"> | number;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"GithubStats"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"GithubStats"> | Date | string;
};
export type GithubStatsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    githubUsername?: Prisma.SortOrder;
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GithubStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    githubUsername?: string;
    AND?: Prisma.GithubStatsWhereInput | Prisma.GithubStatsWhereInput[];
    OR?: Prisma.GithubStatsWhereInput[];
    NOT?: Prisma.GithubStatsWhereInput | Prisma.GithubStatsWhereInput[];
    followers?: Prisma.IntFilter<"GithubStats"> | number;
    following?: Prisma.IntFilter<"GithubStats"> | number;
    publicRepos?: Prisma.IntFilter<"GithubStats"> | number;
    totalStars?: Prisma.IntFilter<"GithubStats"> | number;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"GithubStats"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"GithubStats"> | Date | string;
}, "id" | "githubUsername">;
export type GithubStatsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    githubUsername?: Prisma.SortOrder;
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GithubStatsCountOrderByAggregateInput;
    _avg?: Prisma.GithubStatsAvgOrderByAggregateInput;
    _max?: Prisma.GithubStatsMaxOrderByAggregateInput;
    _min?: Prisma.GithubStatsMinOrderByAggregateInput;
    _sum?: Prisma.GithubStatsSumOrderByAggregateInput;
};
export type GithubStatsScalarWhereWithAggregatesInput = {
    AND?: Prisma.GithubStatsScalarWhereWithAggregatesInput | Prisma.GithubStatsScalarWhereWithAggregatesInput[];
    OR?: Prisma.GithubStatsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GithubStatsScalarWhereWithAggregatesInput | Prisma.GithubStatsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GithubStats"> | string;
    githubUsername?: Prisma.StringWithAggregatesFilter<"GithubStats"> | string;
    followers?: Prisma.IntWithAggregatesFilter<"GithubStats"> | number;
    following?: Prisma.IntWithAggregatesFilter<"GithubStats"> | number;
    publicRepos?: Prisma.IntWithAggregatesFilter<"GithubStats"> | number;
    totalStars?: Prisma.IntWithAggregatesFilter<"GithubStats"> | number;
    lastSyncedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"GithubStats"> | Date | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GithubStats"> | Date | string;
};
export type GithubStatsCreateInput = {
    id?: string;
    githubUsername: string;
    followers?: number;
    following?: number;
    publicRepos?: number;
    totalStars?: number;
    lastSyncedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type GithubStatsUncheckedCreateInput = {
    id?: string;
    githubUsername: string;
    followers?: number;
    following?: number;
    publicRepos?: number;
    totalStars?: number;
    lastSyncedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type GithubStatsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    followers?: Prisma.IntFieldUpdateOperationsInput | number;
    following?: Prisma.IntFieldUpdateOperationsInput | number;
    publicRepos?: Prisma.IntFieldUpdateOperationsInput | number;
    totalStars?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubStatsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    followers?: Prisma.IntFieldUpdateOperationsInput | number;
    following?: Prisma.IntFieldUpdateOperationsInput | number;
    publicRepos?: Prisma.IntFieldUpdateOperationsInput | number;
    totalStars?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubStatsCreateManyInput = {
    id?: string;
    githubUsername: string;
    followers?: number;
    following?: number;
    publicRepos?: number;
    totalStars?: number;
    lastSyncedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type GithubStatsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    followers?: Prisma.IntFieldUpdateOperationsInput | number;
    following?: Prisma.IntFieldUpdateOperationsInput | number;
    publicRepos?: Prisma.IntFieldUpdateOperationsInput | number;
    totalStars?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubStatsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    followers?: Prisma.IntFieldUpdateOperationsInput | number;
    following?: Prisma.IntFieldUpdateOperationsInput | number;
    publicRepos?: Prisma.IntFieldUpdateOperationsInput | number;
    totalStars?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GithubStatsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubUsername?: Prisma.SortOrder;
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GithubStatsAvgOrderByAggregateInput = {
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
};
export type GithubStatsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubUsername?: Prisma.SortOrder;
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GithubStatsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubUsername?: Prisma.SortOrder;
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GithubStatsSumOrderByAggregateInput = {
    followers?: Prisma.SortOrder;
    following?: Prisma.SortOrder;
    publicRepos?: Prisma.SortOrder;
    totalStars?: Prisma.SortOrder;
};
export type GithubStatsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubUsername?: boolean;
    followers?: boolean;
    following?: boolean;
    publicRepos?: boolean;
    totalStars?: boolean;
    lastSyncedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["githubStats"]>;
export type GithubStatsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubUsername?: boolean;
    followers?: boolean;
    following?: boolean;
    publicRepos?: boolean;
    totalStars?: boolean;
    lastSyncedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["githubStats"]>;
export type GithubStatsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubUsername?: boolean;
    followers?: boolean;
    following?: boolean;
    publicRepos?: boolean;
    totalStars?: boolean;
    lastSyncedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["githubStats"]>;
export type GithubStatsSelectScalar = {
    id?: boolean;
    githubUsername?: boolean;
    followers?: boolean;
    following?: boolean;
    publicRepos?: boolean;
    totalStars?: boolean;
    lastSyncedAt?: boolean;
    updatedAt?: boolean;
};
export type GithubStatsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "githubUsername" | "followers" | "following" | "publicRepos" | "totalStars" | "lastSyncedAt" | "updatedAt", ExtArgs["result"]["githubStats"]>;
export type $GithubStatsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GithubStats";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        githubUsername: string;
        followers: number;
        following: number;
        publicRepos: number;
        totalStars: number;
        lastSyncedAt: Date | null;
        updatedAt: Date;
    }, ExtArgs["result"]["githubStats"]>;
    composites: {};
};
export type GithubStatsGetPayload<S extends boolean | null | undefined | GithubStatsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload, S>;
export type GithubStatsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GithubStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GithubStatsCountAggregateInputType | true;
};
export interface GithubStatsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GithubStats'];
        meta: {
            name: 'GithubStats';
        };
    };
    /**
     * Find zero or one GithubStats that matches the filter.
     * @param {GithubStatsFindUniqueArgs} args - Arguments to find a GithubStats
     * @example
     * // Get one GithubStats
     * const githubStats = await prisma.githubStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GithubStatsFindUniqueArgs>(args: Prisma.SelectSubset<T, GithubStatsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one GithubStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GithubStatsFindUniqueOrThrowArgs} args - Arguments to find a GithubStats
     * @example
     * // Get one GithubStats
     * const githubStats = await prisma.githubStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GithubStatsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GithubStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GithubStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsFindFirstArgs} args - Arguments to find a GithubStats
     * @example
     * // Get one GithubStats
     * const githubStats = await prisma.githubStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GithubStatsFindFirstArgs>(args?: Prisma.SelectSubset<T, GithubStatsFindFirstArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GithubStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsFindFirstOrThrowArgs} args - Arguments to find a GithubStats
     * @example
     * // Get one GithubStats
     * const githubStats = await prisma.githubStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GithubStatsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GithubStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more GithubStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GithubStats
     * const githubStats = await prisma.githubStats.findMany()
     *
     * // Get first 10 GithubStats
     * const githubStats = await prisma.githubStats.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const githubStatsWithIdOnly = await prisma.githubStats.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GithubStatsFindManyArgs>(args?: Prisma.SelectSubset<T, GithubStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a GithubStats.
     * @param {GithubStatsCreateArgs} args - Arguments to create a GithubStats.
     * @example
     * // Create one GithubStats
     * const GithubStats = await prisma.githubStats.create({
     *   data: {
     *     // ... data to create a GithubStats
     *   }
     * })
     *
     */
    create<T extends GithubStatsCreateArgs>(args: Prisma.SelectSubset<T, GithubStatsCreateArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many GithubStats.
     * @param {GithubStatsCreateManyArgs} args - Arguments to create many GithubStats.
     * @example
     * // Create many GithubStats
     * const githubStats = await prisma.githubStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GithubStatsCreateManyArgs>(args?: Prisma.SelectSubset<T, GithubStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many GithubStats and returns the data saved in the database.
     * @param {GithubStatsCreateManyAndReturnArgs} args - Arguments to create many GithubStats.
     * @example
     * // Create many GithubStats
     * const githubStats = await prisma.githubStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GithubStats and only return the `id`
     * const githubStatsWithIdOnly = await prisma.githubStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GithubStatsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GithubStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a GithubStats.
     * @param {GithubStatsDeleteArgs} args - Arguments to delete one GithubStats.
     * @example
     * // Delete one GithubStats
     * const GithubStats = await prisma.githubStats.delete({
     *   where: {
     *     // ... filter to delete one GithubStats
     *   }
     * })
     *
     */
    delete<T extends GithubStatsDeleteArgs>(args: Prisma.SelectSubset<T, GithubStatsDeleteArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one GithubStats.
     * @param {GithubStatsUpdateArgs} args - Arguments to update one GithubStats.
     * @example
     * // Update one GithubStats
     * const githubStats = await prisma.githubStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GithubStatsUpdateArgs>(args: Prisma.SelectSubset<T, GithubStatsUpdateArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more GithubStats.
     * @param {GithubStatsDeleteManyArgs} args - Arguments to filter GithubStats to delete.
     * @example
     * // Delete a few GithubStats
     * const { count } = await prisma.githubStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GithubStatsDeleteManyArgs>(args?: Prisma.SelectSubset<T, GithubStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GithubStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GithubStats
     * const githubStats = await prisma.githubStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GithubStatsUpdateManyArgs>(args: Prisma.SelectSubset<T, GithubStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GithubStats and returns the data updated in the database.
     * @param {GithubStatsUpdateManyAndReturnArgs} args - Arguments to update many GithubStats.
     * @example
     * // Update many GithubStats
     * const githubStats = await prisma.githubStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GithubStats and only return the `id`
     * const githubStatsWithIdOnly = await prisma.githubStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GithubStatsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GithubStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one GithubStats.
     * @param {GithubStatsUpsertArgs} args - Arguments to update or create a GithubStats.
     * @example
     * // Update or create a GithubStats
     * const githubStats = await prisma.githubStats.upsert({
     *   create: {
     *     // ... data to create a GithubStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GithubStats we want to update
     *   }
     * })
     */
    upsert<T extends GithubStatsUpsertArgs>(args: Prisma.SelectSubset<T, GithubStatsUpsertArgs<ExtArgs>>): Prisma.Prisma__GithubStatsClient<runtime.Types.Result.GetResult<Prisma.$GithubStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of GithubStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsCountArgs} args - Arguments to filter GithubStats to count.
     * @example
     * // Count the number of GithubStats
     * const count = await prisma.githubStats.count({
     *   where: {
     *     // ... the filter for the GithubStats we want to count
     *   }
     * })
    **/
    count<T extends GithubStatsCountArgs>(args?: Prisma.Subset<T, GithubStatsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GithubStatsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a GithubStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GithubStatsAggregateArgs>(args: Prisma.Subset<T, GithubStatsAggregateArgs>): Prisma.PrismaPromise<GetGithubStatsAggregateType<T>>;
    /**
     * Group by GithubStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends GithubStatsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GithubStatsGroupByArgs['orderBy'];
    } : {
        orderBy?: GithubStatsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GithubStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GithubStats model
     */
    readonly fields: GithubStatsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for GithubStats.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GithubStatsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the GithubStats model
 */
export interface GithubStatsFieldRefs {
    readonly id: Prisma.FieldRef<"GithubStats", 'String'>;
    readonly githubUsername: Prisma.FieldRef<"GithubStats", 'String'>;
    readonly followers: Prisma.FieldRef<"GithubStats", 'Int'>;
    readonly following: Prisma.FieldRef<"GithubStats", 'Int'>;
    readonly publicRepos: Prisma.FieldRef<"GithubStats", 'Int'>;
    readonly totalStars: Prisma.FieldRef<"GithubStats", 'Int'>;
    readonly lastSyncedAt: Prisma.FieldRef<"GithubStats", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GithubStats", 'DateTime'>;
}
/**
 * GithubStats findUnique
 */
export type GithubStatsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter, which GithubStats to fetch.
     */
    where: Prisma.GithubStatsWhereUniqueInput;
};
/**
 * GithubStats findUniqueOrThrow
 */
export type GithubStatsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter, which GithubStats to fetch.
     */
    where: Prisma.GithubStatsWhereUniqueInput;
};
/**
 * GithubStats findFirst
 */
export type GithubStatsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter, which GithubStats to fetch.
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubStats to fetch.
     */
    orderBy?: Prisma.GithubStatsOrderByWithRelationInput | Prisma.GithubStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GithubStats.
     */
    cursor?: Prisma.GithubStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GithubStats.
     */
    distinct?: Prisma.GithubStatsScalarFieldEnum | Prisma.GithubStatsScalarFieldEnum[];
};
/**
 * GithubStats findFirstOrThrow
 */
export type GithubStatsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter, which GithubStats to fetch.
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubStats to fetch.
     */
    orderBy?: Prisma.GithubStatsOrderByWithRelationInput | Prisma.GithubStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GithubStats.
     */
    cursor?: Prisma.GithubStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GithubStats.
     */
    distinct?: Prisma.GithubStatsScalarFieldEnum | Prisma.GithubStatsScalarFieldEnum[];
};
/**
 * GithubStats findMany
 */
export type GithubStatsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter, which GithubStats to fetch.
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GithubStats to fetch.
     */
    orderBy?: Prisma.GithubStatsOrderByWithRelationInput | Prisma.GithubStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GithubStats.
     */
    cursor?: Prisma.GithubStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GithubStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GithubStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GithubStats.
     */
    distinct?: Prisma.GithubStatsScalarFieldEnum | Prisma.GithubStatsScalarFieldEnum[];
};
/**
 * GithubStats create
 */
export type GithubStatsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * The data needed to create a GithubStats.
     */
    data: Prisma.XOR<Prisma.GithubStatsCreateInput, Prisma.GithubStatsUncheckedCreateInput>;
};
/**
 * GithubStats createMany
 */
export type GithubStatsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many GithubStats.
     */
    data: Prisma.GithubStatsCreateManyInput | Prisma.GithubStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GithubStats createManyAndReturn
 */
export type GithubStatsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * The data used to create many GithubStats.
     */
    data: Prisma.GithubStatsCreateManyInput | Prisma.GithubStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GithubStats update
 */
export type GithubStatsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * The data needed to update a GithubStats.
     */
    data: Prisma.XOR<Prisma.GithubStatsUpdateInput, Prisma.GithubStatsUncheckedUpdateInput>;
    /**
     * Choose, which GithubStats to update.
     */
    where: Prisma.GithubStatsWhereUniqueInput;
};
/**
 * GithubStats updateMany
 */
export type GithubStatsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update GithubStats.
     */
    data: Prisma.XOR<Prisma.GithubStatsUpdateManyMutationInput, Prisma.GithubStatsUncheckedUpdateManyInput>;
    /**
     * Filter which GithubStats to update
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * Limit how many GithubStats to update.
     */
    limit?: number;
};
/**
 * GithubStats updateManyAndReturn
 */
export type GithubStatsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * The data used to update GithubStats.
     */
    data: Prisma.XOR<Prisma.GithubStatsUpdateManyMutationInput, Prisma.GithubStatsUncheckedUpdateManyInput>;
    /**
     * Filter which GithubStats to update
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * Limit how many GithubStats to update.
     */
    limit?: number;
};
/**
 * GithubStats upsert
 */
export type GithubStatsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * The filter to search for the GithubStats to update in case it exists.
     */
    where: Prisma.GithubStatsWhereUniqueInput;
    /**
     * In case the GithubStats found by the `where` argument doesn't exist, create a new GithubStats with this data.
     */
    create: Prisma.XOR<Prisma.GithubStatsCreateInput, Prisma.GithubStatsUncheckedCreateInput>;
    /**
     * In case the GithubStats was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GithubStatsUpdateInput, Prisma.GithubStatsUncheckedUpdateInput>;
};
/**
 * GithubStats delete
 */
export type GithubStatsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
    /**
     * Filter which GithubStats to delete.
     */
    where: Prisma.GithubStatsWhereUniqueInput;
};
/**
 * GithubStats deleteMany
 */
export type GithubStatsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GithubStats to delete
     */
    where?: Prisma.GithubStatsWhereInput;
    /**
     * Limit how many GithubStats to delete.
     */
    limit?: number;
};
/**
 * GithubStats without action
 */
export type GithubStatsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubStats
     */
    select?: Prisma.GithubStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GithubStats
     */
    omit?: Prisma.GithubStatsOmit<ExtArgs> | null;
};
//# sourceMappingURL=GithubStats.d.ts.map