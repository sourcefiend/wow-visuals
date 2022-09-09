export class Dungeon {
    completedTimestamp: Date;
    durationInMS: Number;
    keystoneLevel: Number;
    affixes: String;
    members: String;
    name: String;
    withinTime: boolean;
    rating: Number;

    constructor(
        completedTimestamp: Date,
        durationInMS: Number,
        keystoneLevel: Number,
        affixes: String,
        members: String,
        name: String,
        withinTime: boolean,
        rating: Number
    ) {
        this.completedTimestamp = completedTimestamp;
        this.durationInMS = durationInMS;
        this.keystoneLevel = keystoneLevel;
        this.affixes = affixes;
        this.members = members;
        this.name = name;
        this.withinTime = withinTime;
        this.rating = rating;
    }
}
