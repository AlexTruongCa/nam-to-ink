# 13inktatoo Website

## Overview

13inktatoo is the official website of a tattoo artist, featuring a modern design and interactive elements to showcase the artist's portfolio and provide contact options.

## Website Structure

- **Navigation Bar:** Provides easy access to different sections of the website.
- **Hero Section:** A visually appealing introduction area to grab visitors' attention.
- **About Me Section:** Information about the tattoo artist, their background, and their artistic philosophy.
- **Portfolio Section:** Showcases the artist's latest works using the Instagram Basic Display API.
- **Contact Section:** Includes a request form for service inquiries and an embedded Google Map for location details.

## Key Features

### Portfolio Integration
- Utilizes the Instagram Basic Display API to fetch and display the 12 most recent media posts from the artist's Instagram account.
- Displays each post with its caption and the artist's Instagram username, with a clickable link to the Instagram profile.
- Media data is stored in a middleware and fetched only when needed using an auth token to minimize unnecessary API calls.

### Service Request Form
- Built using Web3Forms, allowing visitors to submit inquiries directly through the website.

### Embedded Google Map
- Provides easy access to the artist’s studio location.

### Internationalization
- Uses the i18next package to offer content translation, making the website accessible to a broader audience.

## Technologies Used

### Frontend
- Built with **React** and **Vite** for a fast and modern user experience.

### Backend
- Developed with **Express.js** to handle server-side operations.

### Hosting
- Both the client and server sides are hosted on **Netlify**, ensuring reliable and efficient deployment.
