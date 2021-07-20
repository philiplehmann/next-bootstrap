import { User } from "../models/User";
export declare class Session {
    id: string;
    userId: string;
    expires: Date;
    sessionToken: string;
    accessToken: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}
