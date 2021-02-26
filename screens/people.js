import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Luke from "../images/Luke.jpg";
import C3PO from "../images/C-3PO.jpg";
import R2D2 from "../images/R2-D2.jpg";
import DarthVader from "../images/Darth-Vader.jpg";
import Leia from "../images/Leia.jpg";
import Owen from "../images/Owen.jpg";
import Beru from "../images/Beru.png";
import R5D4 from "../images/R5-D4.jpg";
import Biggs from "../images/Biggs.jpg";
import ObiWan from "../images/Obi-Wan.jpg";
import * as Animatable from "react-native-animatable";

export default function People() {
  const [peopleResultsArray, setPeopleResultsArray] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState();

  const submitHandler = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((responseJson) => {
        setPeopleResultsArray(responseJson.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilm = (url) => {
    // i.e. https://swapi.dev/api/films/23
    fetch(url)
      .then((response) => response.json())
      .then((film) => {
        setSelectedFilm(film);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formattedPeople = peopleResultsArray.map((p) => {
    return {
      name: p.name,
      gender: p.gender,
      birth_year: p.birth_year,
      height: p.height,
      films: p.films,
    };
  });

  const getImageSrc = (peopleName) => {
    switch (peopleName) {
      case "Luke Skywalker":
        return Luke;
        break;
      case "C-3PO":
        return C3PO;
        break;
      case "R2-D2":
        return R2D2;
        break;
      case "Darth Vader":
        return DarthVader;
        break;
      case "Leia Organa":
        return Leia;
        break;
      case "Owen Lars":
        return Owen;
        break;
      case "Beru Whitesun lars":
        return Beru;
        break;
      case "R5-D4":
        return R5D4;
        break;
      case "Biggs Darklighter":
        return Biggs;
        break;
      case "Obi-Wan Kenobi":
        return ObiWan;
        break;
      default:
        return Luke;
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={require("../images/home_background2.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.topText}>Characters</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.topText3}>Find your favorite Character</Text>
        </View>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center" }}
        >
          <View style={styles.body}>
            <Button title="Get list" onPress={submitHandler} />
          </View>
        </Animatable.View>
      </ImageBackground>

      {selectedFilm && (
        <ImageBackground
          source={require("../images/home_background2.jpg")}
          style={styles.container}
        >
          <Animatable.View
            animation="fadeInDown"
            style={{ textAlign: "center" }}
          >
            <Card
              containerStyle={{ backgroundColor: "grey", borderRadius: 20 }}
            >
              <Card.Title style={styles.nameHeader2}>
                <Text>Appeared In:</Text>
              </Card.Title>
              <View style={styles.filmName}>
                <Text style={styles.innerFilm}>{selectedFilm.title}</Text>
              </View>
            </Card>
          </Animatable.View>
        </ImageBackground>
      )}

      {formattedPeople.map((person) => {
        let imageSource = getImageSrc(person.name);
        return (
          <Animatable.View animation="zoomInUp" style={styles.card}>
            <Card containerStyle={{ backgroundColor: "black", color: "white" }}>
              <Image
                source={imageSource}
                style={{
                  flex: 1,
                  width: 100,
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Card.Title>
                <Text style={styles.nameHeader}>{person.name}</Text>
              </Card.Title>
              <Text>
                <Text style={styles.key}>Gender: {person.gender} </Text>
              </Text>
              <Text>
                <Text style={styles.key}>Birth year: {person.birth_year}</Text>
              </Text>
              <Text>
                <Text style={styles.key}>
                  Height: {person.height} centimeters{" "}
                </Text>
              </Text>
              {/* person.films is an array of URLS */}
              {person.films.map((filmUrl, i) => {
                return (
                  <View style={styles.filmsButton}>
                    <Button
                      title={`Films appearing in #${i + 1}`}
                      onPress={() => getFilm(filmUrl)}
                      color="#ba6e9f"
                    />
                  </View>
                );
              })}
            </Card>
          </Animatable.View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",
  },
  body: {
    backgroundColor: "#ba6e9f",
    padding: 20,
    marginBottom: 50,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  topText: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
    color: "white",
    alignItems: "center",
  },
  topText3: {
    fontSize: 30,
    marginBottom: 100,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  characterName: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 5,
  },
  key: {
    fontWeight: "bold",
    color: "white",
  },
  nameHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
  nameHeader2: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
  },
  width: {
    width: 100,
  },
  scroll: {
    backgroundColor: "black",
    resizeMode: "stretch",
  },
  filmsButton: {
    color: "red",
    margin: 5,
  },
  card: {
    backgroundColor: "black",
  },
  selectedFilm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingBottom: 20,
    borderRadius: 50,
    elevation: 3,
    marginBottom: 10,
  },
  innerFilm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68316b",
    padding: 5,
    color: "white",
    borderRadius: 6,
    elevation: 3,
    fontWeight: "bold",
    margin: 5,
    fontSize: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  filmName: {
    alignItems: "center",
    justifyContent: "center",
  },
  selectFilm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
