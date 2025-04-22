import RegionDropdown from "../RegionDropdown";
import type { Country } from "../../types/country";
import { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import CountryCard from "./CountryCard";

const regions = ["Africa", "Americas", "Antarctic", "Asia", "Europe", "Oceania"];

interface HomeProps {
	countries: Country[];
}

const Home = ({ countries }: HomeProps) => {
	const [inputSearchValue, setInputSearchValue] = useState<string>("");
	const [countriesList, setCountriesList] = useState<Country[]>(countries);

	const handleRegionDropdown = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
		if (regions.includes(target.value)) {
			let newList = countries.filter((c) => c.region === target.value);
			setCountriesList(newList);
		} else {
			setCountriesList(countries);
		}
	};

	const handleInputSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearchValue(target.value);
	};

	useEffect(() => {
		setCountriesList(countries.filter((country) => country.name.common.toLowerCase().includes(inputSearchValue.toLowerCase())));
	}, [inputSearchValue]);

	return (
		<main className="container px-3 xl:px-0 mx-auto">
      <h1 className="sr-only">Where in the world?</h1>
			<div className="py-12 flex flex-col md:flex-row justify-between gap-12">
				<SearchInput value={inputSearchValue} onChange={handleInputSearch} />
				<RegionDropdown options={regions} onChange={handleRegionDropdown} />
			</div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:gap-[75px]">
				{countriesList?.length > 0 ? (
					countriesList.map((country: Country, index) => <CountryCard country={country} imageLazy={index > 8} key={country.cca3} />)
				) : (
					<p>Sorry, but we couldn't find any countries</p>
				)}
			</div>
		</main>
	);
};

export default Home;

