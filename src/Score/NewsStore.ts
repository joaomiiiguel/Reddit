import {makeAutoObservable, observable} from 'mobx';

class NewsStore {
  newsData = [];

  constructor() {
    makeAutoObservable(this, {
      newsData: observable,
    });
  }
}

export default new NewsStore();
