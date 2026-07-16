import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VisitorAnalytics
 *
 */
export type VisitorAnalyticsModel = runtime.Types.Result.DefaultSelection<Prisma.$VisitorAnalyticsPayload>;
export type AggregateVisitorAnalytics = {
    _count: VisitorAnalyticsCountAggregateOutputType | null;
    _min: VisitorAnalyticsMinAggregateOutputType | null;
    _max: VisitorAnalyticsMaxAggregateOutputType | null;
};
export type VisitorAnalyticsMinAggregateOutputType = {
    id: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    country: string | null;
    city: string | null;
    page: string | null;
    createdAt: Date | null;
};
export type VisitorAnalyticsMaxAggregateOutputType = {
    id: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    country: string | null;
    city: string | null;
    page: string | null;
    createdAt: Date | null;
};
export type VisitorAnalyticsCountAggregateOutputType = {
    id: number;
    ipAddress: number;
    userAgent: number;
    country: number;
    city: number;
    page: number;
    createdAt: number;
    _all: number;
};
export type VisitorAnalyticsMinAggregateInputType = {
    id?: true;
    ipAddress?: true;
    userAgent?: true;
    country?: true;
    city?: true;
    page?: true;
    createdAt?: true;
};
export type VisitorAnalyticsMaxAggregateInputType = {
    id?: true;
    ipAddress?: true;
    userAgent?: true;
    country?: true;
    city?: true;
    page?: true;
    createdAt?: true;
};
export type VisitorAnalyticsCountAggregateInputType = {
    id?: true;
    ipAddress?: true;
    userAgent?: true;
    country?: true;
    city?: true;
    page?: true;
    createdAt?: true;
    _all?: true;
};
export type VisitorAnalyticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorAnalytics to aggregate.
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VisitorAnalytics to fetch.
     */
    orderBy?: Prisma.VisitorAnalyticsOrderByWithRelationInput | Prisma.VisitorAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VisitorAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VisitorAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VisitorAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VisitorAnalytics
    **/
    _count?: true | VisitorAnalyticsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VisitorAnalyticsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VisitorAnalyticsMaxAggregateInputType;
};
export type GetVisitorAnalyticsAggregateType<T extends VisitorAnalyticsAggregateArgs> = {
    [P in keyof T & keyof AggregateVisitorAnalytics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisitorAnalytics[P]> : Prisma.GetScalarType<T[P], AggregateVisitorAnalytics[P]>;
};
export type VisitorAnalyticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorAnalyticsWhereInput;
    orderBy?: Prisma.VisitorAnalyticsOrderByWithAggregationInput | Prisma.VisitorAnalyticsOrderByWithAggregationInput[];
    by: Prisma.VisitorAnalyticsScalarFieldEnum[] | Prisma.VisitorAnalyticsScalarFieldEnum;
    having?: Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitorAnalyticsCountAggregateInputType | true;
    _min?: VisitorAnalyticsMinAggregateInputType;
    _max?: VisitorAnalyticsMaxAggregateInputType;
};
export type VisitorAnalyticsGroupByOutputType = {
    id: string;
    ipAddress: string | null;
    userAgent: string | null;
    country: string | null;
    city: string | null;
    page: string;
    createdAt: Date;
    _count: VisitorAnalyticsCountAggregateOutputType | null;
    _min: VisitorAnalyticsMinAggregateOutputType | null;
    _max: VisitorAnalyticsMaxAggregateOutputType | null;
};
export type GetVisitorAnalyticsGroupByPayload<T extends VisitorAnalyticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisitorAnalyticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisitorAnalyticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisitorAnalyticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisitorAnalyticsGroupByOutputType[P]>;
}>>;
export type VisitorAnalyticsWhereInput = {
    AND?: Prisma.VisitorAnalyticsWhereInput | Prisma.VisitorAnalyticsWhereInput[];
    OR?: Prisma.VisitorAnalyticsWhereInput[];
    NOT?: Prisma.VisitorAnalyticsWhereInput | Prisma.VisitorAnalyticsWhereInput[];
    id?: Prisma.StringFilter<"VisitorAnalytics"> | string;
    ipAddress?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    country?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    city?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    page?: Prisma.StringFilter<"VisitorAnalytics"> | string;
    createdAt?: Prisma.DateTimeFilter<"VisitorAnalytics"> | Date | string;
};
export type VisitorAnalyticsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    page?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisitorAnalyticsWhereInput | Prisma.VisitorAnalyticsWhereInput[];
    OR?: Prisma.VisitorAnalyticsWhereInput[];
    NOT?: Prisma.VisitorAnalyticsWhereInput | Prisma.VisitorAnalyticsWhereInput[];
    ipAddress?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    country?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    city?: Prisma.StringNullableFilter<"VisitorAnalytics"> | string | null;
    page?: Prisma.StringFilter<"VisitorAnalytics"> | string;
    createdAt?: Prisma.DateTimeFilter<"VisitorAnalytics"> | Date | string;
}, "id">;
export type VisitorAnalyticsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    page?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VisitorAnalyticsCountOrderByAggregateInput;
    _max?: Prisma.VisitorAnalyticsMaxOrderByAggregateInput;
    _min?: Prisma.VisitorAnalyticsMinOrderByAggregateInput;
};
export type VisitorAnalyticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput | Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput | Prisma.VisitorAnalyticsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VisitorAnalytics"> | string;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"VisitorAnalytics"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"VisitorAnalytics"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"VisitorAnalytics"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"VisitorAnalytics"> | string | null;
    page?: Prisma.StringWithAggregatesFilter<"VisitorAnalytics"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VisitorAnalytics"> | Date | string;
};
export type VisitorAnalyticsCreateInput = {
    id?: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    country?: string | null;
    city?: string | null;
    page: string;
    createdAt?: Date | string;
};
export type VisitorAnalyticsUncheckedCreateInput = {
    id?: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    country?: string | null;
    city?: string | null;
    page: string;
    createdAt?: Date | string;
};
export type VisitorAnalyticsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorAnalyticsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorAnalyticsCreateManyInput = {
    id?: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    country?: string | null;
    city?: string | null;
    page: string;
    createdAt?: Date | string;
};
export type VisitorAnalyticsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorAnalyticsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorAnalyticsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorAnalyticsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorAnalyticsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VisitorAnalyticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    country?: boolean;
    city?: boolean;
    page?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["visitorAnalytics"]>;
