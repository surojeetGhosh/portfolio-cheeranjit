# Static Data Files

This directory contains all the static data used throughout the portfolio application. You can easily modify the content by editing these files without touching the component code.

## Files Overview

### `aboutData.ts`
Contains all the content for the About/Home page:
- Welcome heading and name
- Profile description
- About cards with professional background information

### `academicData.ts`
Contains all academic/education information:
- Education accomplishments heading
- List of degrees, institutions, and descriptions
- Logo references for institutions

### `experienceData.ts`
Contains all professional experience information:
- Professional background heading
- List of work experiences with descriptions
- Company details and time periods

### `skillsData.ts`
Contains all skills and certifications:
- Technical skills list
- Cognitive skills list
- Languages
- Projects and coursework
- Certificates

### `navigationData.ts`
Contains navigation and footer information:
- Menu items for navigation
- Footer copyright information
- Social media links

## How to Edit

1. **Text Content**: Simply modify the string values in any of the data files
2. **Add/Remove Items**: Add or remove items from arrays (skills, experiences, etc.)
3. **Update Links**: Modify social media links in `navigationData.ts`
4. **Change Headings**: Update section headings in respective data files

## Important Notes

- **Logo References**: In `academicData.ts`, logo filenames should match the actual files in `src/assets/`
- **String Escaping**: Use single quotes (') inside double-quoted strings to avoid TypeScript errors
- **Type Safety**: All data structures are typed with TypeScript interfaces for better development experience

## Example: Adding a New Skill

```typescript
// In skillsData.ts
technical: [
  "MS Office 360",
  "MS Access",
  "MS Project",
  "JIRA",
  "Tableau",
  "Auto Cad",
  "Construction Management",
  "Project Management",
  "MS Excel",
  "MS Word",
  "New Skill Here", // Add your new skill
],
```

## Example: Updating Contact Information

```typescript
// In navigationData.ts
social: [
  {
    type: "phone",
    value: "tel:226-966-0056", // Update phone number
  },
  {
    type: "email", 
    value: "mailto:your-email@example.com", // Update email
  },
  // ... other social links
],
```

After making changes, the application will automatically reflect the updates when you run `npm run dev` or build the project.
