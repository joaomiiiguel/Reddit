import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CardNews from '../../Components/CardNews';
import {Container} from './styles';
import {inject, observer} from 'mobx-react';
import {useRoute} from '@react-navigation/native';
import CardSkeleton from '../../Components/CardSkeleton';

const Home = ({navigation, NewsStore}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [isFetching, setIsFetching] = useState(false);
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
          setIsFetching(false);
        }, 1000);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  }

  function onRefresh() {
    setIsFetching(true);
    loadNews(category);

    setIsFetching(false);
  }

  useEffect(() => {
    loadNews(category);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, category]);

  return (
    <Container>
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({}) => <CardSkeleton />}
        />
      ) : (
        <FlatList
          data={newsDataAPI}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
          showsVerticalScrollIndicator={false}
          renderItem={({item: news}) => (
            <CardNews
              title={news.data.title}
              author={news.data.author}
              num_comments={news.data.num_comments}
              ups={news.data.ups}
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
