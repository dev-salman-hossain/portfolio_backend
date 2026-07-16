import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Project
 *
 */
export type ProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectPayload>;
export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type ProjectMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    content: string | null;
    thumbnail: string | null;
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean | null;
    status: $Enums.ProjectStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoryId: string | null;
};
export type ProjectMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    content: string | null;
    thumbnail: string | null;
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean | null;
    status: $Enums.ProjectStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoryId: string | null;
};
export type ProjectCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    description: number;
    content: number;
    thumbnail: number;
    githubUrl: number;
    liveUrl: number;
    technologies: number;
    featured: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    categoryId: number;
    _all: number;
};
export type ProjectMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    content?: true;
    thumbnail?: true;
    githubUrl?: true;
    liveUrl?: true;
    featured?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
};
export type ProjectMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    content?: true;
    thumbnail?: true;
    githubUrl?: true;
    liveUrl?: true;
    featured?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
};
export type ProjectCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    content?: true;
    thumbnail?: true;
    githubUrl?: true;
    liveUrl?: true;
    technologies?: true;
    featured?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
    _all?: true;
};
export type ProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType;
};
export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProject[P]> : Prisma.GetScalarType<T[P], AggregateProject[P]>;
};
export type ProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithAggregationInput | Prisma.ProjectOrderByWithAggregationInput[];
    by: Prisma.ProjectScalarFieldEnum[] | Prisma.ProjectScalarFieldEnum;
    having?: Prisma.ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type ProjectGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string | null;
    thumbnail: string | null;
    githubUrl: string | null;
    liveUrl: string | null;
    technologies: string[];
    featured: boolean;
    status: $Enums.ProjectStatus;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string | null;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]>;
}>>;
export type ProjectWhereInput = {
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    id?: Prisma.StringFilter<"Project"> | string;
    title?: Prisma.StringFilter<"Project"> | string;
    slug?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    content?: Prisma.StringNullableFilter<"Project"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Project"> | string | null;
    githubUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    liveUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Project">;
    featured?: Prisma.BoolFilter<"Project"> | boolean;
    status?: Prisma.EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    categoryId?: Prisma.StringNullableFilter<"Project"> | string | null;
    images?: Prisma.ProjectImageListRelationFilter;
    tags?: Prisma.ProjectTagListRelationFilter;
    category?: Prisma.XOR<Prisma.ProjectCategoryNullableScalarRelationFilter, Prisma.ProjectCategoryWhereInput> | null;
    projectViews?: Prisma.ProjectViewListRelationFilter;
};
export type ProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    githubUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.ProjectImageOrderByRelationAggregateInput;
    tags?: Prisma.ProjectTagOrderByRelationAggregateInput;
    category?: Prisma.ProjectCategoryOrderByWithRelationInput;
    projectViews?: Prisma.ProjectViewOrderByRelationAggregateInput;
};
export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    title?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    content?: Prisma.StringNullableFilter<"Project"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Project"> | string | null;
    githubUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    liveUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Project">;
    featured?: Prisma.BoolFilter<"Project"> | boolean;
    status?: Prisma.EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    categoryId?: Prisma.StringNullableFilter<"Project"> | string | null;
    images?: Prisma.ProjectImageListRelationFilter;
    tags?: Prisma.ProjectTagListRelationFilter;
    category?: Prisma.XOR<Prisma.ProjectCategoryNullableScalarRelationFilter, Prisma.ProjectCategoryWhereInput> | null;
    projectViews?: Prisma.ProjectViewListRelationFilter;
}, "id" | "slug">;
export type ProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    githubUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProjectCountOrderByAggregateInput;
    _max?: Prisma.ProjectMaxOrderByAggregateInput;
    _min?: Prisma.ProjectMinOrderByAggregateInput;
};
export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    content?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    thumbnail?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    githubUrl?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    liveUrl?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Project">;
    featured?: Prisma.BoolWithAggregatesFilter<"Project"> | boolean;
    status?: Prisma.EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
};
export type ProjectCreateInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagCreateNestedManyWithoutProjectsInput;
    category?: Prisma.ProjectCategoryCreateNestedOneWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId?: string | null;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagUncheckedCreateNestedManyWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUpdateManyWithoutProjectsNestedInput;
    category?: Prisma.ProjectCategoryUpdateOneWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUncheckedUpdateManyWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId?: string | null;
};
export type ProjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    githubUrl?: Prisma.SortOrder;
    liveUrl?: Prisma.SortOrder;
    technologies?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    githubUrl?: Prisma.SortOrder;
    liveUrl?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    githubUrl?: Prisma.SortOrder;
    liveUrl?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ProjectListRelationFilter = {
    every?: Prisma.ProjectWhereInput;
    some?: Prisma.ProjectWhereInput;
    none?: Prisma.ProjectWhereInput;
};
export type ProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectScalarRelationFilter = {
    is?: Prisma.ProjectWhereInput;
    isNot?: Prisma.ProjectWhereInput;
};
export type ProjectCreatetechnologiesInput = {
    set: string[];
};
export type ProjectUpdatetechnologiesInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus;
};
export type ProjectCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput> | Prisma.ProjectCreateWithoutCategoryInput[] | Prisma.ProjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCategoryInput | Prisma.ProjectCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProjectCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput> | Prisma.ProjectCreateWithoutCategoryInput[] | Prisma.ProjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCategoryInput | Prisma.ProjectCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProjectCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput> | Prisma.ProjectCreateWithoutCategoryInput[] | Prisma.ProjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCategoryInput | Prisma.ProjectCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProjectCreateManyCategoryInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCategoryInput | Prisma.ProjectUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput> | Prisma.ProjectCreateWithoutCategoryInput[] | Prisma.ProjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCategoryInput | Prisma.ProjectCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProjectCreateManyCategoryInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCategoryInput | Prisma.ProjectUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutImagesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.ProjectUpsertWithoutImagesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutImagesInput, Prisma.ProjectUpdateWithoutImagesInput>, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
};
export type ProjectCreateNestedManyWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput> | Prisma.ProjectCreateWithoutTagsInput[] | Prisma.ProjectUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTagsInput | Prisma.ProjectCreateOrConnectWithoutTagsInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUncheckedCreateNestedManyWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput> | Prisma.ProjectCreateWithoutTagsInput[] | Prisma.ProjectUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTagsInput | Prisma.ProjectCreateOrConnectWithoutTagsInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUpdateManyWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput> | Prisma.ProjectCreateWithoutTagsInput[] | Prisma.ProjectUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTagsInput | Prisma.ProjectCreateOrConnectWithoutTagsInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutTagsInput | Prisma.ProjectUpsertWithWhereUniqueWithoutTagsInput[];
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutTagsInput | Prisma.ProjectUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutTagsInput | Prisma.ProjectUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput> | Prisma.ProjectCreateWithoutTagsInput[] | Prisma.ProjectUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutTagsInput | Prisma.ProjectCreateOrConnectWithoutTagsInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutTagsInput | Prisma.ProjectUpsertWithWhereUniqueWithoutTagsInput[];
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutTagsInput | Prisma.ProjectUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutTagsInput | Prisma.ProjectUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectCreateNestedOneWithoutProjectViewsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutProjectViewsInput, Prisma.ProjectUncheckedCreateWithoutProjectViewsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutProjectViewsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutProjectViewsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutProjectViewsInput, Prisma.ProjectUncheckedCreateWithoutProjectViewsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutProjectViewsInput;
    upsert?: Prisma.ProjectUpsertWithoutProjectViewsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutProjectViewsInput, Prisma.ProjectUpdateWithoutProjectViewsInput>, Prisma.ProjectUncheckedUpdateWithoutProjectViewsInput>;
};
export type ProjectCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagCreateNestedManyWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagUncheckedCreateNestedManyWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput>;
};
export type ProjectCreateManyCategoryInputEnvelope = {
    data: Prisma.ProjectCreateManyCategoryInput | Prisma.ProjectCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutCategoryInput, Prisma.ProjectUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCategoryInput, Prisma.ProjectUncheckedCreateWithoutCategoryInput>;
};
export type ProjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutCategoryInput, Prisma.ProjectUncheckedUpdateWithoutCategoryInput>;
};
export type ProjectUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProjectScalarWhereInput = {
    AND?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    OR?: Prisma.ProjectScalarWhereInput[];
    NOT?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    id?: Prisma.StringFilter<"Project"> | string;
    title?: Prisma.StringFilter<"Project"> | string;
    slug?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    content?: Prisma.StringNullableFilter<"Project"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"Project"> | string | null;
    githubUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    liveUrl?: Prisma.StringNullableFilter<"Project"> | string | null;
    technologies?: Prisma.StringNullableListFilter<"Project">;
    featured?: Prisma.BoolFilter<"Project"> | boolean;
    status?: Prisma.EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    categoryId?: Prisma.StringNullableFilter<"Project"> | string | null;
};
export type ProjectCreateWithoutImagesInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.ProjectTagCreateNestedManyWithoutProjectsInput;
    category?: Prisma.ProjectCategoryCreateNestedOneWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutImagesInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId?: string | null;
    tags?: Prisma.ProjectTagUncheckedCreateNestedManyWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutImagesInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
};
export type ProjectUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutImagesInput, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutImagesInput, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
};
export type ProjectUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.ProjectTagUpdateManyWithoutProjectsNestedInput;
    category?: Prisma.ProjectCategoryUpdateOneWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.ProjectTagUncheckedUpdateManyWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateWithoutTagsInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    category?: Prisma.ProjectCategoryCreateNestedOneWithoutProjectsInput;
    projectViews?: Prisma.ProjectViewCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutTagsInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId?: string | null;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    projectViews?: Prisma.ProjectViewUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutTagsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput>;
};
export type ProjectUpsertWithWhereUniqueWithoutTagsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutTagsInput, Prisma.ProjectUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutTagsInput, Prisma.ProjectUncheckedCreateWithoutTagsInput>;
};
export type ProjectUpdateWithWhereUniqueWithoutTagsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutTagsInput, Prisma.ProjectUncheckedUpdateWithoutTagsInput>;
};
export type ProjectUpdateManyWithWhereWithoutTagsInput = {
    where: Prisma.ProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyWithoutTagsInput>;
};
export type ProjectCreateWithoutProjectViewsInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagCreateNestedManyWithoutProjectsInput;
    category?: Prisma.ProjectCategoryCreateNestedOneWithoutProjectsInput;
};
export type ProjectUncheckedCreateWithoutProjectViewsInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId?: string | null;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    tags?: Prisma.ProjectTagUncheckedCreateNestedManyWithoutProjectsInput;
};
export type ProjectCreateOrConnectWithoutProjectViewsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutProjectViewsInput, Prisma.ProjectUncheckedCreateWithoutProjectViewsInput>;
};
export type ProjectUpsertWithoutProjectViewsInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutProjectViewsInput, Prisma.ProjectUncheckedUpdateWithoutProjectViewsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutProjectViewsInput, Prisma.ProjectUncheckedCreateWithoutProjectViewsInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutProjectViewsInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutProjectViewsInput, Prisma.ProjectUncheckedUpdateWithoutProjectViewsInput>;
};
export type ProjectUpdateWithoutProjectViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUpdateManyWithoutProjectsNestedInput;
    category?: Prisma.ProjectCategoryUpdateOneWithoutProjectsNestedInput;
};
export type ProjectUncheckedUpdateWithoutProjectViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUncheckedUpdateManyWithoutProjectsNestedInput;
};
export type ProjectCreateManyCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string | null;
    thumbnail?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies?: Prisma.ProjectCreatetechnologiesInput | string[];
    featured?: boolean;
    status?: $Enums.ProjectStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUpdateManyWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    tags?: Prisma.ProjectTagUncheckedUpdateManyWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    category?: Prisma.ProjectCategoryUpdateOneWithoutProjectsNestedInput;
    projectViews?: Prisma.ProjectViewUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    projectViews?: Prisma.ProjectViewUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateManyWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    githubUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liveUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    technologies?: Prisma.ProjectUpdatetechnologiesInput | string[];
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type ProjectCountOutputType
 */
