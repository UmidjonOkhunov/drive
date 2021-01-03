import "./App.css";
import React from "react";
import Body from "./components/Body/Index";
import Header from "./components/Header/Index";
import SideBar from "./components/SideBar/Index";
import { Container } from "@material-ui/core";

const Welcome: React.FC = () => (
  <Container>
    <Header />
    <SideBar />
    <Body />
  </Container>
);

export default Welcome;
