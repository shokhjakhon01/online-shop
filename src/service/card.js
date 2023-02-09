import axios from "./api-products";

const CardService = {
	async getCards() {
		const responce = await axios.get("/products");

		return responce.data;
	},

	async getSingleCard(id) {
		const responce = await axios.get(`/products/${id}`);

		return responce.data;
	},
};

export default CardService;
