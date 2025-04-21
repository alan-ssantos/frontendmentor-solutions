import { useEffect, useState } from "react";

function useThemeToggle() {
	const getPrefersColorScheme = () => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	};

	const getInitialTheme = () => {
		const storedTheme = window.localStorage.getItem("theme") as "light" | "dark";
		if (storedTheme) return storedTheme;

		return getPrefersColorScheme();
	};

	const [theme, setTheme] = useState<"light" | "dark">("light");

	const toggleTheme = (newTheme: "light" | "dark") => {
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme as "light" | "dark");
	};

	useEffect(() => {
		setTheme(getInitialTheme());
	}, []);

	return { theme, toggleTheme, getPrefersColorScheme };
}

export default useThemeToggle;

