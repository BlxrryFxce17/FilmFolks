import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); 

import moviesRoutes from "./routes/movies.js";
import genresRoutes from "./routes/genres.js";
import tvRoutes from "./routes/tv.js";
import reviewsRoutes from "./routes/reviews.js";

const app = express();
app.use(cors());
app.use("/api/movies", moviesRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/tv", tvRoutes);
app.use("/api/reviews", reviewsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
