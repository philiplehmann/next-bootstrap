import { VerificationRequestCountAggregate } from "../outputs/VerificationRequestCountAggregate";
import { VerificationRequestMaxAggregate } from "../outputs/VerificationRequestMaxAggregate";
import { VerificationRequestMinAggregate } from "../outputs/VerificationRequestMinAggregate";
export declare class VerificationRequestGroupBy {
    id: string;
    identifier: string;
    token: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: VerificationRequestCountAggregate | null;
    _min: VerificationRequestMinAggregate | null;
    _max: VerificationRequestMaxAggregate | null;
}
