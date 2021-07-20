import { Prisma } from "@prisma/client";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    roles?: Prisma.InputJsonValue | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
}
