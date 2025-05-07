import axios from "axios";
import { Form } from "../interfaces/FormInterface";

const BASE_URL = "http://127.0.0.1:8000";

export const getForms = async (): Promise<Form[]> => {
  console.log(BASE_URL);
  try {
    const response = await axios.get(`${BASE_URL}/forms`);
    console.log("esta es la respuesta ",response)
    return response.data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
};
