# Paradise Nursery React Shopping Application

Paradise Nursery is a front-end plant shopping application built with React and Redux Toolkit. Visitors can explore a catalogue of houseplants, add plants to a shopping cart, change quantities, and see their totals update as they shop.

It was developed as an assessment submission for the Developing Front-End Apps with React course within the IBM Full Stack Software Developer Professional Certificate on Coursera. Building on an incomplete skeleton code, I developed this into a full application to meet the course assessment requirements.

This repository is a shareable example of my learning from the course: turning a supplied starting point into an interactive interface, managing shared application state, and connecting user actions to consistent updates across components. Checkout is an assessment placeholder that displays “Coming soon”; the application does not process orders or payments.

You can find a live demonstration at https://paulalbinson.com/react-demos/react-shopping-app/.

## What the application does

The application presents three views within a single React application:

1. **Landing page:** introduces Paradise Nursery with a background image, company information, and a **Get Started** button that opens the catalogue.
2. **Product listing:** displays plant cards with images, names, descriptions, prices, and **Add to Cart** buttons. Once a plant is in the cart, its button is disabled and displays **Added to Cart**. Removing it from the cart makes it available to add again.
3. **Shopping cart:** shows each selected plant's image, name, unit price, quantity, and line total, together with the overall cart amount. Visitors can increase or decrease quantities, delete plants, continue shopping, or select the checkout placeholder.

The shared catalogue and cart header provides navigation through the nursery name (Home), **Plants**, and the cart icon. The icon shows the sum of all quantities, rather than just the number of different plant types. Decreasing a quantity from one removes that plant from the cart.

On narrow screens, the landing page stacks and scrolls as needed, the shop navigation stacks, and product cards adjust to the available width. On desktop, the landing page uses a side-by-side layout and the catalogue displays three cards per row.

The catalogue contains six entries in each of five categories: Air Purifying Plants, Aromatic Fragrant Plants, Insect Repellent Plants, Medicinal Plants, and Low Maintenance Plants. Some plants appear in more than one category; cart entries are matched by plant name, so those appearances share the same cart item.

## Skills demonstrated

- **Component composition and props:** separating the landing page, company information, catalogue, and cart, with callback props connecting navigation actions.
- **React hooks and conditional rendering:** using `useState` to control view visibility and rendering the catalogue or cart in response to user actions.
- **Rendering structured data:** using nested `map()` calls to generate categories and product cards from JavaScript objects.
- **Shared state with Redux Toolkit:** defining cart actions and reducers with `createSlice`, configuring a store, and making it available through React Redux's `Provider`.
- **Connecting components to state:** using `useSelector` and `useDispatch` so cart quantities, totals, and product buttons reflect the same cart contents.
- **Event handling and derived values:** responding to button clicks and calculating item counts, line totals, and the overall cart amount from state.
- **CSS and front-end tooling:** styling the interface with Flexbox, CSS Grid, media queries, and landing-page transitions. Vite 8 handles development and production builds, and ESLint 10 checks JavaScript and JSX.

## Run locally

Use Node.js 24 with npm for the Vite 8 and ESLint 10 toolchain.

Download or clone this repository, open a terminal in its root directory, and run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No API keys, environment variables, backend server, or database are required. Images are loaded from external URLs, so an internet connection is needed to display them.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Build the application into `dist/`. |
| `npm run preview` | Build and serve a local preview, using the configured `--host` option. |
| `npm run lint` | Run ESLint with warnings treated as failures. |

## Code structure

```text
src/
  main.jsx          React entry point and Redux Provider
  App.jsx           Landing page and top-level view visibility
  AboutUs.jsx       Nursery introduction
  ProductList.jsx   Plant data, catalogue, shared header, and cart navigation
  CartItem.jsx      Cart display, quantity controls, and totals
  CartSlice.jsx     Cart state and Redux actions
  store.js          Redux store configuration
  *.css             Application and component styling
vite.config.js      Vite configuration and deployment base path
eslint.config.js    ESLint flat configuration and React lint rules
```

Navigation uses component state and conditional rendering rather than URL routes. Cart state lives in memory: it remains available while moving between views, but refreshing the page resets it.

## Using and extending the code

This project is useful as a learning reference for React and Redux, a portfolio example of completing a specification from starter code, or a starting point for a small catalogue and cart prototype.

To adapt the catalogue, edit `plantsArray` in `src/ProductList.jsx`. Each category has a `category` label and a `plants` array; each plant supplies `name`, `image`, `description`, and `cost`. Prices currently use strings such as `"$15"`, which the cart converts into numbers for calculations. Keep names consistent because the cart uses them to identify products.

Possible extensions include moving catalogue data into a separate module or API, introducing stable product IDs and numeric prices, saving the cart between visits, adding search and filtering, and connecting checkout to an ordering service. Accessibility and testing across screen sizes would also be useful areas for further development.

## Scope and attribution

This is an educational front-end application. It has no authentication, persistent storage, stock management, order processing, or payment integration. Plant descriptions and prices are sample catalogue content.

The application builds on the assessment skeleton supplied through the IBM course. The repository includes the [Apache License 2.0](LICENSE), with an IBM Developer Skills Network copyright notice. Retain the required licence and attribution notices when reusing the code. Images are referenced from Pixabay and Unsplash; their usage terms should be checked separately when adapting or publishing the application.
