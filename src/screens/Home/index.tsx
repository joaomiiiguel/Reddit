import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CardNews from '../../components/CardNews';
import {Container} from './styles';

export interface INewsResponse {
  id?: String;
  title?: String | 'Desconhecido';
  author: String;
  num_comments?: Number;
  score?: Number;
  created?: Number;
  thumbnail?: String;
  url_overridden_by_dest?: String;
}

export default function Home() {
  const [newsData, setNewsData] = useState<any>({});
  const [loading, setLoading] = useState<Boolean>(true);

  async function loadNews() {
    const listNews = '/r/pics/hot';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = await api
      .get(listNews)
      .then((response: any) => {
        setNewsData(response.data.data.children);
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={newsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item: news}) => (
            <CardNews
              title={news.data.title}
              author={news.data.author}
              num_comments={news.data.num_comments}
              score={news.data.score}
              created={news.data.created}
              thumbnail={news.data.thumbnail}
              url_overridden_by_dest={news.data.url_overridden_by_dest}
            />
          )}
          keyExtractor={news => news.data.id}
        />
      )}
    </Container>
  );
}
