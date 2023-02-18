import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CardNews from '../../components/CardNews';
import {Container, TitleHeader} from './styles';

export interface INewsResponse {
  id: String;
  title?: String | 'Desconhecido';
  author: String;
  num_comments?: Number;
  score?: Number;
  created?: Number;
  thumbnail?: String;
}

// const DATA = [
//   {
//     id: '114iqtg',
//     title: 'This cat angrily protecting its trunk full of watermelons',
//     author: 'yallapapi',
//     num_comments: 463,
//     score: 47403,
//     created: 1676635378.0,
//     thumbnail: 'https://i.redd.it/vh3hnels5sia1.jpg',
//   },
//   {
//     id: '214iqtg',
//     title: 'This cat angrily protecting its trunk full of watermelons',
//     author: 'yallapapi',
//     num_comments: 463,
//     score: 342,
//     created: 1676635378.0,
//   },
// ];

export default function Home() {
  const [newsData, setNewsData] = useState<any>({});
  const [loading, setLoading] = useState<Boolean>(true);

  async function loadNews() {
    const listNews = '/r/pics/hot';

    const resp = await api
      .get(listNews)
      .then((response: any) => {
        setNewsData(response.data.data.children);
        console.log(newsData);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container>
      <TitleHeader>Reddit</TitleHeader>
      <FlatList
        data={newsData}
        renderItem={({item: news}) => <CardNews data={news.data} />}
        keyExtractor={news => news.data.id}
      />

      {loading && <Text>Carregou</Text>}
    </Container>
  );
}
