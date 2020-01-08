import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import style from "styled-components";

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const GlobalStyle = style.div`
font: 14px Helvetica Neue,Helvetica,Arial,sans-serif;
line-height: 1.4em;
`

render(
  <Provider store={store}>
    <GlobalStyle>
    <App />
    </GlobalStyle>
  </Provider>,
  document.getElementById("root")
);
