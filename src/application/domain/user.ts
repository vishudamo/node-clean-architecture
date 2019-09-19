import { UserTypes } from "./user-types";

export interface UserModel {
    _id?: string | null;
    email: string;
    password?: string;
    userType: UserTypes;
    firstName: string | null;
    lastName: string | null;
}