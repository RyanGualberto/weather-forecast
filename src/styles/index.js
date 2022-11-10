import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const PageTitle = styled.Text`
  padding: 15px 0;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  top: 25px;
`;

const PrincipalCard = styled.View`
  width: 325px;
  height: 325px;
  background-color: #b224f2;
  border-radius: 100px;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const PrincipalCardTitle = styled.Text`
  position: absolute;
  top: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #f4f4f4;
`;

const PrincipalCardText = styled.Text`
  font-size: 80px;
  font-weight: 1000;
  color: #fff;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #f3eaff;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.View`
  width: 100%;
  height: 250px;
  background-color: #f4f4f4;
  padding: 60px 20px 20px 20px;
  align-items: center;
`;

const AditionalsInfoContainer = styled.View`
  position: absolute;
  top: -50px;
  width: 350px;
  height: 100px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 24px;
  padding: 10px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const TextRow = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const SecondaryCard = styled.TouchableOpacity`
  margin-left: 8px;
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TempSecondaryCard = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const TextDayCard = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #00000070;
`;

const TextSecondaryCol = styled.Text`
  font-size: 16px;
  color: #00000070;
`;

const InfoCol = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const TextCol = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const DateCard = styled.View`
  padding: 0px 10px;
  height: 50px;
  position: absolute;
  background-color: #f3f3f3;
  top: -20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  PageTitle,
  PrincipalCard,
  PrincipalCardTitle,
  PrincipalCardText,
  MainContainer,
  InfoContainer,
  AditionalsInfoContainer,
  TextRow,
  TempSecondaryCard,
  SecondaryCard,
  InfoRow,
  TextDayCard,
  TextSecondaryCol,
  InfoCol,
  TextCol,
  DateCard,
};