export type VisitorAnalyticsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    country?: boolean;
    city?: boolean;
    page?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["visitorAnalytics"]>;
export type VisitorAnalyticsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    country?: boolean;
    city?: boolean;
    page?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["visitorAnalytics"]>;
export type VisitorAnalyticsSelectScalar = {
    id?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    country?: boolean;
    city?: boolean;
    page?: boolean;
    createdAt?: boolean;
};
export type VisitorAnalyticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ipAddress" | "userAgent" | "country" | "city" | "page" | "createdAt", ExtArgs["result"]["visitorAnalytics"]>;
export type $VisitorAnalyticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VisitorAnalytics";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ipAddress: string | null;
        userAgent: string | null;
        country: string | null;
        city: string | null;
        page: string;
        createdAt: Date;
    }, ExtArgs["result"]["visitorAnalytics"]>;
    composites: {};
};
export type VisitorAnalyticsGetPayload<S extends boolean | null | undefined | VisitorAnalyticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload, S>;
export type VisitorAnalyticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisitorAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisitorAnalyticsCountAggregateInputType | true;
};
export interface VisitorAnalyticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VisitorAnalytics'];
        meta: {
            name: 'VisitorAnalytics';
        };
    };
    /**
     * Find zero or one VisitorAnalytics that matches the filter.
     * @param {VisitorAnalyticsFindUniqueArgs} args - Arguments to find a VisitorAnalytics
     * @example
     * // Get one VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorAnalyticsFindUniqueArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VisitorAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a VisitorAnalytics
     * @example
     * // Get one VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorAnalyticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VisitorAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsFindFirstArgs} args - Arguments to find a VisitorAnalytics
     * @example
     * // Get one VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorAnalyticsFindFirstArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VisitorAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsFindFirstOrThrowArgs} args - Arguments to find a VisitorAnalytics
     * @example
     * // Get one VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorAnalyticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VisitorAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findMany()
     *
     * // Get first 10 VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const visitorAnalyticsWithIdOnly = await prisma.visitorAnalytics.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VisitorAnalyticsFindManyArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VisitorAnalytics.
     * @param {VisitorAnalyticsCreateArgs} args - Arguments to create a VisitorAnalytics.
     * @example
     * // Create one VisitorAnalytics
     * const VisitorAnalytics = await prisma.visitorAnalytics.create({
     *   data: {
     *     // ... data to create a VisitorAnalytics
     *   }
     * })
     *
     */
    create<T extends VisitorAnalyticsCreateArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsCreateArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VisitorAnalytics.
     * @param {VisitorAnalyticsCreateManyArgs} args - Arguments to create many VisitorAnalytics.
     * @example
     * // Create many VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VisitorAnalyticsCreateManyArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VisitorAnalytics and returns the data saved in the database.
     * @param {VisitorAnalyticsCreateManyAndReturnArgs} args - Arguments to create many VisitorAnalytics.
     * @example
     * // Create many VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VisitorAnalytics and only return the `id`
     * const visitorAnalyticsWithIdOnly = await prisma.visitorAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VisitorAnalyticsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VisitorAnalytics.
     * @param {VisitorAnalyticsDeleteArgs} args - Arguments to delete one VisitorAnalytics.
     * @example
     * // Delete one VisitorAnalytics
     * const VisitorAnalytics = await prisma.visitorAnalytics.delete({
     *   where: {
     *     // ... filter to delete one VisitorAnalytics
     *   }
     * })
     *
     */
    delete<T extends VisitorAnalyticsDeleteArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsDeleteArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VisitorAnalytics.
     * @param {VisitorAnalyticsUpdateArgs} args - Arguments to update one VisitorAnalytics.
     * @example
     * // Update one VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VisitorAnalyticsUpdateArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsUpdateArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VisitorAnalytics.
     * @param {VisitorAnalyticsDeleteManyArgs} args - Arguments to filter VisitorAnalytics to delete.
     * @example
     * // Delete a few VisitorAnalytics
     * const { count } = await prisma.visitorAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VisitorAnalyticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisitorAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VisitorAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VisitorAnalyticsUpdateManyArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VisitorAnalytics and returns the data updated in the database.
     * @param {VisitorAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many VisitorAnalytics.
     * @example
     * // Update many VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VisitorAnalytics and only return the `id`
     * const visitorAnalyticsWithIdOnly = await prisma.visitorAnalytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorAnalyticsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VisitorAnalytics.
     * @param {VisitorAnalyticsUpsertArgs} args - Arguments to update or create a VisitorAnalytics.
     * @example
     * // Update or create a VisitorAnalytics
     * const visitorAnalytics = await prisma.visitorAnalytics.upsert({
     *   create: {
     *     // ... data to create a VisitorAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends VisitorAnalyticsUpsertArgs>(args: Prisma.SelectSubset<T, VisitorAnalyticsUpsertArgs<ExtArgs>>): Prisma.Prisma__VisitorAnalyticsClient<runtime.Types.Result.GetResult<Prisma.$VisitorAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VisitorAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsCountArgs} args - Arguments to filter VisitorAnalytics to count.
     * @example
     * // Count the number of VisitorAnalytics
     * const count = await prisma.visitorAnalytics.count({
     *   where: {
     *     // ... the filter for the VisitorAnalytics we want to count
     *   }
     * })
    **/
    count<T extends VisitorAnalyticsCountArgs>(args?: Prisma.Subset<T, VisitorAnalyticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisitorAnalyticsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VisitorAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAnalyticsAggregateArgs>(args: Prisma.Subset<T, VisitorAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetVisitorAnalyticsAggregateType<T>>;
    /**
     * Group by VisitorAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAnalyticsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VisitorAnalyticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisitorAnalyticsGroupByArgs['orderBy'];
    } : {
        orderBy?: VisitorAnalyticsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisitorAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VisitorAnalytics model
     */
    readonly fields: VisitorAnalyticsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VisitorAnalytics.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VisitorAnalyticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the VisitorAnalytics model
 */
export interface VisitorAnalyticsFieldRefs {
    readonly id: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly ipAddress: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly userAgent: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly country: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly city: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly page: Prisma.FieldRef<"VisitorAnalytics", 'String'>;
    readonly createdAt: Prisma.FieldRef<"VisitorAnalytics", 'DateTime'>;
}
/**
 * VisitorAnalytics findUnique
 */
export type VisitorAnalyticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter, which VisitorAnalytics to fetch.
     */
    where: Prisma.VisitorAnalyticsWhereUniqueInput;
};
/**
 * VisitorAnalytics findUniqueOrThrow
 */
export type VisitorAnalyticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter, which VisitorAnalytics to fetch.
     */
    where: Prisma.VisitorAnalyticsWhereUniqueInput;
};
/**
 * VisitorAnalytics findFirst
 */
export type VisitorAnalyticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter, which VisitorAnalytics to fetch.
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VisitorAnalytics to fetch.
     */
    orderBy?: Prisma.VisitorAnalyticsOrderByWithRelationInput | Prisma.VisitorAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VisitorAnalytics.
     */
    cursor?: Prisma.VisitorAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VisitorAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VisitorAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VisitorAnalytics.
     */
    distinct?: Prisma.VisitorAnalyticsScalarFieldEnum | Prisma.VisitorAnalyticsScalarFieldEnum[];
};
/**
 * VisitorAnalytics findFirstOrThrow
 */
export type VisitorAnalyticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter, which VisitorAnalytics to fetch.
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VisitorAnalytics to fetch.
     */
    orderBy?: Prisma.VisitorAnalyticsOrderByWithRelationInput | Prisma.VisitorAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VisitorAnalytics.
     */
    cursor?: Prisma.VisitorAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VisitorAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VisitorAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VisitorAnalytics.
     */
    distinct?: Prisma.VisitorAnalyticsScalarFieldEnum | Prisma.VisitorAnalyticsScalarFieldEnum[];
};
/**
 * VisitorAnalytics findMany
 */
export type VisitorAnalyticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter, which VisitorAnalytics to fetch.
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VisitorAnalytics to fetch.
     */
    orderBy?: Prisma.VisitorAnalyticsOrderByWithRelationInput | Prisma.VisitorAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VisitorAnalytics.
     */
    cursor?: Prisma.VisitorAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VisitorAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VisitorAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VisitorAnalytics.
     */
    distinct?: Prisma.VisitorAnalyticsScalarFieldEnum | Prisma.VisitorAnalyticsScalarFieldEnum[];
};
/**
 * VisitorAnalytics create
 */
export type VisitorAnalyticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * The data needed to create a VisitorAnalytics.
     */
    data: Prisma.XOR<Prisma.VisitorAnalyticsCreateInput, Prisma.VisitorAnalyticsUncheckedCreateInput>;
};
/**
 * VisitorAnalytics createMany
 */
