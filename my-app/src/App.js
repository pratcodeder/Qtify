import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";

import "./App.css";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    }); 
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setSongs(data);
    });
    axios.get(`${ENDPOINT}genres`).then(({ data }) => {
      setGenres([{"key":"all", "label": "All"},...data.data]);
     
    }); 
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
      <FilterSection title="Songs" data={songs} filters={genres} />
    </div>
  );
}

export default App;
