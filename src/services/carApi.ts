
import axios from "axios";

const BASE_URL = "https://carapi.app/api";

export const fetchMakes = async () => {
  const response = await axios.get(`${BASE_URL}/makes`);
  return response.data.data; // array of makes
};

export const fetchModels = async (makeId: number) => {
  const response = await axios.get(`${BASE_URL}/models?make_id=${makeId}`);
  return response.data.data; // array of models
};

export const fetchTrims = async (modelId: number) => {
  const response = await axios.get(`${BASE_URL}/trims?model_id=${modelId}`);
  return response.data.data; // array of trims
};
