# AD312-Building-a-Global-Theme-Dark-Mode-Switcher
Define two theme objects (e.g., light with a white background and black text, and dark with a dark gray background and white text).

William Anderson

AD312

# 🌗 Global Theme Switcher (React Context API)

## 📌 Overview

This project is a simple React application that demonstrates how to use the **React Context API** to implement a global **Light/Dark theme switcher**.

Instead of passing props through multiple components, the theme state is managed globally using Context, allowing any component to access and update the theme easily.

---

## 🎯 Features

- Light / Dark mode toggle
- Global state management using Context API
- useContext hook for consuming theme data
- Dynamic styling based on theme
- Test cases (Normal + Edge cases)
- PASS / FAIL indicators for testing output

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS

---

## 📁 Project Structure

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── ThemeContext.jsx
├── testCases.js
└── components/
    └── ThemeSwitcher.jsx
```

---

How It Works

1. Theme Context
A global context is created using `createContext()` to store:

- Current theme (`light` or `dark`)
- Toggle function to switch themes
- Theme styles (background + text color)

---

2. Provider
`ThemeProvider` wraps the entire app in `main.jsx`, making theme data available globally.

---

3. Theme Switching
The `ThemeSwitcher` component:
- Reads current theme using `useContext`
- Toggles theme on button click
- Updates UI dynamically

---

4. Dynamic Styling
The app applies styles based on the current theme:

- Light Mode → white background, black text  
- Dark Mode → dark background, white text  

---

Test Cases

The application includes both **normal** and **edge** test cases.

---

Normal Test Cases

- Theme loads in Light Mode
- Dark Mode toggles successfully
- ThemeSwitcher button renders correctly

---

Edge Test Cases

- Null value handling
- Undefined value handling
- Empty string handling

---

PASS / FAIL System

Each test case returns:

- ✔ PASS → Test executed successfully
- ❌ FAIL → Test failed

This is displayed visually in the UI for demonstration purposes.

---

How to Run the Project

1. Install dependencies

npm install


2. Start development server

npm run dev


3. Open in browser

http://localhost:5174


---

What to Show in Video Submission

- Explain React Context API
- Show ThemeProvider setup
- Demonstrate useContext usage
- Toggle Light/Dark mode
- Show UI updates
- Display test cases (Normal + Edge)
- Explain PASS/FAIL results

---

Key Learning Outcome

This project demonstrates how React Context API helps eliminate prop drilling and enables efficient global state management in a scalable way.

---

Author: William Anderson

Student Project – React Context API Assignment
