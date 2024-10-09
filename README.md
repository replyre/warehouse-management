

# Warehouse Management Application

## Overview

This project is a React-based two-page application for managing warehouses. It includes features for listing, searching, filtering, and editing warehouse information. The application uses Redux for state management, React Router for navigation, and Ant Design for the UI components. The project aims to provide an optimized, modular, and user-friendly experience.

## Features

### Page 1: Warehouse Listing
![image](https://github.com/user-attachments/assets/484b03fe-828b-41ad-9403-97c27ec0706e)

- **Search**: Users can search warehouses by name.
- **Filter**: Users can filter warehouses based on:
  - City
  - Cluster
  - Space available limit
- **Warehouse List**: Displays a list of warehouses from a JSON dataset in a highly modular and efficient format.

### Page 2: Warehouse Details & Editing
![image](https://github.com/user-attachments/assets/e2ff2c3b-3749-4c8d-9f09-ffc9b436075a)

- **View Details**: Clicking on a warehouse in the listing redirects to its detailed page.
- **Edit Functionality**: Users can edit the warehouse’s:
  - Name
  - City
  - Cluster
  - Space available
  - Live status
- **Custom Fields**: Users can add custom fields to each warehouse.

## Tech Stack

- **ReactJS**: Frontend framework for building the UI.
- **Redux**: State management to handle data efficiently across the app.
- **React Router**: For seamless navigation between listing and details pages.
- **Ant Design**: UI framework for a responsive and elegant user interface.
- **HTML5 & CSS**: For layout and styling following basic web conventions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/warehouse-management.git
   cd warehouse-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## State Management

The application uses Redux for global state management. The warehouse data is stored in the Redux store, and efficient state handling is achieved using a redux map to optimize store calls.

### Reducers and Actions
- **warehouseReducer**: Manages the warehouse data including fetching, filtering, and updating details.
- **actions**: Includes actions for loading the dataset, updating warehouse details, and managing filters and custom fields.

## Routing

React Router is used to handle navigation between pages:
- **/**: Lists all the warehouses (Homepage).
- **/warehouses/:id**: Displays the details of a selected warehouse and allows editing.

## UI Components

The application makes use of **Ant Design** components for creating forms, tables, and modals, ensuring a responsive and interactive user experience.

## Dataset

The warehouse data is loaded from a JSON file (`warehouses.json`). The dataset includes fields such as:
- `name`
- `code`
- `city`
- `space available`
- `cluster`
- `is_registered`
- `is_live`

## Optimization

- Redux is used for efficient data handling, with selective re-rendering and redux maps to minimize unnecessary state changes.
- Ant Design tables are used for optimized display and sorting of large datasets.
