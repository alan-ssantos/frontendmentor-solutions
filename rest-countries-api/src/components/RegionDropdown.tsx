interface RegionDropdownProps {
	options: string[];
	onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
	placeholder?: string;
	className?: string;
}

const RegionDropdown = ({ options, onChange, placeholder = "Select by region", className }: RegionDropdownProps) => {
	return (
		<select
			aria-label={placeholder}
			id="select-region"
			defaultValue=""
			onChange={onChange}
			className={`bg-white min-h-14 w-full max-w-[200px] shadow-md py-4 px-7 rounded-md ${className}`}
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

