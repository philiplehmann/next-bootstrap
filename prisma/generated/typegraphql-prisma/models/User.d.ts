import { Account } from "../models/Account";
import { Session } from "../models/Session";
export declare class User {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    accounts?: Account[];
    sessions?: Session[];
}
