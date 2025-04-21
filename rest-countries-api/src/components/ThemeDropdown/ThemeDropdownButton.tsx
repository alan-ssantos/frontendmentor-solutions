interface ThemeDropdownButtonProps {
	themeOption: "light" | "dark" | "system";
	Icon: React.ElementType;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeDropdownButton = ({ themeOption, Icon, onClick }: ThemeDropdownButtonProps) => {
	return (
		<button type="button" data-theme-option={themeOption} onClick={onClick} className="dropdown-button w-full">
			<Icon className="text-base" />
			<span className="first-letter:uppercase">{themeOption}</span>
		</button>
	);
};

export default ThemeDropdownButton;

