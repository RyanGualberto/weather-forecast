import React from "react";

// native components
import { ScrollView, TouchableOpacity, FlatList } from "react-native";

// styles
import {
  Container,
  PageTitle,
  PrincipalCard,
  PrincipalCardTitle,
  PrincipalCardText,
  MainContainer,
  InfoContainer,
  AditionalsInfoContainer,
  InfoRow,
  TextRow,
  InfoCol,
  TextSecondaryCol,
  TextCol,
} from "../styles/";

// icons
import Icon from "react-native-vector-icons/Ionicons";

// custom components
import {
  WeatherCard,
  CityCard,
  AdditionalsInfoCard,
  MainCard,
} from "../components/Cards";

// utils
import axios from "axios";

const City = ({ navigation, route }) => {
  const [showCity, setShowCity] = React.useState(false);
  const { city } = route.params;
  const [dataCity, setDataCity] = React.useState({});
  const [currentWeather, setCurrentWeather] = React.useState("");

  const getWeather = async () => {
    await axios
      .get(`https://api.hgbrasil.com/weather?key=b61cc859&city_name=${city}`)
      .then((response) => {
        setCurrentWeather(response.data?.results?.forecast[0]);
        setDataCity(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <Container>
      <MainContainer>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 35,
            left: 20,
            zIndex: 1,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={32} />
        </TouchableOpacity>

        <PageTitle>Previsão Para {city}</PageTitle>
        <MainCard
          description={dataCity?.description}
          temp={dataCity?.temp}
          date={dataCity?.date}
          time={dataCity?.time}
          currentWeather={currentWeather}
        />
      </MainContainer>
      <InfoContainer>
        <AdditionalsInfoCard
          humidity={dataCity?.humidity}
          time={dataCity?.time}
          wind_speedy={dataCity?.wind_speedy}
        />
        <InfoRow>
          <TextRow>{showCity ? "Outras Cidades" : "Próximos Dias"}</TextRow>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity onPress={() => setShowCity(!showCity)}>
            <TextRow>{showCity ? "Ver Outros Dias" : "Ver Cidades"}</TextRow>
          </TouchableOpacity>
        </InfoRow>
        {showCity ? (
          <ScrollView horizontal={true}>
            <CityCard
              active={city == "Praia Grande, SP"}
              city="Praia Grande, SP"
              navigation={navigation}
            />
            <CityCard
              active={city == "Santos, SP"}
              city="Santos, SP"
              navigation={navigation}
            />
            <CityCard
              active={city == "Rio de Janeiro, RJ"}
              city="Rio de Janeiro, RJ"
              navigation={navigation}
            />
            <CityCard
              active={city == "Gramado, RS"}
              city="Gramado, RS"
              navigation={navigation}
            />
            <CityCard
              active={city == "São Vicente, SP"}
              city="São Vicente, SP"
              navigation={navigation}
            />
          </ScrollView>
        ) : (
          <FlatList
            keyExtractor={(item) => item.date}
            data={dataCity?.forecast}
            renderItem={({ item }) => (
              <WeatherCard
                day={item.date}
                weekday={item.weekday}
                tempMax={item.max}
                tempMin={item.min}
                condition={item.condition}
              />
            )}
            horizontal={true}
          />
        )}
      </InfoContainer>
    </Container>
  );
};

export default City;
