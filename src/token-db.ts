import { IToken } from "./token-type";

export abstract class TokenDB {
    private static tokenList: Array<IToken> = [];
    private static instance: TokenDB;

    public static addToken(data: IToken): boolean {
        this.tokenList = [...this.tokenList, data];
        return true;
    }

    public static revokeToken(userId: string): boolean {
        this.tokenList = this.tokenList.filter(data => data.userId != userId);
        return true;
    }

    public static getTokenStatus(token: string): boolean {
       const result = this.tokenList.find(data => data.tokenValue == token);
       if(result) {
           return true;
       }
       return false;
    }
}