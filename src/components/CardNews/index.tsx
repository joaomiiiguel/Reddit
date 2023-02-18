import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {INewsResponse} from '../../screens/Home';
import {
  Container,
  Title,
  SubTitle,
  FooterText,
  Thumbnail,
  ViewContent,
  HeaderContent,
} from './styles';
import {Linking, Alert} from 'react-native';

export default function CardNews({data}: {data: INewsResponse}) {
  const [timePosted, setTimePosted] = useState<Number>();
  const navigation = useNavigation();

  function TimeConverte() {
    const localTimePost = data.created;
    setTimePosted(localTimePost);
  }

  async function navigateToDetail(url_overridden_by_dest: String | undefined) {
    const supported = await Linking.canOpenURL(url_overridden_by_dest);
    if (supported) {
      await navigation.navigate('Detail', {url_overridden_by_dest});
      console.log('Your page: ', url_overridden_by_dest);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url_overridden_by_dest}`);
    }
  }

  useEffect(() => {
    TimeConverte();
  });
  return (
    <Container onPress={() => navigateToDetail(data.url_overridden_by_dest)}>
      {data.thumbnail && <Thumbnail source={{uri: `${data.thumbnail}`}} />}
      <ViewContent>
        <HeaderContent>
          <SubTitle> {timePosted} </SubTitle>
          <Title>{data.title}</Title>
          <SubTitle>Posted by {data.author}</SubTitle>
        </HeaderContent>
        <FooterText>
          Score: {data.score} - {data.num_comments} comments
        </FooterText>
      </ViewContent>
    </Container>
  );
}
