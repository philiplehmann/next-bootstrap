import { VerificationRequestCountAggregate } from "../outputs/VerificationRequestCountAggregate";
import { VerificationRequestMaxAggregate } from "../outputs/VerificationRequestMaxAggregate";
import { VerificationRequestMinAggregate } from "../outputs/VerificationRequestMinAggregate";
export declare class AggregateVerificationRequest {
    _count: VerificationRequestCountAggregate | null;
    _min: VerificationRequestMinAggregate | null;
    _max: VerificationRequestMaxAggregate | null;
}