export type VisitorAnalyticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorAnalytics.
     */
    data: Prisma.VisitorAnalyticsCreateManyInput | Prisma.VisitorAnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VisitorAnalytics createManyAndReturn
 */
export type VisitorAnalyticsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to create many VisitorAnalytics.
     */
    data: Prisma.VisitorAnalyticsCreateManyInput | Prisma.VisitorAnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VisitorAnalytics update
 */
export type VisitorAnalyticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * The data needed to update a VisitorAnalytics.
     */
    data: Prisma.XOR<Prisma.VisitorAnalyticsUpdateInput, Prisma.VisitorAnalyticsUncheckedUpdateInput>;
    /**
     * Choose, which VisitorAnalytics to update.
     */
    where: Prisma.VisitorAnalyticsWhereUniqueInput;
};
/**
 * VisitorAnalytics updateMany
 */
export type VisitorAnalyticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorAnalytics.
     */
    data: Prisma.XOR<Prisma.VisitorAnalyticsUpdateManyMutationInput, Prisma.VisitorAnalyticsUncheckedUpdateManyInput>;
    /**
     * Filter which VisitorAnalytics to update
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * Limit how many VisitorAnalytics to update.
     */
    limit?: number;
};
/**
 * VisitorAnalytics updateManyAndReturn
 */
