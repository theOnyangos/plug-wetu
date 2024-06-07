# Plug Wetu Application

Plug-wetu is an innovative fusion dealer's application designed to streamline the showcasing process for dealers and enhance the shopping experience for clients.

Dealers can effortlessly display their extensive catalog of fusion wares, presenting them to clients for marketing purposes. Through the app, clients gain access to a diverse array of fusion products, enabling them to browse, evaluate, and make informed decisions about potential purchases.

With Plug-wetu, the purchasing journey becomes intuitive and seamless, empowering clients to explore options and engage with dealers with ease

## Installation

To run this application locally, follow these steps:

1. **Clone the Repository**: 
    ```
    git clone https://github.com/theOnyangos/plug-wetu.git
    ```

2. **Navigate to the Project Directory**: 
    ```
    cd plug-wetu
    ```

3. **Install Dependencies**: 
    ```
    npm install
    ```

## Running the Application

Once you have installed the dependencies, you can start the development server by running: `npm run dev`


This command will start the development server and open the application in your default web browser. If it doesn't open automatically, you can visit [http://localhost:3000](http://localhost:3000) in your browser.

## Building the Application for Production

To build the application for production deployment, run: `npm run build`


This will create a production build of your application in the `build` directory.

## Running the Production Build Locally

To run the production build of your application locally, you can use the `serve` package. If you haven't already installed `serve`, you can do so by running: `npm install -g serve`

Once installed, navigate to the `build` directory of your project and run: `serve -s build`

This will start a server and serve the production build of your application. You can access it at [http://localhost:5000](http://localhost:5000) by default.

## Additional Scripts

In addition to the `start` and `build` scripts mentioned above, there are other scripts available in this project:

- **Test**: `npm test`
  Run the test suites in the project.

- **Eject**: `npm run eject`
  Ejects the app from Create React App, allowing you to have full control over the configuration files and dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


