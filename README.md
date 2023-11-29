# Dummy E-Commerce
An application that primarily operate as e-commerce website made with React(Hooks). It includes shop, individual products, and cart page.

Click [here]([https://dapper-pastelito-04ff24.netlify.app](https://sayanpalfakeapi.netlify.app/)) to access live demo.

## APIs
- [DummyJSON - Fake REST API of JSON data for development](https://dummyjson.com/)



### Dependencies used
- React Flip Move
- Redux State Management
- Styled Components
- React Testing Libraries
- Filteration Method
- Sorting the data
- React Lazy Load Image Component
- Semantic UI React


##-----------##

## Introduction
Welcome to our E-commerce React App documentation! This project focuses on building a robust and efficient e-commerce application utilizing React, TypeScript, Redux, and Tailwind CSS. The app fetches product details from the dummy JavaScript API and offers advanced functionalities such as pagination, sorting, filtering, and a simulated checkout process.

## API Endpoint
The app utilizes the Escuela JavaScript API endpoint ([https://dummyjson.com/]) to fetch product details. It fetches information for at least 20 items to populate the app with relevant data.

## React App Setup
The application is built using React and TypeScript for enhanced type safety and code clarity. Redux is employed for efficient state management, ensuring a seamless user experience.

## Styling
Tailwind CSS, Semantic Ui,  is used for styling components and layout design. Its utility-first approach allows for quick and scalable styling adjustments, ensuring a clean and modern UI.
## Pages and Functionalities
#Product List Page
The Product List Page is designed to efficiently handle a larger number of items. Advanced functionalities incorporated include:

#Pagination or Infinite Scroll: Enhances user experience by managing the display of a large number of products in a manageable way.
#Sorting and Filtering Options: Users can sort products by price, category, etc., for a personalized shopping experience.
##Add-to-Cart Page
#The Add-to-Cart Page facilitates a smooth checkout process:

Checkout Flow Simulation: Users can view a summary of items in their cart and proceed with a checkout simulation.
Persistence of Cart Data: Utilizes local storage or session storage to retain cart data even after a page refresh, ensuring a seamless shopping experience.

## Router DOM Implementation
Router DOM is implemented to facilitate seamless navigation between pages, enabling users to move effortlessly between the Product List and Add-to-Cart Pages.

## Setup Instructions
To run this project locally, follow these steps:

##Clone the repository.
Install dependencies using npm install.
Start the development server using npm start
- src
  - components      // Reusable React components used throughout the application.
  - hooks           // Custom React hooks for managing logic and state within components.
  - redux           // Redux store setup, actions, and reducers for state management.
  - route           // Routing configuration and management using Router DOM.
  - views           // Components representing different views/pages of the application.
  - semantic-ui     // Integration and customization of Semantic UI components.
  - themes          // Styling themes and configurations for consistent UI design.
  - util            // Utility functions and helper methods used across the project.
##How to Use
#Explore the different functionalities of the app:

#Browse through the Product List, utilizing sorting and filtering options.
#Add items to the cart and proceed to the checkout flow simulation.
