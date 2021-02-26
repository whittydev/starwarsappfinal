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
import ATST from "../images/AT-ST.jpg";
import CloudCar from "../images/Cloud-Car.png";
import LandSpeeder from "../images/Landspeeder.jpg";
import SailBarge from "../images/Sail-Barge.png";
import SandCrawler from "../images/sandcrawler.jpg";
import SnowSpeeder from "../images/Snowspeeder.jpg";
import T16 from "../images/T-16.jpg";
import TieBomber from "../images/TIE_Bomber.jpg";
import TieFighter from "../images/Tie-Fighter.png";
import ATAT from "../images/ATAT.jpg";
import * as Animatable from "react-native-animatable";

export default function Vehicles() {
  const [name, setName] = useState("");
  const [vehiclesResultsArray, setVehiclesResultsArray] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState();

  const submitHandler = () => {
    fetch("https://swapi.dev/api/vehicles")
      .then((response) => response.json())
      .then((vehicles) => {
        setVehiclesResultsArray(vehicles.results);
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

  const formattedVehicles = vehiclesResultsArray.map((p) => {
    return {
      name: p.name,
      model: p.model,
      passengers: p.passengers,
      length: p.length,
      films: p.films,
    };
  });

  const getImageSrc = (vehicleName) => {
    switch (vehicleName) {
      case "Sand Crawler":
        return SandCrawler;
        break;
      case "T-16 skyhopper":
        return T16;
        break;
      case "X-34 landspeeder":
        return LandSpeeder;
        break;
      case "TIE/LN starfighter":
        return TieFighter;
        break;
      case "Snowspeeder":
        return SnowSpeeder;
        break;
      case "TIE bomber":
        return TieBomber;
        break;
      case "AT-AT":
        return ATAT;
        break;
      case "AT-ST":
        return ATST;
        break;
      case "Storm IV Twin-Pod cloud car":
        return CloudCar;
        break;
      case "Sail barge":
        return SailBarge;
        break;
      default:
        return SailBarge;
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={require("../images/home_background2.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.topText}>Vehicles</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.topText3}>Find your favorite vehicle</Text>
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

      {formattedVehicles.map((vehicle) => {
        let imageSource = getImageSrc(vehicle.name);
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
                <Text style={styles.nameHeader}>{vehicle.name}</Text>
              </Card.Title>
              <Text>
                <Text style={styles.key}>Model: {vehicle.model}</Text>
              </Text>
              <Text>
                <Text style={styles.key}>Passengers: {vehicle.passengers}</Text>
              </Text>
              <Text>
                <Text style={styles.key}>Length: {vehicle.length} meters</Text>
              </Text>
              {vehicle.films.map((f, i) => {
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
