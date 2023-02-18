import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export default function Detail() {
  const route = useRoute();
  const {url_overridden_by_dest} = route.params;
  return <WebView source={{uri: url_overridden_by_dest}} />;
}
