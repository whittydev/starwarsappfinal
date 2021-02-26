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
import tattooine from "../images/Tatooine.jpg";
import yavin from "../images/Yavin.jpg";
import alderaan from "../images/Alderaan.jpg";
import bespin from "../images/Bespin.jpg";
import coruscant from "../images/Coruscant.jpg";
import dagobah from "../images/Dagobah.jpg";
import endor from "../images/Endor.jpg";
import hoth from "../images/Hoth.jpg";
import kamino from "../images/Kamino.jpg";
import naboo from "../images/Naboo.jpg";
import * as Animatable from "react-native-animatable";

export default function Planets() {
  const [name, setName] = useState("");
  const [planetsResultsArray, setPlanetsResultsArray] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState();

  const submitHandler = () => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((planets) => {
        setPlanetsResultsArray(planets.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilm = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((film) => {
        setSelectedFilm(film);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formattedPlanets = planetsResultsArray.map((p) => {
    return {
      name: p.name,
      terrain: p.terrain,
      climate: p.climate,
      population: p.population,
      films: p.films,
    };
  });

  const getImageSrc = (planetName) => {
    switch (planetName) {
      case "Tatooine":
        return tattooine;
        break;
      case "Yavin IV":
        return yavin;
        break;
      case "Alderaan":
        return alderaan;
        break;
      case "Bespin":
        return bespin;
        break;
      case "Coruscant":
        return coruscant;
        break;
      case "Dagobah":
        return dagobah;
        break;
      case "Endor":
        return endor;
        break;
      case "Hoth":
        return hoth;
        break;
      case "Kamino":
        return kamino;
        break;
      case "Naboo":
        return naboo;
        break;
      default:
        return tattooine;
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={require("../images/home_background2.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.topText}>Planets</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.topText3}>Find your favorite planet</Text>
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

      {formattedPlanets.map((planet) => {
        let imageSource = getImageSrc(planet.name);

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
                <Text style={styles.nameHeader}>{planet.name}</Text>
              </Card.Title>
              <Text>
                <Text style={styles.key}>Climate: {planet.climate}</Text>
              </Text>
              <Text>
                <Text style={styles.key}>
                  Terrain: {planet.terrain} {planet.terrain}
                </Text>
              </Text>
              <Text>
                <Text style={styles.key}>Population: {planet.population}</Text>
              </Text>

              {planet.films.map((f, i) => {
                return (
                  <View style={styles.filmsButton}>
                    <Button
                      title={`Films appearing in #${i + 1}`}
                      onPress={() => getFilm(f)}
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
