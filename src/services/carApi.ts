
// src/services/carApi.ts
export const fetchCars = async (query: string) => {
  try {
    const response = await fetch(`https://api.example.com/cars?search=${query}`);
    if (!response.ok) throw new Error('Failed to fetch cars');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
