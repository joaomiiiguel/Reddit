import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CardNews from '../../Components/CardNews';
import {Container} from './styles';
import {inject, observer} from 'mobx-react';
import {useRoute} from '@react-navigation/native';

const Home = ({navigation, NewsStore}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const {category, addNewsToData, newsDataAPI, changeCategory} = NewsStore;
  const route = useRoute();

  async function loadNews(catProps: string) {
    const listNews = `/${catProps}`;
    setLoading(true);

    navigation.addListener('tabPress', (_e: any) => {
      changeCategory(route.name);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = await api
      .get(listNews)
      .then((response: any) => {
        addNewsToData(response.data.data.children);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadNews(category);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, category]);

  return (
    <Container>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={newsDataAPI}
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
};

export default inject('NewsStore')(observer(Home));
