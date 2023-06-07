import { Character } from "src/types";

export const getDescList = (char: Character) => [
	{
		title: "Name",
		value: char?.name,
		private: false
	},
	{
		title: "Class",
		value: char?.heroclass,
		private: false
	},
	{
		title: "Race",
		value: char?.race,
		private: false
	},
	{
		title: "Traits",
		value: char?.traits,
		private: false
	},
	{
		title: "Ideals",
		value: char?.ideals,
		private: false
	},
	{
		title: "Bonds",
		value: char?.bonds,
		private: false
	},
	{
		title: "Flaws",
		value: char?.flaws,
		private: false
	},
	{
		title: "Lore",
		value: char?.loreNotes,
		private: false
	},
	{
		title: "Level",
		value: char?.level,
		private: true
	},
	{
		title: "Experience",
		value: char?.experience,
		private: true
	},
	{
		title: "Health Points",
		value: char?.healthPoints,
		private: true
	},
	{
		title: "Armor Class",
		value: char?.armorClass,
		private: true
	},
	{
		title: "Initiative",
		value: char?.initiative,
		private: true
	},
	{
		title: "Speed",
		value: char?.speed,
		private: true
	}
];