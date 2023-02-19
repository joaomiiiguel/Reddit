import {makeAutoObservable, observable, action} from 'mobx';

class NewsStore {
  newsDataAPI: Object = [];
  category: String = 'new';

  constructor() {
    makeAutoObservable(this, {
      newsDataAPI: observable,
      category: observable,
      addNewsToData: action,
      changeCategory: action,
    });
  }

  addNewsToData = (object: Object) => {
    this.newsDataAPI = [];
    this.newsDataAPI = object;
  };

  changeCategory = (value: String) => {
    this.category = value;
  };
}

export default new NewsStore();
