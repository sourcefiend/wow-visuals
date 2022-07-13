import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";

export class Realm {
    id: Number;
    name: string;
    slug: string;

    constructor(id: Number, name: string, slug: string) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }
}

@Injectable({
    providedIn: "root",
})
export class RealmAdapter implements Adapter<Realm> {
    adapt(item: any): Realm {
        return new Realm(item.id, item.name, item.slug);
    }
}
