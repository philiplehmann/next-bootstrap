import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";
export declare class SessionGroupBy {
    id: string;
    userId: string;
    expires: Date;
    sessionToken: string;
    accessToken: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SessionCountAggregate | null;
    _min: SessionMinAggregate | null;
    _max: SessionMaxAggregate | null;
}
