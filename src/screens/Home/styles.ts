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
