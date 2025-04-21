import React from "react";
import { PiMoonBold, PiSunBold, PiDesktopBold } from "react-icons/pi";

interface ThemeDropdownTogglerProps {
	theme: "light" | "dark";
	dropdownState: boolean;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
	onKeyDown: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
}

function ThemeDropdownToggler({ theme, dropdownState, onClick, onKeyDown }: ThemeDropdownTogglerProps) {
	return (
		<button
			id="theme-dropdown-button"
			onClick={onClick}
			onKeyDown={onKeyDown}
			type="button"
			className="dropdown-button"
      aria-controls="theme-dropdown-list"
			aria-expanded={dropdownState}
		>
			{theme && theme === "dark" ? (
				<PiMoonBold className="text-base" />
			) : theme === "light" ? (
				<PiSunBold className="text-base" />
			) : (
				<PiDesktopBold className="text-base" />
			)}
			<span className="first-letter:uppercase">{theme} Mode</span>
		</button>
	);
}

export default ThemeDropdownToggler;

