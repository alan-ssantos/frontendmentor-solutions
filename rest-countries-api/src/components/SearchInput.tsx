import React from "react";

interface SearchInputProps {
	value: string;
	placeholder?: string;
	className?: string;
	onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value = "", placeholder = "Search for a country", className, onChange }: SearchInputProps) {
	return (
		<input
			id="search-input"
			type="text"
			aria-label={placeholder}
			placeholder={placeholder}
			className={`bg-white min-h-14 w-full max-w-[480px] shadow-md py-4 px-7 rounded-md ${className}`}
			value={value}
			onChange={onChange}
		/>
	);
}

export default SearchInput;

