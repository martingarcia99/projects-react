import { useAppDispatch } from "../hooks/store";
import { UserId, addNewUser, deleteUserById } from "../store/users/slice";

export const useUsersActions = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	const addUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};

	return { removeUser, addUser };
};
