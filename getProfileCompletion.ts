/* Local dependencies */


import {ClinicField, Entry, EntryType, UserField} from "./user_types";
import {
    CLINIC_REQUIRED_FIELDS,
    PHARMACIST_REQUIRED_FIELDS,
    PHYSICIAN_REQUIRED_FIELDS,
    USER_REQUIRED_FIELDS
} from "./item";
import {ResourceNotFoundException} from "./errors";

export default function getProfileCompletionRate(entry: Entry): number {
    if (entry.__typename === EntryType.USER) {
        const filledFields = USER_REQUIRED_FIELDS.filter((field: UserField) => !!entry[field]);

        return +(filledFields.length / USER_REQUIRED_FIELDS.length).toFixed(2);
    }

    if (entry.__typename === EntryType.PHYSICIAN) {
        const filledFields = PHYSICIAN_REQUIRED_FIELDS.filter((field: UserField) => !!entry[field]);

        return +(filledFields.length / PHYSICIAN_REQUIRED_FIELDS.length).toFixed(2);
    }

    if (entry.__typename === EntryType.PHARMACIST) {
        const filledFields = PHARMACIST_REQUIRED_FIELDS.filter((field: UserField) => !!entry[field]);

        return +(filledFields.length / PHARMACIST_REQUIRED_FIELDS.length).toFixed(2);
    }

    if (entry.__typename === EntryType.CLINIC) {
        const filledFields = CLINIC_REQUIRED_FIELDS.filter((field: ClinicField) => !!entry[field]);

        return +(filledFields.length / CLINIC_REQUIRED_FIELDS.length).toFixed(2);
    }

    throw new Error('No resource exists with this identifier.') as ResourceNotFoundException;
}