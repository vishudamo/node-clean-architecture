import { UserModel, Credential } from "../../domain";

export interface IUserRepository {
    addNewUser(user: UserModel): Promise<boolean>;
    authenticateUser(details: Credential): Promise<string>;
}