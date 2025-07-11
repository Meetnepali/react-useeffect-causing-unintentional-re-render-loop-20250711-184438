# React Assessment: Prevent Unintentional Button Re-rendering

## Task Overview
A performance regression has been reported in this React application: every `Button` component re-renders on any state change throughout the app. This causes sluggish UI and high CPU usage, especially when typing in the input field. The `Button` component currently uses a `ThemeContext` for theming. Your goal is to fix this excessive re-rendering while maintaining theming functionality.

## Problem Statement
- All `Button` components re-render with every state change anywhere in the app
- This issue emerged after integrating a shared `Button` with standardized theming
- The application is noticeably slow, particularly when interacting with input fields
- Theming must remain functional after your fix

## Setup Instructions
1. Ensure you have Docker installed.
2. Run the following commands from the project root:
   ```sh
   chmod +x run.sh
   ./run.sh
   ```
3. The React app will be available at [http://localhost:3000](http://localhost:3000)

## What You Need To Do
- Investigate why the `Button` components re-render on every state change
- Implement a fix so that `Button` only re-renders when its relevant props or consumed theme values change, without breaking theming functionality
- Ensure input fields are responsive with no UI lag
- Confirm that theming (toggle between dark/light) still works as expected

## Expected Outcomes
- `Button` components only re-render when their relevant props or theme values change
- The application remains responsive during user input
- Theming functionality (theme toggle) works properly

## How To Verify The Solution Works
- Use React DevTools Profiler (or browser console) to confirm that Buttons do **not** re-render on unrelated state changes (e.g., typing in input fields)
- Interacting with the input field should be fast and smooth, regardless of theme
- Changing the theme should still correctly update all buttons with proper styling