export type ProjectCountOutputType = {
    images: number;
    tags: number;
    projectViews: number;
};
export type ProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | ProjectCountOutputTypeCountImagesArgs;
    tags?: boolean | ProjectCountOutputTypeCountTagsArgs;
    projectViews?: boolean | ProjectCountOutputTypeCountProjectViewsArgs;
};
/**
 * ProjectCountOutputType without action
 */
export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: Prisma.ProjectCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProjectCountOutputType without action
 */
export type ProjectCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectImageWhereInput;
};
/**
 * ProjectCountOutputType without action
 */
export type ProjectCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectTagWhereInput;
};
/**
 * ProjectCountOutputType without action
 */
export type ProjectCountOutputTypeCountProjectViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectViewWhereInput;
};
export type ProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    content?: boolean;
    thumbnail?: boolean;
    githubUrl?: boolean;
    liveUrl?: boolean;
    technologies?: boolean;
    featured?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoryId?: boolean;
    images?: boolean | Prisma.Project$imagesArgs<ExtArgs>;
    tags?: boolean | Prisma.Project$tagsArgs<ExtArgs>;
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
    projectViews?: boolean | Prisma.Project$projectViewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    content?: boolean;
    thumbnail?: boolean;
    githubUrl?: boolean;
    liveUrl?: boolean;
    technologies?: boolean;
    featured?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoryId?: boolean;
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    content?: boolean;
    thumbnail?: boolean;
    githubUrl?: boolean;
    liveUrl?: boolean;
    technologies?: boolean;
    featured?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoryId?: boolean;
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    content?: boolean;
    thumbnail?: boolean;
    githubUrl?: boolean;
    liveUrl?: boolean;
    technologies?: boolean;
    featured?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoryId?: boolean;
};
export type ProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "description" | "content" | "thumbnail" | "githubUrl" | "liveUrl" | "technologies" | "featured" | "status" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["project"]>;
export type ProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | Prisma.Project$imagesArgs<ExtArgs>;
    tags?: boolean | Prisma.Project$tagsArgs<ExtArgs>;
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
    projectViews?: boolean | Prisma.Project$projectViewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
};
export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Project$categoryArgs<ExtArgs>;
};
export type $ProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Project";
    objects: {
        images: Prisma.$ProjectImagePayload<ExtArgs>[];
        tags: Prisma.$ProjectTagPayload<ExtArgs>[];
        category: Prisma.$ProjectCategoryPayload<ExtArgs> | null;
        projectViews: Prisma.$ProjectViewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        description: string;
        content: string | null;
        thumbnail: string | null;
        githubUrl: string | null;
        liveUrl: string | null;
        technologies: string[];
        featured: boolean;
        status: $Enums.ProjectStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    }, ExtArgs["result"]["project"]>;
    composites: {};
};
export type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectPayload, S>;
export type ProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectCountAggregateInputType | true;
};
export interface ProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Project'];
        meta: {
            name: 'Project';
        };
    };
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     */
    create<T extends ProjectCreateArgs>(args: Prisma.SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     */
    delete<T extends ProjectDeleteArgs>(args: Prisma.SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectUpdateArgs>(args: Prisma.SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: Prisma.SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(args?: Prisma.Subset<T, ProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Prisma.Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>;
    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Project model
     */
    readonly fields: ProjectFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Project.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    images<T extends Prisma.Project$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.Project$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.Project$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$categoryArgs<ExtArgs>>): Prisma.Prisma__ProjectCategoryClient<runtime.Types.Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    projectViews<T extends Prisma.Project$projectViewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$projectViewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Project model
 */
export interface ProjectFieldRefs {
    readonly id: Prisma.FieldRef<"Project", 'String'>;
    readonly title: Prisma.FieldRef<"Project", 'String'>;
    readonly slug: Prisma.FieldRef<"Project", 'String'>;
    readonly description: Prisma.FieldRef<"Project", 'String'>;
    readonly content: Prisma.FieldRef<"Project", 'String'>;
    readonly thumbnail: Prisma.FieldRef<"Project", 'String'>;
    readonly githubUrl: Prisma.FieldRef<"Project", 'String'>;
    readonly liveUrl: Prisma.FieldRef<"Project", 'String'>;
    readonly technologies: Prisma.FieldRef<"Project", 'String[]'>;
    readonly featured: Prisma.FieldRef<"Project", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Project", 'ProjectStatus'>;
    readonly createdAt: Prisma.FieldRef<"Project", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Project", 'DateTime'>;
    readonly categoryId: Prisma.FieldRef<"Project", 'String'>;
}
/**
 * Project findUnique
 */
export type ProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: Prisma.ProjectWhereUniqueInput;
};
/**
 * Project findUniqueOrThrow
 */
export type ProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: Prisma.ProjectWhereUniqueInput;
};
/**
 * Project findFirst
 */
export type ProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: Prisma.ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
/**
 * Project findFirstOrThrow
 */
export type ProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: Prisma.ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
/**
 * Project findMany
 */
export type ProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Projects to fetch.
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Projects.
     */
    cursor?: Prisma.ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
/**
 * Project create
 */
export type ProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Project.
     */
    data: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
};
/**
 * Project createMany
 */
