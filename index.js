// ! [blog] 
// ? https://dev.to/fromaline/deep-dive-into-react-codebase-ep3-reverse-engineer-the-most-famous-react-snippet-njj

// const App = <div>Hello world!</div>;
// const App = React.createElement("div", null, "Hello world!");

// ! [EXPORT] createElement -> packages/react/index.js

/* 
export {
  ...
  createElement,
  ...
} from './src/React';
*/
// ! [IMPL] createElement -> packages/react/src/React.js
/* 
const createElement = __DEV__ ? createElementWithValidation : createElementProd;
*/

// * [DEV_MODE]

// ? createElementWithValidation -> packages/react/src/ReactElementValidator.js

// ? createElementProd -> packages/react/src/ReactElement.js
/* 
    /// * createElementProd is just an alias for createElement
*/

const App = React.createElement("div", null, "Hello world!");


// * How ReactDOM.render works
// ! [EXPORT] render -> packages/react-dom/index.js
// ! [IMPL] render -> packages/react-dom/src/client/ReactDOMLegacy.js

// ? render is legacy method
// * createRoot is new method

ReactDOM.render(App, document.getElementById("root"));
