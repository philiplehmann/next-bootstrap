import { User } from "../models/User";
export declare class Account {
    id: string;
    userId: string;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string | null;
    accessToken?: string | null;
    accessTokenExpires?: Date | null;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}
