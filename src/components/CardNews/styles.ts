import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  margin: 8px;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  overflow: hidden;
`;
export const ViewContent = styled.View`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const HeaderContent = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  opacity: 0.3;
`;

export const FooterView = styled.View`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const FooterText = styled.Text`
  font-size: 10px;
  opacity: 0.5;
`;

export const Thumbnail = styled.Image`
  width: 140px;
  height: 140px;
`;
