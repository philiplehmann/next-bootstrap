import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
