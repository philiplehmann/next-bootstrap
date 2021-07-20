import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
export declare class AccountGroupBy {
    id: string;
    userId: string;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken: string | null;
    accessToken: string | null;
    accessTokenExpires: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
