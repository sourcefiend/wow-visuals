import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";

export class Login {
    region: string;
    realm: string;
    characterName: string;

    constructor(region: string, realm: string, characterName: string) {
        this.region = region;
        this.realm = realm;
        this.characterName = characterName;
    }
}
