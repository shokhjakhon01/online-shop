import axios from "./api-products";

const CardService = {
	async getCards() {
		const responce = await axios.get("/products");

		return responce.data;
	},
};

export default CardService;
