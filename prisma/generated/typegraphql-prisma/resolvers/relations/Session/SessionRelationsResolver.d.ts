import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
export declare class SessionRelationsResolver {
    user(session: Session, ctx: any): Promise<User>;
}
