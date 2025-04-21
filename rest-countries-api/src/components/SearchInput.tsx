import { PiMagnifyingGlassBold } from "react-icons/pi";

interface SearchInputProps {
	value: string;
	placeholder?: string;
	className?: string;
	onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value = "", placeholder = "Search for a country", className, onChange }: SearchInputProps) {
	return (
		<div className="relative w-full max-w-[480px]">
			<PiMagnifyingGlassBold className="absolute left-6 top-6/12 -translate-y-6/12 text-lg" />
			<input
				id="search-input"
				type="text"
				aria-label={placeholder}
				placeholder={placeholder}
				className={`min-h-14 w-full shadow-md py-4 pl-16 text-sm rounded-md bg-white dark:bg-gray-700 ${className}`}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default SearchInput;

