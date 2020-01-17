class RLean {
  async init(config) {
    try {
      this.config = config;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new RLean();
