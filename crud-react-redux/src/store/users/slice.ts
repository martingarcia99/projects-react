import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peter@gmail.com",
		github: "peterdoe",
	},
	{
		id: "2",
		name: "Martin Garcia",
		email: "martingarcia@gmail.com",
		github: "martingarcia99",
	},
	{
		id: "3",
		name: "Miguel Angel",
		email: "midudev@gmail.com",
		github: "midudev",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
