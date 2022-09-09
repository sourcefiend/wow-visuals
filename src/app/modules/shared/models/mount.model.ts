export class Mount {
    id: Number;
    name: string;
    mount_href: string;
    display_url?: string;
    description?: string;

    constructor(id: Number, name: string, mount_href: string) {
        this.id = id;
        this.name = name;
        this.mount_href = mount_href;
    }
}
