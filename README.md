# Fake OS - Windows 98 Style Operating System Simulation

## Overview
Fake OS is a single-page web application designed to mimic the appearance and functionality of the classic Windows 98 operating system. It provides users with a nostalgic computing experience by replicating the iconic user interface and offering interactive applications such as a music player, calculator, and wallpaper changer.

## Features
1. **Windows 98 Design:**
   - The application faithfully recreates the look and feel of Windows 98, including the taskbar, start menu, icons, and modal windows, to evoke a sense of nostalgia for users familiar with the OS.

2. **Interactive Applications:**
   - Fake OS features three interactive applications accessible via clickable icons:
     - **Music Player:** Allows users to play audio files and control playback.
     - **Calculator:** Provides a simple calculator for performing basic arithmetic operations.
     - **Wallpaper Changer:** Enables users to change the background wallpaper of the simulated desktop by selecting from predefined options.

3. **Modular Structure:**
   - The project is organized into separate JavaScript modules for each application, promoting code modularity and maintainability.

4. **Technologies Used:**
   - Developed using HTML, CSS (SCSS), and JavaScript, making it compatible with modern web browsers and easy to deploy.

## Usage
1. **Accessing the Application:**
   - Open the `index.html` file in a web browser to launch the Fake OS simulation.

2. **Interacting with Applications:**
   - Click on the start button to access the menu options and navigate through the applications.
   - Click on the respective application icons to open the corresponding modal windows.
   - Interact with the modal interfaces to use the applications' features (e.g., play music, perform calculations, change wallpaper).

## File Structure
- `index.html`: HTML file containing the structure of the Fake OS application, including the taskbar, start menu, icons, and modals.
- `script.js`: JavaScript file containing the functionality and event listeners for the application, including modal interactions and start menu toggling.
- `calculator.js`: JavaScript module for the calculator application.
- `music-player.js`: JavaScript module for the music player application.
- `change-wallpaper.js`: JavaScript module for the wallpaper changer application.
- `style.css`: SCSS file containing the styles for the Fake OS application, including layout, colors, and animations.

