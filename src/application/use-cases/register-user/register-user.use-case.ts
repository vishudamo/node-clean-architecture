import { UseCase } from "../../base";
import { UserModel } from "../../domain";
import { IUserRepository } from "../../contracts/repository/user";
import { Token } from "../../../token";
import { ITokenGenerator } from "../../contracts/token/token";

export class RegisterUserUseCase implements UseCase<UserModel, string> {
    repository: IUserRepository;
    tokenGen: ITokenGenerator;

    constructor(repo: IUserRepository, token: ITokenGenerator ) {
        this.repository = repo;
        this.tokenGen = token;
    }

    async execute(params: UserModel): Promise<string> {
        const result = await this.repository.addNewUser(params);
        let token;
        if(result) {
            token = this.tokenGen.generateToken(params._id as string);
        } else {
            token = '';
        }
        return token;
    }

}