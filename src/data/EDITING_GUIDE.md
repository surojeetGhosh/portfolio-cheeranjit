# 🎨 Portfolio Content Editing Guide

## 🎯 Quick Start

**You can now edit your portfolio content easily!** All the text, information, and data are stored in simple JSON files that anyone can edit.

## 📁 What Files to Edit

| File | What It Controls |
|------|------------------|
| `aboutData.json` | Home page - your name, welcome message, about cards |
| `academicData.json` | Education page - degrees, schools, descriptions |
| `experienceData.json` | Experience page - work history, job descriptions |
| `skillsData.json` | Skills page - technical skills, languages, certificates |
| `navigationData.json` | Contact info, menu items, social media links |

## ✏️ How to Edit (Step by Step)

### 1. Find the File
- Go to the `src/data/` folder
- Find the JSON file you want to edit

### 2. Open the File
- Double-click the file
- It will open in your text editor (Notepad, TextEdit, etc.)

### 3. Make Changes
- **Change text**: Replace text between quotes `"like this"`
- **Add items**: Copy an existing item and modify it
- **Remove items**: Delete the entire item (including the comma)

### 4. Save
- Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
- Close the file

## 🔧 Common Changes

### Change Your Name
In `aboutData.json`:
```json
"name": "YOUR NEW NAME"
```

### Update Phone Number
In `navigationData.json`:
```json
"value": "tel:123-456-7890"
```

### Add a New Skill
In `skillsData.json`:
```json
"technical": [
  "MS Office 360",
  "MS Access",
  "Your New Skill"
]
```

### Add Work Experience
In `experienceData.json`:
```json
{
  "year": "2024 - Present",
  "position": "Your Job Title",
  "company": "Company Name",
  "address": "City, State, Country",
  "description": [
    "First responsibility",
    "Second responsibility"
  ]
}
```

## ⚠️ Important Rules

### ✅ Always Do:
- Keep quotes `"` around text
- Use commas `,` between items
- Save the file after editing
- Make one change at a time

### ❌ Never Do:
- Remove quotes around text
- Remove commas between items
- Change the file structure
- Add extra symbols or characters

## 🚨 If You Make a Mistake

1. **Don't save** if you see errors
2. **Close the file** without saving
3. **Open it again** and try a smaller change
4. **Ask for help** if needed

## 🎉 See Your Changes

1. Save your changes
2. Refresh your browser
3. Your changes should appear immediately

## 📞 Need Help?

- Start with small changes
- Make a backup copy first
- Ask someone technical to help if needed
- Check the `HOW_TO_EDIT.md` file for more details

---

**Remember**: These are just text files with a specific format. Keep the structure, use quotes around text, and you'll be fine!
