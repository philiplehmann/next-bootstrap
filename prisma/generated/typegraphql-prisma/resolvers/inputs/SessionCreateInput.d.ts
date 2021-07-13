import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
    id?: string | undefined;
    expires: Date;
    sessionToken: string;
    accessToken: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutSessionsInput;
}
