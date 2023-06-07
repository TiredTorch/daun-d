import { FC, useCallback, useMemo } from "react";
import { Formik } from "formik";
import { Box, Dialog } from "@mui/material";
import { addCharacterFormStyles } from "./AddCharacterForm.styles";
import { Button, FormField } from "src/components/ui";
import { AddCharacterFormProps, SubmitDataType } from "./AddCharacterForm.types";
import { useTypedSelector } from "src/redux";
import { addCharacterStructure } from "./AddCharacterForm.structure";
import { Params, Skills } from "src/types";
import { addCharacterFormSchema } from "./AddCharacterForm.schema";
import { ref, uploadBytes } from "firebase/storage";
import { firebaseStorage, firestore } from "src/firebase";
import { addDoc } from "firebase/firestore";

export const AddCharacterForm: FC<AddCharacterFormProps> = ({
	onClose,
	open
}) => {
	const userData = useTypedSelector(store => store.userSlice.userData);

	const handleSubmitForm = useCallback(
		async (values: SubmitDataType) => {
			console.log(values);
			if (!userData) return;
			const uid = `${userData.uid}_${new Date().toISOString()}`;
			let imageUrl;
			console.log("values.photo", values.photo);
			if (values.photo) {
				console.log("here");
				await uploadBytes(ref(firebaseStorage, `characters/${uid}`), values.photo as any);
				imageUrl = `characters/${uid}`;
			}
			await addDoc(firestore.characters, {
				uid: uid,
				owner: userData.uid,
				contributors: [userData.uid],
				name: values.name,
				photoUrl: imageUrl ?? "",
				level: values.level,
				experience: values.experience,
				heroclass: values.heroClass,
				race: values.race,
				healthPoints: values.healthPoints,
				armorClass: values.armorClass,
				initiative: values.initiative,
				speed: values.speed,
				traits: values.traits,
				ideals: values.ideals,
				bonds: values.bonds,
				flaws: values.flaws,
				params: values.params,
				skills: values.skills as Array<Skills>,
				saveThrows: values.saveThrows as Array<Params>,
				loreNotes: values.loreNotes,
				userNotes: values.userNotes,
			});
			onClose();
		},
		[]
	);
    
	const initialValues = useMemo(() => ({
		name: "",
		owner: false,
		photo: undefined,
		level: "",
		experience: "",
		heroClass: "",
		race: "",
		healthPoints: "",
		armorClass: "",
		initiative: "",
		speed: "",
		traits: "",
		ideals: "",
		bonds: "",
		flaws: "",
		params: Object.keys(Params).map((key) => ({
			name: key as Params,
			value: ""
		})),
		skills: [],
		saveThrows: [],
		loreNotes: "",
		userNotes: ""
	}), []);

	return (
		<Dialog 
			open={open}
			onClose={onClose}
			PaperProps={{
				sx: addCharacterFormStyles.modal
			}}
		>
			<Box
				sx={addCharacterFormStyles.root}
			>
				<span
					style={addCharacterFormStyles.header}
				>
                    Add Character
				</span>
				<Formik
					initialValues={initialValues as unknown as SubmitDataType}
					validationSchema={addCharacterFormSchema}
					onSubmit={handleSubmitForm}
				>
					{({
						errors,
						handleBlur,
						handleChange,
						handleSubmit,
						setFieldValue,
						touched,
						values
					}) => (
						<form 
							onSubmit={handleSubmit}
							style={addCharacterFormStyles.form}
						>
							{addCharacterStructure.map((field) => (
								<FormField
									setFieldValue={(value: string) => setFieldValue(field.name, value)}
									fullWidth
									options={field?.options}
									data={field?.data}
									key={field.id}
									id={field.id}
									placeholder={field.placeholder}
									type={field.type}
									name={field.name}
									value={values[field.name as keyof typeof values]}
									onBlur={handleBlur}
									onChange={handleChange}
									error={touched[field.name as keyof typeof touched] && Boolean(errors[field.name as keyof typeof errors])}
									helperText={
										touched[field.name as keyof typeof touched]
                                        && errors[field.name as keyof typeof errors]
                                        && `${errors[field.name as keyof typeof errors]}`
									}
								/>
							))}
							<Button
								fullWidth
								type="submit"
							>
                                Create
							</Button>
						</form>
					)}
				</Formik>
			</Box>
		</Dialog>
	);
};

export default AddCharacterForm;