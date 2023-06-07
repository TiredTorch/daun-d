import { Params, Skills } from "src/types";

const name = {
	placeholder: "Name",
	id: "name",
	name: "name",
	type: "text"
};
const owner = {
	type: "checkbox",
	placeholder: "Is it one of your characters?",
	id: "owner",
	name: "owner"
};
const photo = {
	type: "image",
	placeholder: "Upload character photo",
	id: "photo",
	name: "photo",
};
const level = {
	type: "number",
	placeholder: "Level",
	id: "level",
	name: "level",
};
const experience = {
	type: "number",
	placeholder: "Experience",
	id: "experience",
	name: "experience",
};
const heroClass = {
	placeholder: "Class",
	id: "heroClass",
	name: "heroClass",
	type: "text"
};
const race = {
	placeholder: "Race",
	id: "race",
	name: "race",
	type: "text"
};
const healthPoints = {
	placeholder: "Health Points",
	id: "healthPoints",
	name: "healthPoints",
	type: "number"
};
const armorClass = {
	placeholder: "Armor Class",
	id: "armorClass",
	name: "armorClass",
	type: "number"
};
const initiative = {
	placeholder: "Initiative",
	id: "initiative",
	name: "initiative",
	type: "number"
};
const speed = {
	placeholder: "Speed",
	id: "speed",
	name: "speed",
	type: "number"
};
const traits = {
	placeholder: "Traits",
	id: "traits",
	name: "traits",
	type: "text"
};
const ideals = {
	placeholder: "Ideals",
	id: "ideals",
	name: "ideals",
	type: "text"
};
const bonds = {
	placeholder: "Bonds",
	id: "bonds",
	name: "bonds",
	type: "text"
};
const flaws = {
	placeholder: "Flaws",
	id: "flaws",
	name: "flaws",
	type: "text"
};
const params = {
	placeholder: "Stats",
	id: "params",
	name: "params",
	type: "table",
	data: Object.keys(Params).map((key) => ({
		name: key
	}))
};
const skills = {
	placeholder: "Skills",
	id: "skills",
	name: "skills",
	type: "options",
	options: Object.keys(Skills)
};
const saveThrows = {
	placeholder: "Save Throws",
	id: "saveThrows",
	name: "saveThrows",
	type: "options",
	options: Object.keys(Params)
};
const loreNotes = {
	placeholder: "Lore Notes",
	id: "loreNotes",
	name: "loreNotes",
	type: "textarea"
};
const userNotes = {
	placeholder: "User Notes",
	id: "userNotes",
	name: "userNotes",
	type: "textarea"
};
const breakerPrivate = {
	placeholder: "Private Section. (Visible only to contibutors)",
	id: "Privatebreaker",
	name: "breaker",
	type: "breaker"
};
const breakerPublic = {
	placeholder: "Public Section. (Visible to everyone)",
	id: "Publicbreaker",
	name: "breaker",
	type: "breaker"
};

export const addCharacterStructure = [
	breakerPublic,
	owner,
	photo,
	name,
	heroClass,
	race,
	traits,
	ideals,
	bonds,
	flaws,
	loreNotes,
	breakerPrivate,
	level,
	experience,
	healthPoints,
	armorClass,
	initiative,
	speed,
	params,
	skills,
	saveThrows,
	userNotes
] as Array<{
	placeholder: string;
	id: string;
	name: string;
	type: string;
	data?: {
		name: string;
		value: number;
	}[];
	options?: string[]
}>;