export interface ITokenGenerator {
    generateToken(userId: string): string;
    revokeToken(userId: string): boolean;
    getTokenStatus(token: string): boolean;
}