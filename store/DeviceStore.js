import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._selectedOilBrand = {};
    this._typeOils = [];
    this._brandOils = [];
    this._toils = [];
    makeAutoObservable(this);
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setTypes(types) {
    this._types = types;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this.setPage = 1;
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage = 1;
    this._selectedBrand = brand;
  }
  setSelectedOilBrand(brand) {
    this.setPage = 1;
    this._selectedOilBrand = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setLimit(limit) {
    this._limit = limit;
  }
  setBrandOils(brandOils) {
    this._brandOils = brandOils;
  }
  setTypeOils(typeOils) {
    this._typeOils = typeOils;
  }
  setTOils(toils) {
    this._toils = toils;
  }

  get brands() {
    return this._brands;
  }
  get types() {
    return this._types;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedOilBrand() {
    return this._selectedOilBrand;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }

  get typeOils() {
    return this._typeOils;
  }
  get brandOils() {
    return this._brandOils;
  }
  get toils() {
    return this._toils;
  }
}
