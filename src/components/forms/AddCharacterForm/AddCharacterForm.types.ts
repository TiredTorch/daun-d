import { Params } from "src/types";

export type AddCharacterFormProps = {
    open: boolean;
    onClose: VoidFunction
}

export type SubmitDataType = {
    name: string,
    owner: boolean,
    photo: File | undefined,
    level: number,
    experience: number,
    heroClass: string,
    race: string,
    healthPoints: number,
    armorClass: number,
    initiative: number,
    speed: number,
    traits: string,
    ideals: string,
    bonds: string,
    flaws: string,
    params: Array<{
        name: Params,
        value: number
    }>,
    skills: string[],
    saveThrows: string[],
    loreNotes: string,
    userNotes: string
}