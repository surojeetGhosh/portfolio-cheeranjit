# Static Data Files

This directory contains all the static data used throughout the portfolio application. The data is now stored in simple JSON files that are easy to edit without any programming knowledge.

## 📁 Files Overview

### `aboutData.json`
Contains all the content for the About/Home page:
- Welcome heading and name
- Profile description
- About cards with professional background information

### `academicData.json`
Contains all academic/education information:
- Education accomplishments heading
- List of degrees, institutions, and descriptions
- Logo references for institutions

### `experienceData.json`
Contains all professional experience information:
- Professional background heading
- List of work experiences with descriptions
- Company details and time periods

### `skillsData.json`
Contains all skills and certifications:
- Technical skills list
- Cognitive skills list
- Languages
- Projects and coursework
- Certificates

### `navigationData.json`
Contains navigation and footer information:
- Menu items for navigation
- Footer copyright information
- Social media links

## 🎯 For Non-Programmers

**See `HOW_TO_EDIT.md` for a simple, step-by-step guide on how to edit these files!**

## 🔧 For Developers

### How to Edit

1. **Text Content**: Simply modify the string values in any of the JSON files
2. **Add/Remove Items**: Add or remove items from arrays (skills, experiences, etc.)
3. **Update Links**: Modify social media links in `navigationData.json`
4. **Change Headings**: Update section headings in respective data files

### Important Notes

- **Logo References**: In `academicData.json`, logo filenames should match the actual files in `src/assets/`
- **JSON Format**: Keep proper JSON syntax with quotes around strings and commas between items
- **File Structure**: Maintain the existing structure when adding new items

## Example: Adding a New Skill

```json
{
  "technical": [
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
    "New Skill Here"
  ]
}
```

## Example: Updating Contact Information

```json
{
  "social": [
    {
      "type": "phone",
      "value": "tel:226-966-0056"
    },
    {
      "type": "email", 
      "value": "mailto:your-email@example.com"
    }
  ]
}
```

## 🚀 After Making Changes

The application will automatically reflect the updates when you:
- Run `npm run dev` for development
- Build the project with `npm run build`

## 📚 Migration from TypeScript

The original TypeScript files (`*.ts`) have been converted to JSON files (`*.json`) for easier editing. The TypeScript files are no longer used and can be safely deleted.
