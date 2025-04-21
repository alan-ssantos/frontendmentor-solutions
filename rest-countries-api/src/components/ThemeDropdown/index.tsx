import { useEffect, useRef, useState } from "react";
import { PiMoonBold, PiSunBold, PiDesktopBold } from "react-icons/pi";
import useThemeToggle from "../../hooks/useThemeToggle";
import ThemeDropdownToggler from "./ThemeDropdownToggler";
import ThemeDropdownButton from "./ThemeDropdownButton";

function ThemeDropdown() {
	const themeDropdownRef = useRef<HTMLDivElement>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const { toggleTheme, getPrefersColorScheme, theme } = useThemeToggle();

	const toggleThemeDropdown = () => {
		if (themeDropdownRef.current) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	const handleThemeClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
		const dataTheme = currentTarget.getAttribute("data-theme-option");
		toggleTheme(dataTheme === "system" ? getPrefersColorScheme() : (dataTheme as "light" | "dark"));
	};

	const handleThemeKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
		if (themeDropdownRef.current && ev.key === "Escape" && isDropdownOpen) {
			toggleThemeDropdown();
		}
	};

	useEffect(() => {
		const handleClickOutside = (ev: MouseEvent) => {
			if (themeDropdownRef.current && !themeDropdownRef.current.contains(ev.target as Node) && isDropdownOpen) {
				toggleThemeDropdown();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isDropdownOpen]);

	return (
		<div className="relative" ref={themeDropdownRef}>
			<ThemeDropdownToggler theme={theme} onClick={toggleThemeDropdown} onKeyDown={handleThemeKeyDown} dropdownState={isDropdownOpen} />
			<ul
				id="theme-dropdown-list"
				className={`absolute top-full w-full mt-px rounded-sm shadow-lg bg-white dark:bg-gray-700 ${!isDropdownOpen && "sr-only"}`}
				aria-labelledby="theme-dropdown-button"
			>
				<li>
					<ThemeDropdownButton themeOption="light" Icon={PiSunBold} onClick={handleThemeClick} />
				</li>
				<li>
					<ThemeDropdownButton themeOption="dark" Icon={PiMoonBold} onClick={handleThemeClick} />
				</li>
				<li>
					<ThemeDropdownButton themeOption="system" Icon={PiDesktopBold} onClick={handleThemeClick} />
				</li>
			</ul>
		</div>
	);
}

export default ThemeDropdown;

