# Car Search Website in ReactJS

This is a simple car search website built using ReactJS for desktop-only screens.

## Features

- Search for cars by name.
- Paginate through the list of cars.
- Display car cards in rows of 3, with a maximum of 6 cards per page.
- Fully functional pagination with next, previous, and page number buttons.
- 10 pages are displayed in the pagination, hardcoded.
- Uses mock data from a JSON file (API integration not required).

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Project Structure

- `src/components`: Contains React components.
- `src/data/cars.json`: JSON file with car data.
- `src/App.js`: Routing and component rendering.
- `public`: Public assets and HTML template.

## Folder Structure

```
car-rental-portal/
  ├── src/
  │   ├── components/
  │   │   ├── CarCard.js
  │   │   ├── Cars.js
  │   │   ├── Footer.js
  │   │   └── Header.js
  │   ├── data/
  │   │   └── cars.json
  │   ├── App.js
  │   ├── index.js
  │   ├── App.css
  │   └── ...
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── package.json
  ├── tailwind.config.js
  ├── README.md
  └── ...

```

## Usage

1. Upon starting the development server, open the website in your browser.
2. Use the search bar to search for cars by name.
3. Use the pagination to navigate through the list of cars.

## This is how the website looks like

![Header](./images/Task1.png)

![Footer](./images/Task2.png)
