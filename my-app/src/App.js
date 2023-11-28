import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";
import FAQAccordion from "./components/FAQAccordion"

import "./App.css";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
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
      setFilteredSongs(data)
    });
    axios.get(`${ENDPOINT}genres`).then(({ data }) => {
      setGenres([{"key":"all", "label": "All"},...data.data]);
     
    }); 
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section navId='ta' title="Top Albums" data={topAlbums} />
      <Section navId='na' title="New Albums" data={newAlbums} />
      <FilterSection title="Songs" data={filteredSongs} filters={genres} 
      executeFilter={(genre) => {
        if (genre === 'all') {
          setFilteredSongs(songs)
        } else {
          
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      }}
      />
      <FAQAccordion />
    </div>
  );
}

export default App;
