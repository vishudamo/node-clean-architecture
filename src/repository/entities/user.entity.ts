import { UserTypes } from "../../application/domain";

export interface UserEntity {
    _id: string | null;
    email: string;
    password?: string;
    userType: UserTypes;
    firstName: string | null;
    lastName: string | null;
}