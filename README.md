# Weather App API Proxy Server

This repository contains the code for a simple API proxy server designed to serve a weather app. The server, built with Express.js, handles requests to a weather API, caches responses, and serves static files for the frontend.

## Project Structure

- `package-lock.json` & `package.json`: Node.js package configuration files specifying project dependencies.
- `public/`: Directory containing the frontend files.
  - `index.html`: HTML file for the weather app's interface.
  - `main.js`: JavaScript file handling frontend logic and API requests.
  - `style.css`: CSS file for styling the frontend.
- `routes/`: Directory containing route definitions.
  - `index.js`: Express.js route for handling API requests.

## Server Setup

The server is configured with CORS support, rate limiting to prevent abuse, and environment variable management.

### Key Features:

- **Rate Limiting**: Configured to limit the number of requests to prevent abuse of the service.
- **CORS**: Cross-Origin Resource Sharing enabled to allow requests from different origins.
- **Static File Serving**: Serves the frontend files located in the `public` directory.
- **Environment Variables**: Uses `dotenv` for managing environment variables.

## API Route

The `/api` route in `routes/index.js` is responsible for proxying requests to the actual weather API. It uses `needle` for HTTP requests and `apicache` for caching responses.

### Key Functionalities:

- **URL Query Parameters Handling**: Appends API key and other query parameters to the request.
- **Caching**: Responses are cached for 2 minutes to reduce load on the weather API.
- **Error Handling**: Proper error responses are sent back if the API request fails.

## Frontend

Located in the `public` directory, the frontend is a simple HTML/CSS/JS setup.

- The `index.html` file sets up the basic structure of the weather app.
- `main.js` handles the interaction with the backend, including fetching weather data and updating the DOM.
- `style.css` provides basic styling for the app.

## Running the Server

1. Install dependencies:
   `npm install`
2. Start the server:
   `npm start`

The server will run on `localhost:3000` by default, unless a different port is specified in the environment variables.

## Deployment

For detailed instructions on hosting a RESTful API on Vercel, refer to this [guide](https://dev.to/zenstack/how-to-host-a-restful-api-on-vercel-3bk7).

---

This README provides a high-level overview of the project. For more detailed information, refer to comments within the codebase.
