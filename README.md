# Minesweeper

Classic Minesweeper game built with vanilla JavaScript, HTML and CSS.

The project recreates the core Minesweeper experience: selecting a difficulty level, uncovering cells, flagging possible mines, tracking time and ending the game with a win or loss state.

## Screenshot

Add a screenshot here after the visual refresh.

## Features

- Three difficulty levels: Easy, Normal and Expert
- Random mine placement
- Recursive reveal for empty cells
- Mine counter with flag support
- Timer
- Reset button with game state feedback
- Win and loss modal

## Tech Stack

- HTML5
- CSS3
- JavaScript ES Modules
- lite-server for local development

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm start
```

The app will be served by `lite-server` and opened in the browser.

## Project Structure

```text
assets/      Icons, font and SVG sprites
css/         Application styles
js/          Game logic split into ES modules
index.html   Main HTML file
```

## Recent Improvements

- Fixed case-sensitive module imports
- Corrected random mine placement
- Prevented already revealed cells from being counted again
- Simplified timer updates
- Cleaned up project metadata and ignore rules

## Next Steps

- Improve responsive layout for smaller screens
- Add a polished visual theme while keeping the classic Minesweeper feel
- Add a project screenshot
- Consider first-click safety
