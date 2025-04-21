import type { Country } from "../types/country";
import localCountries from "../../public/all.json";

export async function fetchCountries(): Promise<Country[]> {
	let data: Country[] = [];
	try {
		const response = await fetch("https://restcountries.com/v3.1/all");
		if (!response.ok) throw new Error("Server response failed");
		data = await response.json();
	} catch (error) {
		console.error(`Using local data. ${error}`);
		data = localCountries as unknown as Country[];
	}
	return data;
}

