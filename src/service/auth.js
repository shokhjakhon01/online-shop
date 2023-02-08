import axios from "./api";

const AuthService = {
	async userRegister(user) {
		const responce = await axios.post("https://api.realworld.io/api/users", { user });

		return responce.data;
	},

	async userLogin(user) {
		const responce = await axios.post("https://api.realworld.io/api/users/login", { user });

		return responce.data;
	},

	async getUser() {
		const responce = await axios.get("https://api.realworld.io/api/user");

		return responce.data;
	},
};

export default AuthService;
