# FilmFolks

A full-stack web application for movie enthusiasts to discover, review, and share their favorite films. FilmFolks provides an intuitive platform where users can browse movies, read and write reviews, rate films, and build their personal movie collections.

## Overview

FilmFolks is a modern movie review and discovery platform built with a React frontend and Node.js backend. It combines movie data from TMDB (The Movie Database) API with a community-driven review system, allowing users to find great movies and contribute their own insights.

**Key Features:**
- Browse and search movies by genre, ratings, and popularity
- Read and write detailed movie reviews
- Rate movies on a 5-star scale
- Create personalized watchlists and favorites
- User authentication and profiles
- Responsive design for mobile and desktop

## Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: CSS3, Tailwind CSS (or Material-UI)
- **State Management**: Redux or Context API
- **HTTP Client**: Axios
- **Routing**: React Router

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API

### External Services
- **Movie Data**: TMDB API
- **Database**: MongoDB Atlas (Cloud)
- **Hosting**: Vercel (Frontend), Heroku/Railway (Backend)

## Project Structure

```
FilmFolks/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├─│ styles/            # CSS stylesheets
│   │   ├─│ redux/             # Redux store and slices
│   │   ├─│ App.js             # Main component
│   │   └─│ index.js           # Entry point
│   ├── package.json         # Frontend dependencies
│   └── .env.example         # Environment variables template
├── backend/                    # Node.js backend application
│   ├── src/
│   │   ├── models/            # Database schemas
│   │   ├─│ routes/            # API endpoints
│   │   ├─│ controllers/       # Request handlers
│   │   ├─│ middleware/        # Auth, validation
│   │   ├─│ utils/             # Helper functions
│   │   └─│ server.js          # Server entry point
│   ├── package.json         # Backend dependencies
│   └── .env.example         # Environment variables template
├── .gitignore                  # Git ignore rules
├── package.json                # Root package.json
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)
- TMDB API key (get it from https://www.themoviedb.org/settings/api)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/BlxrryFxce17/FilmFolks.git
cd FilmFolks
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Configure backend environment variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/filmfolks
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/filmfolks

JWT_SECRET=your_jwt_secret_key_here
TMDB_API_KEY=your_tmdb_api_key_here
NODE_ENV=development
```

#### 4. Start the backend server

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

#### 5. Install frontend dependencies

In a new terminal:

```bash
cd frontend
npm install
```

#### 6. Configure frontend environment variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

#### 7. Start the frontend development server

```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Features

### User Features
- **Movie Discovery**: Browse popular, trending, and top-rated movies
- **Advanced Search**: Filter movies by genre, year, rating, and keywords
- **Movie Details**: View comprehensive information about each movie
- **Reviews**: Read community reviews and write your own
- **Ratings**: Rate movies and see average community ratings
- **Watchlist**: Save movies to watch later
- **Favorites**: Mark favorite movies for quick access
- **User Profile**: View your review history and collections

### Admin Features
- **Review Moderation**: Manage community reviews
- **User Management**: Manage user accounts
- **Analytics**: View platform statistics

## API Endpoints

### Movies
- `GET /api/movies` - Get all movies (with pagination)
- `GET /api/movies/search?q=keyword` - Search movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/genre/:genre` - Get movies by genre

### Reviews
- `GET /api/reviews/movie/:movieId` - Get reviews for a movie
- `POST /api/reviews` - Create a new review (authenticated)
- `PUT /api/reviews/:id` - Update a review
- `DELETE /api/reviews/:id` - Delete a review

### Users
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/watchlist` - Add to watchlist
- `GET /api/users/:id/watchlist` - Get watchlist

## Usage Examples

### Browsing Movies
1. Open the app at `http://localhost:3000`
2. Explore the home page featuring popular and trending movies
3. Click on a movie card to view details
4. Read reviews from other users

### Writing a Review
1. Click on a movie to view details
2. Click "Write a Review" button
3. Enter your rating (1-5 stars)
4. Write your review text
5. Click "Submit"

### Creating a Watchlist
1. Navigate to "My Profile"
2. Click "Add to Watchlist" on any movie
3. View your watchlist from the profile page

## Configuration

### TMDB API Setup
1. Create an account at https://www.themoviedb.org/
2. Go to Settings > API
3. Create an API key
4. Add to your `.env` file

### Database Setup

**Local MongoDB:**
```bash
mongod  # Start MongoDB service
```

**MongoDB Atlas:**
1. Create a cluster at https://www.mongodb.com/cloud/atlas
2. Get your connection string
3. Add to MONGODB_URI in `.env`

## Development

### Running with Hot Reload

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm run build  # if applicable
```

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically on push

### Backend (Railway/Heroku)
1. Connect repository
2. Set environment variables
3. Deploy from Git

## Testing

### Unit Tests
```bash
cd backend
npm test
```

### Integration Tests
```bash
cd backend
npm run test:integration
```

## Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Ensure MongoDB is running locally, or
- Check MongoDB Atlas connection string
- Verify IP whitelist in MongoDB Atlas

### Issue: "CORS error"
**Solution:**
- Check backend CORS configuration
- Ensure frontend and backend URLs are correct
- Verify environment variables

### Issue: "API key invalid"
**Solution:**
- Verify TMDB API key is correct
- Check API quota limits
- Ensure API key is for the correct TMDB account

## Future Enhancements

- [ ] Social features (follow users, like reviews)
- [ ] Movie recommendations based on ratings
- [ ] Watchlist sharing
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Advanced filtering and sorting
- [ ] Dark mode
- [ ] User badges and achievements
- [ ] Integration with streaming platforms
- [ ] AI-powered movie suggestions

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style

Please follow:
- ESLint configuration for JavaScript
- Prettier for code formatting
- Commit message conventions

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Author

Created by Akash V (BlxrryFxce17)

## Acknowledgments

- The Movie Database (TMDB) for movie data
- React community for excellent documentation
- Express.js community for the backend framework

## Support

If you encounter any issues or have suggestions:
- Open an issue on GitHub
- Create a discussion
- Contact the author

## Roadmap

**Phase 1 (Current):**
- Core movie browsing and review system
- User authentication
- Basic watchlist functionality

**Phase 2:**
- Social features (following, likes)
- Advanced recommendations
- Performance optimizations

**Phase 3:**
- Mobile app
- Streaming integration
- AI recommendations

---

**Happy movie browsing! 🎜👏**
