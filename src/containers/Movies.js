import Box  from "@mui/material/Box";
import { useState } from "react";

import MovieCard from "../components/MovieCard";
import fetchedMovies from '../data/fetchedMovies.json';


const Movies = () => {
    const[movies, setMovies] = useState(fetchedMovies.results);
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-between'
        }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }

        </Box>
    );
}

export default Movies