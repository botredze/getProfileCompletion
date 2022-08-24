/* Local dependencies */


import {Address, ID, ListInput, Locale, Price} from "./types";

export interface StringMap {
    [name: string]: string;
}

export enum EntryType {
    CLINIC = 'Clinic',
    HOSPITAL = 'Hospital',
    PHYSICIAN = 'Physician',
    PHARMACIST = 'Pharmacist',
    USER = 'User',
}

export type EntryTypes = EntryType[];

export enum UserGroup {
    DEFAULT = 'MedcheckUser',
    USER = 'MedcheckUser',
}

type Person = EntryType.PHYSICIAN | EntryType.PHARMACIST | EntryType.USER;
type Institution = EntryType.CLINIC | EntryType.HOSPITAL;

interface Rating {
    avgRating: number;
    numReviews: number;
}

export interface BaseEntry {
    id: ID;
    avatar?: string;
    servicesDescription?: string;
    consultationPrice?: Price;
    email?: string;
    phone?: string;
    phonesExtra?: string[];
    joinDate: number;
    url?: string;
    rating?: Rating;
    __typename: EntryType;
    personalIdentificationNumber?: string;
    profileCompletionRate?: number;
}

interface Period {
    from: Number;
    to?: Number;
}

interface Education {
    institution: String;
    studyPeriod: Period;
    department: String;
}

interface WorkExperience {
    clinicID: ID;
    clinicName: String;
    position: String;
    workPeriod: Period;
}

export interface User extends BaseEntry {
    firstName?: string;
    firstName_ru?: string;
    lastName?: string;
    lastName_ru?: string;
    patronymic?: string;
    patronymic_ru?: string;
    specialities?: string[];
    experienceSince?: number;
    education?: string;
    educations?: Education[];
    experience?: string;
    level?: string;
    workplaces?: Workplace[];
    workExperience?: WorkExperience[];
    insurance?: Insurance | null;
    gender?: Gender;
    birthDate?: number;
    bloodType?: BloodType;
    height?: Anthropometry;
    weight?: Anthropometry;
    placeOfResidence?: Address;
    emergencyContact?: TelephoneContact[];
    occupation?: string;
    occupation_ru?: string;
    status?: Status;
    proAccounts?: Entry[];

    // AWS AppSync requires `__typename` to be defined to determine the type of the record.
    __typename: Person;

}

export enum Status {
    BLOCK = 'BLOCK',
    IN_REVIEW = 'IN_REVIEW',
    APPROVED = 'APPROVED',
    INCOMPLETE = 'INCOMPLETE',
}

export interface LocalizationObject {
    title_ru: string[];
    title_en: string[];
}

export interface Clinic extends BaseEntry {
    clinicName?: string;
    clinicName_ru?: string;
    alternateName?: string;
    alternateName_ru?: string;
    clinicAddress?: string;
    description?: string;
    status?: Status;
    medicalProfiles?: string[];
    workplaces?: Workplace[];

    // AWS AppSync requires `__typename` to be defined to determine the type of the record.
    __typename: Institution;
}

export interface Workplace {
    clinicID: string;
    clinicName: string;
    clinicAddress?: Address;
    specialities?: string[];
    startDate?: number;
}

enum Gender {
    MALE,
    FEMALE,
}

export enum UserField {
    AVATAR = 'avatar',
    FIRSTNAME = 'firstName_ru',
    LASTNAME = 'lastName_ru',
    PATRONYMIC = 'patronymic_ru',
    BIRTHDATE = 'birthDate',
    SPECIALITIES = 'specialities',
    GENDER = 'gender',
    BLOODTYPE = 'bloodType',
    HEIGHT = 'height',
    WEIGHT = 'weight',
    INSURANCE = 'insurance',
    EMAIL = 'email',
    PHONE = 'phone',
    PLACE_OF_RESIDENCE = 'placeOfResidence',
    EMERGENCYCONTACT = 'emergencyContact',
    OCCUPATION = 'occupation_ru',
    WORKPLACES = 'workplaces',
    EDUCATIONS = 'educations',
    WORK_EXPERIENCE = 'workExperience',
    EXPERIENCE_SINCE = 'experienceSince',
}

export enum ClinicField {
    CLINICNAME = 'clinicName_ru',
    CLINICADDRESS = 'clinicAddress',
    AVATAR = 'avatar',
    EMAIL = 'email',
    PHONE = 'phone',
    MEDICAL_PROFILES = 'medicalProfiles',
    WORKPLACES = 'workplaces',
}

export interface Insurance {
    name?: string;
    status: number;
    startDate?: string;
    endDate?: string;
}

enum BloodType {
    O_ONE_PLUS,
    O_ONE_MINUS,
    A_TWO_PLUS,
    A_TWO_MINUS,
    B_THREE_PLUS,
    B_THREE_MINUS,
    AB_FOUR_PLUS,
    AB_FOUR_MINUS,
}

interface Anthropometry {
    value: number;
    unit: String;
}

interface TelephoneContact {
    name: String;
    relation: String;
    phone: number;
}

export type Users = User[];

export type Clinics = Clinic[];

export type Entry = User | Clinic;

export interface CreateEntryInput {
    user?: User;
    clinic?: Clinic;
    physician?: User;
    pharmacist?: User;
}

export interface DeleteEntryInput {
    id: string;
}

export interface UpdateUserInput extends Partial<User> {
    id: string;
}

export interface UpdateClinicInput extends Partial<Clinic> {
    id: string;
}

export type UpdateEntryInput = UpdateUserInput | UpdateClinicInput;

export type Entries = Entry[];

interface ListUsersFilter {
    locale?: Locale;
    entryTypes?: EntryTypes;
}

export interface GetUserInput {
    id: string;
}

export interface DeleteUserInput {
    id: string;
}

export type ListUsersInput = ListInput<ListUsersFilter>;

export interface ListUsersResponse {
    total: number;
    users: Entries;
}

export interface UploadProfileInput {
    file: string;
}

export interface UploadAvatarInput {
    avatar: string;
}

export interface DeleteAvatarInput {
    avatar: string;
}

export interface GetUserInsuranceInput {
    personalIdentificationNumber: string;
}
