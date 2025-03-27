import React from "react";

const Welcome = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data = await response.json();

	return (
		<>
			<header></header>
			<main className="container mx-auto">
				<section className="grid grid-cols-4 gap-4">
					{data &&
						data.map((c) => (
							<article key={c.cca3} className="flex flex-col">
								<img src={c.flags.png} alt="" className="w-full aspect-[3/2] object-cover" />
								<h2>
									<a href={c.cca3.toLowerCase()}>{c.name.common}</a>
								</h2>
								<dl>
									<div className="flex">
										<dt className="font-bold mr-1">Population: </dt>
										<dd>{c.population}</dd>
									</div>
									<div className="flex">
										<dt className="font-bold mr-1">Region: </dt>
										<dd>{c.region}</dd>
									</div>
									<div className="flex">
										<dt className="font-bold mr-1">Capital: </dt>
										<dd>{c.capital}</dd>
									</div>
								</dl>
							</article>
						))}
				</section>
			</main>
		</>
	);
};

export default Welcome;

