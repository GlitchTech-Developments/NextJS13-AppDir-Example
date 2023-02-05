"use client";

const ThemeWrapper = (props: { children: React.ReactNode }) => {
  if (typeof window !== "undefined") {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.dataset["theme"] = "dark";
    } else {
      document.documentElement.dataset["theme"] = "light";
    }

    // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");

    return <div>{props.children}</div>;
  } else {
    return <div>{props.children}</div>;
  }
};

export default ThemeWrapper;
