/* Local dependencies */

import { Locale } from './types';
import {ClinicField, UserField} from "./user_types";

export const DEFAULT_LOCALE = Locale.RU;
export const DEFAULT_PAGE_SIZE = 20;
export const FOMS_URL = 'https://api.foms.kg/api/pin/';

export const CLINIC_REQUIRED_FIELDS = [
    ClinicField.AVATAR,
    ClinicField.CLINICADDRESS,
    ClinicField.CLINICNAME,
    ClinicField.PHONE,
    ClinicField.MEDICAL_PROFILES,
];

export const PHYSICIAN_REQUIRED_FIELDS = [
    UserField.AVATAR,
    UserField.FIRSTNAME,
    UserField.LASTNAME,
    UserField.SPECIALITIES,
    UserField.WORKPLACES,
    UserField.EDUCATIONS,
    UserField.WORK_EXPERIENCE,
    UserField.EXPERIENCE_SINCE,
];

export const PHARMACIST_REQUIRED_FIELDS = [
    UserField.AVATAR,
    UserField.FIRSTNAME,
    UserField.LASTNAME,
    UserField.SPECIALITIES,
    UserField.WORKPLACES,
    UserField.EDUCATIONS,
    UserField.WORK_EXPERIENCE,
    UserField.EXPERIENCE_SINCE,
];

export const USER_REQUIRED_FIELDS = [
    UserField.PLACE_OF_RESIDENCE,
    UserField.AVATAR,
    UserField.BIRTHDATE,
    UserField.BLOODTYPE,
    UserField.EMAIL,
    UserField.FIRSTNAME,
    UserField.GENDER,
    UserField.HEIGHT,
    UserField.LASTNAME,
    UserField.PHONE,
    UserField.WEIGHT,
    UserField.OCCUPATION,
];