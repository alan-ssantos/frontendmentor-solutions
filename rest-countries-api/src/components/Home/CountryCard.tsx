import type { Country } from "../../types/country";

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	return (
		<article className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
			<img src={country.flags.png} alt={country.flags.alt ?? `Flag of ${country.name.common}`} className="w-full aspect-[3/2] object-contain" />
			<div className="px-6 py-8">
				<h2 className="text-lg font-bold text-black mb-4">
					<a href={country.cca3.toLowerCase()} aria-label={`View details about ${country.name.common}`}>
						{country.name.common}
					</a>
				</h2>
				<dl className="">
					<div className="flex">
						<dt className="font-bold mr-1">Population: </dt>
						<dd>{country.population.toLocaleString()}</dd>
					</div>
					<div className="flex">
						<dt className="font-bold mr-1">Region: </dt>
						<dd>{country.region}</dd>
					</div>
					<div className="flex">
						<dt className="font-bold mr-1">Capital: </dt>
						<dd>{country.capital?.join(", ") || "N/A"}</dd>
					</div>
				</dl>
			</div>
		</article>
	);
};

export default CountryCard;

