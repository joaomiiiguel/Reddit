/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {INewsResponse} from '../../Models/News';
import {
  Container,
  Title,
  SubTitle,
  FooterText,
  Thumbnail,
  ViewContent,
  HeaderContent,
  FooterView,
} from './styles';
import {Linking, Alert} from 'react-native';

export default function CardNews(props: INewsResponse) {
  const [timePosted, setTimePosted] = useState<String>('');
  const navigation = useNavigation();
  const timeNewsCreated = props.created; //exemple 1676581452.0

  function TimeConverte() {
    let timeCurrent = Date.now();

    let timeCurrentDiminished = parseInt(
      new String(timeCurrent).slice(0, 10),
      10,
    );

    let timeDiference = timeCurrentDiminished - timeNewsCreated;
    const timeConvertToMinutes = parseFloat(
      ((timeDiference / 1000) % 60).toFixed(0),
    );

    setTimePosted(timeConvertToMinutes + ' minutes ago');
    if (timeConvertToMinutes === 60) {
      let newTime = Math.floor(timeConvertToMinutes / 60);
      setTimePosted(newTime + ' hour ago');
    }
  }

  async function navigateToDetail(
    url_overridden_by_dest: string,
    title: string,
  ) {
    const supported = await Linking.canOpenURL(url_overridden_by_dest);
    if (supported) {
      navigation.navigate('Detail', {url_overridden_by_dest, title});
    } else {
      Alert.alert(`Don't know how to open this URL: ${url_overridden_by_dest}`);
    }
  }

  useEffect(() => {
    TimeConverte();
  }, []);

  return (
    <Container
      onPress={() =>
        navigateToDetail(props.url_overridden_by_dest, props.title)
      }>
      {props.thumbnail && <Thumbnail source={{uri: `${props.thumbnail}`}} />}
      <ViewContent>
        <HeaderContent>
          <FooterView>
            <SubTitle> {timePosted} </SubTitle>
            <SubTitle>Posted by {props.author}</SubTitle>
          </FooterView>
          <Title>{props.title}</Title>
        </HeaderContent>
        <FooterView>
          <FooterText>Score: {props.ups}</FooterText>
          <FooterText>{props.num_comments} comments</FooterText>
        </FooterView>
      </ViewContent>
    </Container>
  );
}
