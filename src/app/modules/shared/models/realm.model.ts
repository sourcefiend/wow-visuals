import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";

export class Realm {
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

@Injectable({
    providedIn: "root",
})
export class RealmAdapter implements Adapter<Realm> {
    adapt(item: any): Realm {
        return new Realm(item.access_token, item.expires_in, item.sub, item.token_type);
    }
}
