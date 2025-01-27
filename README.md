# My Vue App

This is a single-page application built with Vue.js that demonstrates various features such as routing, state management, and component interaction.

## Project Structure

```
my-vue-app
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets
│   ├── components          # Vue components
│   │   ├── MyComponent.vue # Stateless component
│   │   └── AnotherComponent.vue # Stateful component
│   ├── router              # Vue Router configuration
│   │   └── index.js        # Routing setup
│   ├── store               # Pinia store configuration
│   │   └── index.js        # Store setup
│   ├── views               # View components
│   │   ├── Home.vue        # Homepage
│   │   ├── Page1.vue       # First page
│   │   ├── Page2.vue       # Second page
│   │   └── NotFound.vue     # 404 page
│   ├── App.vue             # Root component
│   └── main.js             # Entry point of the application
├── package.json            # NPM configuration
├── README.md               # Project documentation
└── vue.config.js           # Vue CLI configuration
```

## Getting Started

To set up the project, follow these steps:

1. **Create the project** using Vue CLI:
   ```
   vue create my-vue-app
   ```

2. **Navigate to the project directory**:
   ```
   cd my-vue-app
   ```

3. **Install the necessary packages**:
   ```
   npm install vue-router pinia
   ```

4. **Configure the router and store** as described in the project structure.

## Features

- **Routing**: The application supports multiple pages with bookmarkable URLs.
- **State Management**: Uses Pinia for managing application state.
- **Components**: Includes both stateless and stateful components.
- **Asynchronous Data Fetching**: Demonstrates how to fetch data asynchronously.
- **Scoped Styles**: Utilizes scoped styles in components.
- **Lifecycle Hooks**: Implements lifecycle hooks in components.
- **Dynamic Routing**: Includes a catch-all route for 404 pages.

## License

This project is licensed under the MIT License.