export type ProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Project createManyAndReturn
 */
export type ProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * The data used to create many Projects.
     */
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Project update
 */
export type ProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Project.
     */
    data: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
    /**
     * Choose, which Project to update.
     */
    where: Prisma.ProjectWhereUniqueInput;
};
/**
 * Project updateMany
 */
export type ProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
};
/**
 * Project updateManyAndReturn
 */
export type ProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * The data used to update Projects.
     */
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Project upsert
 */
export type ProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: Prisma.ProjectWhereUniqueInput;
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
};
/**
 * Project delete
 */
export type ProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    /**
     * Filter which Project to delete.
     */
    where: Prisma.ProjectWhereUniqueInput;
};
/**
 * Project deleteMany
 */
export type ProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: Prisma.ProjectWhereInput;
    /**
     * Limit how many Projects to delete.
     */
    limit?: number;
};
/**
 * Project.images
 */
export type Project$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where?: Prisma.ProjectImageWhereInput;
    orderBy?: Prisma.ProjectImageOrderByWithRelationInput | Prisma.ProjectImageOrderByWithRelationInput[];
    cursor?: Prisma.ProjectImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectImageScalarFieldEnum | Prisma.ProjectImageScalarFieldEnum[];
};
/**
 * Project.tags
 */
