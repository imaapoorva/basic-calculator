# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Purpose of the Project

The Basic Calculator is a React-based application designed to provide a user-friendly interface for performing basic arithmetic operations. The goal of this project is to implement a functional calculator that handles real-world edge cases and provides a seamless experience to users.

Key objectives include:

Performing arithmetic operations such as addition, subtraction, multiplication, division, and modulus.

Handling invalid input scenarios gracefully.

Providing real-time feedback and error messages for incorrect sequences.

Core Features

Basic Arithmetic Operations

Addition (+)

Subtraction (-)

Multiplication (*)

Division (/)

Modulus (%)

Real-Time Expression Display

Shows the full expression being typed, improving user clarity.

Error Handling

Division by zero displays "Cannot divide by zero" and resets automatically.

Invalid operator sequences (e.g., 9 + *) display "Invalid Input" and reset after 2 seconds.

Length Validation

Limits input length to prevent overflow in the display.

Decimal Support

Prevents multiple decimal points in a single number.

Keyboard Support

Users can interact with the calculator using keyboard inputs.

Additional Features

Backspace Functionality

Users can delete the last entered character or operator.

Chained Calculations

Allows continuous calculations without clearing the display (e.g., 2 + 3 * 4 results in 14).

Dynamic Error Recovery

Automatically resets to an operable state after errors.

Instructions to Run the Calculator

1.Clone the Repository
  git clone https://github.com/your-username/basic-calculator.git
  cd basic-calculator

2.Install Dependencies
  npm install

3.Start the Development Server
  npm start

4.Access the Application

Open your browser and navigate to http://localhost:3000.

5.Usage

Click on the buttons to enter numbers and operators.

Press = to calculate the result.

Use C to clear the display or ← (backspace) to delete the last character.

Use your keyboard for input as well (numbers, operators, Enter, and Backspace supported).

Challenges Faced

Handling Invalid Input Scenarios

Ensuring that sequences like 7 + * or 9 / / display appropriate errors and reset gracefully.

Error Recovery

Implementing a system to automatically recover from invalid states without requiring user intervention.

Chained Operations

Managing the state of operands and operators to support continuous calculations without requiring manual clears.

Display Overflow

Limiting the length of both numbers and expressions to ensure the UI remains visually intact.

Keyboard Support

Adding event listeners for keyboard interactions while avoiding conflicts with existing UI button functionality.

Future Enhancements

Add scientific calculator functionalities (e.g., trigonometric operations, exponents).

Implement a history feature to track previous calculations.

Add themes and customization options.

Provide localization support for different languages.