import { Adapter } from "../interfaces/adapter";

export class AccessToken {
    access_token: string;
    expires_in: Number;
    sub: string;
    token_type: string;

    constructor(access_token: string, expires_in: Number, sub: string, token_type: string) {
        this.access_token = access_token;
        this.expires_in = expires_in;
        this.sub = sub;
        this.token_type = token_type;
    }
}

export class AccessTokenAdapter implements Adapter<AccessToken> {
    adapt(item: any): AccessToken {
        return new AccessToken(item.access_token, item.expires_in, item.sub, item.token_type);
    }
}
