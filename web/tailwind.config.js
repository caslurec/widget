const tailwindcss = require("tailwindcss");

module.exports = {
    content: ["./src/**/*.tsx"],
    safelist: [
        {
            pattern: /brand-theme([0-9]?[0-9])/,
            variants: ["bg", "focus", "hover", "ring"],
        },
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                brand: {
                    theme0: "#f45656",
                    theme1: "#f44336",
                    theme2: "#e91e63",
                    theme3: "#9c27b0",
                    theme4: "#8257e5",
                    theme5: "#3f51b5",
                    theme6: "#2196f3",
                    theme7: "#03a9f4",
                    theme8: "#00bcd4",
                    theme9: "#006f85",
                    theme10: "#4caf50",
                    theme11: "#8bc34a",
                    theme12: "#cddc39",
                    theme13: "#edaf34",
                    theme14: "#ffc107",
                    theme15: "#ff9800",
                    theme16: "#ff5722",
                    theme17: "#795548",
                    theme18: "#607d8b",
                    theme19: "#585858",
                    theme20: "#191919",

                    text: "#FFFFFF",
                },
                dark: {
                    background: "#1f1f1f",
                    surface: {
                        primary: "#18181B",
                        secondary: "#27272A",
                        "secondary-hover": "#3F3F46",
                    },
                    text: {
                        primary: "#F4F4F5",
                        secondary: "#A1A1AA",
                    },
                    stroke: "#52525B",
                },
                light: {
                    background: "#fefefe",
                    surface: {
                        primary: "#FFFFFF",
                        secondary: "#F4F4F5",
                        "secondary-hover": "#E4E4E7",
                    },
                    text: {
                        primary: "#27272A",
                        secondary: "#71717A",
                    },
                    stroke: "#D4D4D8",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
        require("@tailwindcss/typography"),
    ],
};
