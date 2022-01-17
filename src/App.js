import React from "react";
import requests from "./requests";
import Row from "./Row";
import "./App.css";
import "./Banner.js";
import Banner from "./Banner.js";
import "./Nav.js";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NUMFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
