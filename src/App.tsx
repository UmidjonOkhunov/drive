import "./App.css";
import React from "react";
import Body from "./components/Body/Index";
import Header from "./components/Header/Index";
import SideBar from "./components/SideBar/Index";
import { Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontSize: 11.5,
    fontFamily: [
      "Roboto",
      "RobotoDraft",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <SideBar />
      <Body />
    </Container>
  </ThemeProvider>
);

export default App;
