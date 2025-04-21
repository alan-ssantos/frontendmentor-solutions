import type { Country } from "../../types/country";

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	return (
		<article className="flex flex-col bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow-md">
			<img src={country.flags.png} alt={country.flags.alt ?? `Flag of ${country.name.common}`} className="w-full aspect-[264/160] object-cover" />
			<div className="px-6 pt-7 pb-10">
				<h2 className="text-lg font-bold mb-4 duration-300 transition-colors hover:text-blue-600 dark:hover:text-blue-300">
					<a href={country.cca3.toLowerCase()} title={`View details about ${country.name.common}`}>
						{country.name.common}
					</a>
				</h2>
				<dl className="">
					<div className="flex">
						<dt className="text-sm my-0.5 font-semibold mr-1">Population: </dt>
						<dd className="opacity-75">{country.population.toLocaleString()}</dd>
					</div>
					<div className="flex">
						<dt className="text-sm my-0.5 font-semibold mr-1">Region: </dt>
						<dd className="opacity-75">{country.region}</dd>
					</div>
					<div className="flex">
						<dt className="text-sm my-0.5 font-semibold mr-1">Capital: </dt>
						<dd className="opacity-75">{country.capital?.join(", ") || "N/A"}</dd>
					</div>
				</dl>
			</div>
		</article>
	);
};

export default CountryCard;

