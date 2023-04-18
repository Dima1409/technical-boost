import React from "react";
import Phrases from "utils/phrases";
import Container from "components/Container/Container";
import { Text } from "./Home.styled";

const Home = () => {
  function getRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  const randomPhrase = getRandomPhrase(Phrases);

  return (
    <Container>
     
        <Text>{randomPhrase}</Text>
      
    </Container>
  );
};

export default Home;
