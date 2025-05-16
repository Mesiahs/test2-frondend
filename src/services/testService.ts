import axios from "axios";
import { Form } from "../interfaces/FormInterface";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getForms = async (): Promise<Form[]> => {
  console.log(BASE_URL);
  try {
    const response = await axios.get(`${BASE_URL}/forms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
};
