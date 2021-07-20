import { Prisma } from "@prisma/client";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";
export declare class JsonWithAggregatesFilter {
    equals?: Prisma.InputJsonValue | undefined;
    not?: Prisma.InputJsonValue | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedJsonFilter | undefined;
    _max?: NestedJsonFilter | undefined;
}
