import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAccountsInput } from "../inputs/UserUpdateOneRequiredWithoutAccountsInput";
export declare class AccountUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    providerType?: StringFieldUpdateOperationsInput | undefined;
    providerId?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refreshToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAccountsInput | undefined;
}
