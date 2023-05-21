import Request from "./request";

/**
 * Class that exposes REST API endpoints
 */
class Api {
  constructor() {
    this.request = new Request();
  }

  /**
   * Get list of trending repositories for a given date
   */
  getTrendingRepo(date) {
    const params = {
      q: `created:${date}`,
      sort: "stars",
      order: "desc",
    };
    return this.request.get(
      "/v1/6b56c229-179e-47f1-b3db-b4db5facf7a4?q=1",
      params,
      undefined
    );
  }
}

export default Api = new Api();
