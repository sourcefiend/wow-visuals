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