export type Project$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: Prisma.ProjectTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: Prisma.ProjectTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectTagInclude<ExtArgs> | null;
    where?: Prisma.ProjectTagWhereInput;
    orderBy?: Prisma.ProjectTagOrderByWithRelationInput | Prisma.ProjectTagOrderByWithRelationInput[];
    cursor?: Prisma.ProjectTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectTagScalarFieldEnum | Prisma.ProjectTagScalarFieldEnum[];
};
/**
 * Project.category
 */
export type Project$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: Prisma.ProjectCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: Prisma.ProjectCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectCategoryInclude<ExtArgs> | null;
    where?: Prisma.ProjectCategoryWhereInput;
};
/**
 * Project.projectViews
 */
export type Project$projectViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectView
     */
    select?: Prisma.ProjectViewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectView
     */
    omit?: Prisma.ProjectViewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectViewInclude<ExtArgs> | null;
    where?: Prisma.ProjectViewWhereInput;
    orderBy?: Prisma.ProjectViewOrderByWithRelationInput | Prisma.ProjectViewOrderByWithRelationInput[];
    cursor?: Prisma.ProjectViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectViewScalarFieldEnum | Prisma.ProjectViewScalarFieldEnum[];
};
/**
 * Project without action
 */
export type ProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
};
//# sourceMappingURL=Project.d.ts.map