export type VisitorAnalyticsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to update VisitorAnalytics.
     */
    data: Prisma.XOR<Prisma.VisitorAnalyticsUpdateManyMutationInput, Prisma.VisitorAnalyticsUncheckedUpdateManyInput>;
    /**
     * Filter which VisitorAnalytics to update
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * Limit how many VisitorAnalytics to update.
     */
    limit?: number;
};
/**
 * VisitorAnalytics upsert
 */
export type VisitorAnalyticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * The filter to search for the VisitorAnalytics to update in case it exists.
     */
    where: Prisma.VisitorAnalyticsWhereUniqueInput;
    /**
     * In case the VisitorAnalytics found by the `where` argument doesn't exist, create a new VisitorAnalytics with this data.
     */
    create: Prisma.XOR<Prisma.VisitorAnalyticsCreateInput, Prisma.VisitorAnalyticsUncheckedCreateInput>;
    /**
     * In case the VisitorAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VisitorAnalyticsUpdateInput, Prisma.VisitorAnalyticsUncheckedUpdateInput>;
};
/**
 * VisitorAnalytics delete
 */
export type VisitorAnalyticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
    /**
     * Filter which VisitorAnalytics to delete.
     */
    where: Prisma.VisitorAnalyticsWhereUniqueInput;
};
/**
 * VisitorAnalytics deleteMany
 */
export type VisitorAnalyticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorAnalytics to delete
     */
    where?: Prisma.VisitorAnalyticsWhereInput;
    /**
     * Limit how many VisitorAnalytics to delete.
     */
    limit?: number;
};
/**
 * VisitorAnalytics without action
 */
export type VisitorAnalyticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorAnalytics
     */
    select?: Prisma.VisitorAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VisitorAnalytics
     */
    omit?: Prisma.VisitorAnalyticsOmit<ExtArgs> | null;
};
//# sourceMappingURL=VisitorAnalytics.d.ts.map