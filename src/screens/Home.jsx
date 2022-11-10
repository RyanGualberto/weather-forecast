import React from "react";
import { ScrollView, TouchableOpacity, FlatList } from "react-native";
import {
  Container,
  PageTitle,
  MainContainer,
  InfoContainer,
  InfoRow,
  TextRow,
} from "../styles/";

//components
import {
  WeatherCard,
  CityCard,
  MainCard,
  AdditionalsInfoCard,
} from "../components/Cards";

//utils
import axios from "axios";

const Home = ({ navigation }) => {
  const [showCity, setShowCity] = React.useState(false);
  const [dataCity, setDataCity] = React.useState({});
  const [currentWeather, setCurrentWeather] = React.useState("");

  const getWeather = async () => {
    await axios
      .get(
        `https://api.hgbrasil.com/weather?key=6885cc26&city_name=Mongaguá,SP`
      )
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
  }, []);

  return (
    <Container>
      <MainContainer>
        <PageTitle>Previsão Para Mongaguá</PageTitle>
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
            <CityCard city="Praia Grande, SP" navigation={navigation} />
            <CityCard city="Santos, SP" navigation={navigation} />
            <CityCard city="Rio de Janeiro, RJ" navigation={navigation} />
            <CityCard city="Gramado, RS" navigation={navigation} />
            <CityCard city="São Vicente, SP" navigation={navigation} />
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

export default Home;
