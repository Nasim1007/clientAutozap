import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._baskets = [];
    this._basketDevices = [];
    this._totalCount = 0;
    this._addedToBasket = {};
    this._searchResult = [];
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setBaskets(basket) {
    this._basket = basket;
  }
  setBasketDevices(basketDevice) {
    this._basketDevices = basketDevice;
  }
  setAdedToBasket(deviceId) {
    this._addedToBasket = deviceId;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setSearchResult(search) {
    this._searchResult = search;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get baskets() {
    return this._baskets;
  }
  get basketDevices() {
    return this._basketDevices;
  }
  get addedToBasket() {
    return this._addedToBasket;
  }
  get totalCount() {
    return this._totalCount;
  }
  get searchResult() {
    return this._searchResult;
  }
}
