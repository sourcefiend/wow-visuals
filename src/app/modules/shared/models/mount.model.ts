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

export class MountDisplay {
    id: number;
    name: string;
    displayId: number;
    description: string;
    source: string;

    constructor(id: number, name: string, displayId: number, description: string, source: string) {
        this.id = id;
        this.name = name;
        this.displayId = displayId;
        this.description = description;
        this.source = source;
    }
}