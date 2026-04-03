# Hostel Room Directory - Smart Room Finder

A modern, responsive web application for students to find and book hostel rooms. Features include user authentication, room search/filtering, smart room recommendations, and a detailed room viewing experience.

## Features

### Authentication

- **User Registration**: Sign up with first name, last name, email, and 9-digit matric number
- **User Login**: Secure login with email and password
- **Session Persistence**: Stay logged in across page refreshes
- **Sign Out**: Easy logout functionality

### Room Management

- **Room Listings**: View all available rooms with detailed information
- **Search**: Search rooms by room number, block, or description
- **Filters**:
  - Block (A, B, C, D)
  - Occupancy Status (Available, Occupied, Maintenance)
  - Capacity (Single, Double, Triple, Quad)
  - Price Range (up to ₦200,000)
- **Room Details**: View comprehensive room information in a modal

### Smart Room Finder

- **AI-Powered Recommendations**: Get personalized room suggestions based on your preferences
- **Preference Settings**:
  - Budget range
  - Room type
  - Environment (Quiet/Social)
  - Amenities (A/C, WiFi, Attached Bath, Balcony)
- **Match Scoring**: See how well each room matches your criteria (0-100%)

### User Experience

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Slide-in Notifications**: Non-intrusive notifications for all actions
- **Hover Tooltips**: Get additional information by hovering over amenities
- **Color-coded Status**: Visual indicators for room availability

## Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **LocalStorage**: Client-side data persistence for users and sessions
- **Google Fonts**: Inter font family for modern typography

## Color Scheme

| Color            | Hex Code  | Usage                           |
| ---------------- | --------- | ------------------------------- |
| Primary Blue     | `#1982C4` | Main actions, headers, links    |
| Secondary Purple | `#6A4C93` | Gradients, accents              |
| Accent Green     | `#8AC926` | Success states, available rooms |
| Accent Red       | `#FF595E` | Errors, occupied rooms          |
| Accent Yellow    | `#FFCA3A` | Warnings, maintenance rooms     |

## Project Structure

```
FIP-Project/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This documentation file
└── PRESENTATION.pdf    # Presentation slides (link below)
```

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **Sign up** for a new account (requires 9-digit matric number)
4. **Login** with your credentials
5. **Browse rooms** using search and filters
6. **Use Smart Room Finder** for personalized recommendations

## Usage Guide

### Signing Up

1. Click on "Sign Up" tab
2. Fill in your first name, last name, email
3. Enter your 9-digit matric number (numbers only)
4. Create a password (minimum 6 characters)
5. Confirm your password
6. Click "Sign Up"

### Finding a Room

1. Use the search bar to search by room number or block
2. Apply filters using the dropdown menus
3. Click on any room card to view details
4. Use the "Smart Room Finder" section for AI recommendations

### Smart Room Finder

1. Expand the "Smart Room Finder" section
2. Set your budget using the slider
3. Select your preferred room type
4. Choose environment preference (Quiet/Social)
5. Select desired amenities
6. Click "Find My Room" to get recommendations

## Security Notes

- This is a demonstration project using client-side storage
- Passwords are stored using simple encoding (not production-ready)
- For production use, implement proper backend authentication and database

---

## Presentation Slides

View the complete presentation slides covering project details, features, and technologies:

- [View the presentation slides](https://mlgeepee.github.io/FIP-Project/viewer.html?file=Hostel-Room-Directory.pdf)

The presentation includes:

- Project Overview
- Features Breakdown
- Technical Architecture
- UI/UX Design
- Future Enhancements

## Color Palette

- [View the full color palette on Coolors](https://coolors.co/palette/ff595e-ffca3a-8ac926-1982c4-6a4c93)
