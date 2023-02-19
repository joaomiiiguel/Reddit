import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  background-color: #f4f4f4;
  flex: 1;
  align-items: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const TabList = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TabHome = styled.TouchableOpacity`
  width: 25%;
  text-align: center;
  padding: 10px 10px;
`;
export const TabHomeActive = styled.TouchableOpacity`
  width: 25%;
  text-align: center;
  padding: 10px 10px;
  background-color: orange;
`;

export const TabText = styled.Text`
  text-align: center;
`;
