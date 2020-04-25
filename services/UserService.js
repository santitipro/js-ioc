class ClassicalService {
  constructor(opts) {
    this.axios = opts.axiosService;
  }

  async getAll() {
    return await this.axios.get("/users");
  }
}

module.exports = ClassicalService;
