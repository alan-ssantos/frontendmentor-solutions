interface RegionDropdownProps {
	options: string[];
	onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
	placeholder?: string;
	className?: string;
}

const RegionDropdown = ({ options, onChange, placeholder = "Filter by Region", className }: RegionDropdownProps) => {
	return (
		<select
			aria-label={placeholder}
			id="select-region"
			defaultValue=""
			onChange={onChange}
			className={`min-h-14 w-full max-w-[200px] shadow-md py-4 pl-7 text-sm text-black/75 border-r-[1.5rem] border-transparent rounded-md bg-white dark:text-white/75 dark:bg-gray-700 ${className}`}
		>
			<option value="">{placeholder}</option>
			{options?.length > 0 ? (
				options.map((option, index) => (
					<option key={index} value={`${option}`}>
						{option}
					</option>
				))
			) : (
				<option disabled>No regions available</option>
			)}
		</select>
	);
};

export default RegionDropdown;

