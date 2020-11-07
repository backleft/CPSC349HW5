(function (window) {
  'use strict';
  var App = window.App || {};
  /*
  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function () {
    return this.data;
  };
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };
  */

  class DataStore {
    constructor() {
      this.data = {};
    }
    async add(key,val) {
      this.data[key] = val;
    }
    async get(key) {
      return this.data[key];
    }
    async getAll() {
      return this.data;
    }
    async remove(key) {
      delete this.data[key];
    }
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);