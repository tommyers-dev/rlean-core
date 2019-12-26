export default class Plugins {
  constructor(pluginMap) {
    for(let key in pluginMap) {
      switch(key) {
        case 'storage':
          this.storage = pluginMap[key];
          break;
        case 'api':
          this.api = pluginMap[key];
          break;
        case 'logger':
          this.logger = pluginMap[key];
          break;
        default:
          this[key] = pluginMap[key];
      }
    }
  }
}
