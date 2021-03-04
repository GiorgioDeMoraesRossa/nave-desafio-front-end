/* Arquivo que define a base da API (seria para setar headers também) */
import axios from "axios";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

export default api;
