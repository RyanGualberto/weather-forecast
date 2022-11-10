import React from "react";
import {
  SecondaryCard,
  TempSecondaryCard,
  TextDayCard,
  PrincipalCard,
  PrincipalCardText,
  PrincipalCardTitle,
  AditionalsInfoContainer,
  InfoCol,
  TextCol,
  TextSecondaryCol,
  DateCard,
} from "../styles";

import Icon from "react-native-vector-icons/Ionicons";

import { getIcon } from "../utils/getIconTemp";

export const MainCard = ({ description, temp, currentWeather, date, time }) => {
  return (
    <PrincipalCard>
      <DateCard>
        <TextDayCard style={{ color: "#000" }}>
          {time} - {currentWeather?.weekday}, {date}
        </TextDayCard>
      </DateCard>
      <PrincipalCardTitle>{description}</PrincipalCardTitle>
      <PrincipalCardText>{temp}°</PrincipalCardText>
      <Icon name={getIcon(currentWeather?.condition)} size={96} color="#fff" />
    </PrincipalCard>
  );
};

export const WeatherCard = ({ day, tempMax, tempMin, weekday, condition }) => {
  return (
    <SecondaryCard>
      <TempSecondaryCard>
        {tempMax}/{tempMin}°
      </TempSecondaryCard>
      <Icon name={getIcon(condition)} size={32} color="#000" />
      <TextDayCard>
        {day} - {weekday}
      </TextDayCard>
    </SecondaryCard>
  );
};

export const CityCard = ({ city, navigation, active }) => {
  return (
    <SecondaryCard
      style={[
        { justifyContent: "center" },
        active && { backgroundColor: "#b224f2" },
      ]}
      onPress={() => {
        navigation.navigate("City", { city });
      }}
    >
      <TempSecondaryCard style={[active && { color: "#fff" }]}>
        {city}
      </TempSecondaryCard>
    </SecondaryCard>
  );
};

export const AdditionalsInfoCard = ({ humidity, time, wind_speedy }) => {
  return (
    <AditionalsInfoContainer>
      <InfoCol>
        <TextCol>{humidity}</TextCol>
        <TextSecondaryCol>Umidade</TextSecondaryCol>
      </InfoCol>
      <InfoCol>
        <TextCol>{wind_speedy}</TextCol>
        <TextSecondaryCol>Vento</TextSecondaryCol>
      </InfoCol>
      <InfoCol>
        <TextCol>{time}</TextCol>
        <TextSecondaryCol>Hora</TextSecondaryCol>
      </InfoCol>
    </AditionalsInfoContainer>
  );
};
