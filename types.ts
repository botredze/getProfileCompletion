
export interface Address {
    address: string;
    addressExtra?: string;
    city: string;
    country: string;
    zipCode?: string;
    geoLocation?: string;
}

export interface Price {
    value: string;
    currency: string;
}

export type ID = string;

export interface ListInput<Filter = {}> {
    from?: number;
    query?: string;
    size?: number;
    filter?: Filter;
}

export interface ListResponse<T> {
    total: number;
    users: T;
}

export enum Locale {
    RU = 'ru',
    EN = 'en',
}

export enum WeekDays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

interface Schedule {
    vacations: {
        message: string;
        status: boolean;
    };
    workingHours: {
        [key in WeekDays]: {
        from: string;
        to: string;
    } | null;
    };
}

export interface Parameters<T> {
    identity: {
        id: string;
    };
    input: T;
}
