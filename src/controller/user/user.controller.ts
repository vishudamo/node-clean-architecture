import { UserModel, Credential } from "../../application/domain";
import { Repository } from "../../repository";
import { RegisterUserUseCase } from "../../application/use-cases/register-user/register-user.use-case";
import { Token } from "../../token";
import { AuthenticateUserUseCase } from "../../application/use-cases/register-user/authenticate-user.use-case";

export class UserController {
    async registerUser(user: UserModel): Promise<string> {
        const repo = Repository.getInstance();
        const tokenGenerator = new Token();
        const useCase = new RegisterUserUseCase(repo, tokenGenerator);
        const data = useCase.execute(user);
        return data;
    }

    async authenticateUser(details: Credential): Promise<string> {
        const repo = Repository.getInstance();
        const tokenGenerator = new Token();
        const useCase = new AuthenticateUserUseCase(repo, tokenGenerator);
        const data = useCase.execute(details);
        return data;
    }
}