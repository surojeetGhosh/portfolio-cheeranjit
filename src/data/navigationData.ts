export interface SocialLink {
  type: string;
  value: string;
}

export interface FooterData {
  "copyright-year": number;
  "copyright-org": string;
  social: SocialLink[];
}

export interface NavigationData {
  "menu-item": string[];
  footer: FooterData;
}

export const navigationData: NavigationData = {
  "menu-item": ["ABOUT", "ACADEMIC", "EXPERIENCE", "SKILLS"],
  footer: {
    "copyright-year": 2025,
    "copyright-org": "Cheeranjit Ghosh",
    social: [
      {
        type: "phone",
        value: "tel:226-966-0056",
      },
      {
        type: "email",
        value: "mailto:cheeranjitghosh@gmail.com",
      },
      {
        type: "discord",
        value: "https://discord.com/users/cheeranjitghosh",
      },
      {
        type: "linkedin",
        value: "https://www.linkedin.com/in/cheeranjit-ghosh",
      },
    ],
  },
};
