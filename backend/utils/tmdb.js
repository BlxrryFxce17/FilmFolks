import axios from "axios";

async function getFromTMDB(endpoint, params = {}, retries = 3) {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3${endpoint}`;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await axios.get(url, { params: { api_key: apiKey, ...params } });
      return res.data;
    } catch (err) {
      if (err.code === 'ECONNRESET' && i < retries - 1) continue;
      throw err;
    }
  }
}

export { getFromTMDB };