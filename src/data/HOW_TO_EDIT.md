# 📝 How to Edit Your Portfolio Content

**No programming knowledge required!** This guide will help you easily update your portfolio content.

## 🎯 What You Need
- A text editor (like Notepad, TextEdit, or any simple editor)
- Basic understanding of text editing

## 📁 Files You Can Edit

### 1. **aboutData.json** - Home Page Content
Edit your name, welcome message, and about information.

### 2. **academicData.json** - Education Information  
Update your degrees, schools, and education details.

### 3. **experienceData.json** - Work Experience
Modify your job history, positions, and work descriptions.

### 4. **skillsData.json** - Skills & Certifications
Update your technical skills, languages, and certificates.

### 5. **navigationData.json** - Contact & Menu
Change your contact information and menu items.

## ✏️ How to Edit

### Step 1: Open the File
1. Go to the `src/data/` folder
2. Open the JSON file you want to edit (double-click it)
3. It will open in your default text editor

### Step 2: Make Your Changes
- **Text**: Simply replace the text between the quotes `"your text here"`
- **Numbers**: Change numbers directly (like years: `2025`)
- **Lists**: Add or remove items from lists

### Step 3: Save the File
- Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
- Close the file

## 📋 Important Rules

### ✅ DO:
- Keep the quotes `"` around text
- Use commas `,` between items in lists
- Keep the structure the same
- Save the file after editing

### ❌ DON'T:
- Remove quotes around text
- Remove commas between items
- Change the file structure
- Add extra characters or symbols

## 🔧 Common Edits

### Changing Your Name
```json
"name": "YOUR NEW NAME HERE"
```

### Adding a New Skill
```json
"technical": [
  "MS Office 360",
  "MS Access",
  "Your New Skill Here"
]
```

### Updating Contact Information
```json
"value": "tel:123-456-7890"
```

### Adding Work Experience
```json
{
  "year": "2024 - Present",
  "position": "Your New Position",
  "company": "Your Company Name",
  "address": "City, State, Country",
  "description": [
    "Your first responsibility",
    "Your second responsibility"
  ]
}
```

## 🚨 If Something Goes Wrong

1. **Don't panic!** 
2. **Don't save** if you see errors
3. **Close the file** without saving
4. **Open it again** and try a smaller change
5. **Ask for help** if needed

## 📞 Need Help?

If you're unsure about making changes:
1. Make a backup copy of the file first
2. Start with small changes
3. Test one change at a time
4. Ask someone technical to help if needed

## 🎉 After Editing

1. Save your changes
2. The website will automatically update
3. Refresh your browser to see changes
4. If you don't see changes, try clearing your browser cache

---

**Remember**: JSON files are just text files with a specific format. As long as you keep the structure and use quotes around text, you'll be fine!
