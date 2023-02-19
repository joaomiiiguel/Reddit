export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

export type RootTabParamList = {
  new: undefined;
  top: undefined;
  best: undefined;
  hot: undefined;
};

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