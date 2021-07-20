import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    accessToken?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
}
