import React, {useEffect, useState} from 'react';

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

export default function CardNews({data}: {data: INewsResponse}) {
  const [timePosted, setTimePosted] = useState<Number>();

  function TimeConverte() {
    const localTimePost = data.created;
    setTimePosted(localTimePost);
  }

  useEffect(() => {
    TimeConverte();
  });
  return (
    <Container>
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
