import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Section from "./components/Section";
import "./App.css";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
