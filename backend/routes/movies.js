import express from "express";
import { getFromTMDB } from "../utils/tmdb.js";

const router = express.Router();

// ✅ Popular Movies (with filters)
router.get("/popular", async (req, res) => {
  try {
    const { page = 1, language = "all", year, genre } = req.query;

    const params = {
      page,
      include_adult: false,
      sort_by: "popularity.desc",
      language: "en-US",
    };

    if (language !== "all") params.with_original_language = language;
    if (genre) params.with_genres = genre;
    if (year) params.primary_release_year = year;

    const data = await getFromTMDB("/discover/movie", params);
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Popular Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
});

// ✅ Trending Movies
router.get("/trending", async (req, res) => {
  try {
    const data = await getFromTMDB("/trending/movie/week");
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Trending Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch trending movies" });
  }
});

// ✅ Top Rated Movies
router.get("/toprated", async (req, res) => {
  try {
    const data = await getFromTMDB("/movie/top_rated", { language: "en-US", page: 1 });
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Top Rated Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch top-rated movies" });
  }
});

// ✅ Movie Details (keep this BEFORE the dynamic routes)
router.get("/details/:id", async (req, res) => {
  try {
    const data = await getFromTMDB(`/movie/${req.params.id}`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Details Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
});

// ✅ Movie Reviews
router.get("/:id/reviews", async (req, res) => {
  try {
    const data = await getFromTMDB(`/movie/${req.params.id}/reviews`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Reviews Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch movie reviews" });
  }
});

// ✅ Movie Videos
router.get("/:id/videos", async (req, res) => {
  try {
    const data = await getFromTMDB(`/movie/${req.params.id}/videos`, { language: "en-US" });
    res.json(data);
  } catch (err) {
    console.error("❌ TMDB Videos Fetch Error:", err.message);
    res.status(500).json({ error: "Failed to fetch movie videos" });
  }
});

export default router;
