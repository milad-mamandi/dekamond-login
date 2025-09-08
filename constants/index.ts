// API endpoints
export const API_ENDPOINTS = {
    RANDOM_USER: 'https://randomuser.me/api/?result=1&nat=us',
} as const;

// Application constants
export const APP_CONFIG = {
    DEFAULT_PASSWORD: '123456',
} as const;

export const navItems = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: '#' },
            { label: "Careers", ariaLabel: "About Careers", href: '#' }
        ]
    },
    {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: '#' },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: '#' }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: '#' },
            { label: "Twitter", ariaLabel: "Twitter", href: '#' },
            { label: "LinkedIn", ariaLabel: "LinkedIn", href: '#' }
        ]
    }
];