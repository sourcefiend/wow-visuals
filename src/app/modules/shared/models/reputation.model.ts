export class Reputation {
    id: Number;
    name: String;
    currentPoints: Number;
    maximumPoints: Number;
    tier: Number;
    tierName: String;

    constructor(id: Number, name: String, currentPoints: Number, maximumPoints: Number, tier: Number, tierName: String) {
        this.id = id;
        this.name = name;
        this.currentPoints = currentPoints;
        this.maximumPoints = maximumPoints;
        this.tier = tier;
        this.tierName = tierName;
    }
}