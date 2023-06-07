export type Character = {
    uid: string;
    owner: string;
    contributors: Array<string>;
    name: string;
    photoUrl: string;
    level: number;
    experience: number;
    heroclass: string;
    race: string;
    healthPoints: number;
    armorClass: number;
    initiative: number;
    speed: number;
    traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    params: Array<{
        name: Params,
        value: number
    }>;
    skills: Array<Skills>;
    saveThrows: Array<Params>;
    loreNotes: string;
    userNotes: string;
}

export enum Params {
    STRENGTH = "Strength",
    DEXTERITY = "Dexterity",
    CONSTITUTION = "Constitution",
    INTELLIGENCE = "Intelligence",
    WISDOM = "Wisdom",
    CHARISMA = "Charisma"
}

export enum Skills {
    ACROBATICS = "Acrobatics",
    ANIMAL_HANDLING = "Animal Handling",
    ARCANA = "Arcana",
    ATHLETICS = "Athletics",
    DECEPTION = "Deception",
    HISTORY = "History",
    INSIGHT = "Insight",
    INTIMIDATION = "Intimidation",
    INVESTIGATION = "Investigation",
    MEDICINE = "Medicine",
    NATURE = "Nature",
    PRECEPTION = "Perception",
    PERFORMANCE = "Performance",
    PERSUASION = "Persuasion",
    RELIGION = "Religion",
    SLAIGHT_OF_HAND = "Sleight of Hand",
    STEALTH = "Stealth",
    SURVIVAL = "Survival"
}