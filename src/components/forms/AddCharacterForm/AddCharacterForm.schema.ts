import { object, string, number, boolean, array } from "yup";

export const addCharacterFormSchema = object().shape({
	name: string().required("Required"),
	owner: boolean(),
	level: number().required("Required"),
	experience: number().required("Required"),
	heroClass: string().required("Required"),
	race: string().required("Required"),
	healthPoints: number().required("Required"),
	armorClass: number().required("Required"),
	initiative: number().required("Required"),
	speed: number().required("Required"),
	traits: string(),
	ideals: string(),
	bonds: string(),
	flaws: string(),
	skills: array().of(string()),
	saveThrows: array().of(string()),
	loreNotes: string(),
	userNotes: string(),
});
