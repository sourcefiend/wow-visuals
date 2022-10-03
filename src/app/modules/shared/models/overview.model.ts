export class Overview {
    name: string;
    realm: string;
    gender: string;
    faction: string;
    race: string;
    characterClass: string;
    activeSpec: string;
    level: number;
    achievementPoints: number;
    itemLevel: number;
    activeTitle: string;
    covenant: string;
    renown: number;

    constructor(name: string, realm: string, gender: string, faction: string, race: string, characterClass: string, activeSpec: string, level: number, achievementPoints: number, itemLevel: number, activeTitle: string, covenant: string, renown: number) {
        this.name = name;
        this.realm = realm;
        this.gender = gender;
        this.faction = faction;
        this.race = race;
        this.characterClass = characterClass;
        this.activeSpec = activeSpec;
        this.level = level;
        this.achievementPoints = achievementPoints;
        this.itemLevel = itemLevel;
        this.activeTitle = activeTitle;
        this.covenant = covenant;
        this.renown = renown;
    }
}