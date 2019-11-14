import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChange = e => {
        let value = e.target.value;
        setMovie({
            ...movie,
            [e.target.name]: value
        });
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axios
    //         .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    //         .then(res => {
    //             props
    //         })
    // }

    return (
        <div>
            <h2>Update Item</h2>
            <form >
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={movie.title}
                />
                <br/>
                <input 
                    type="text"
                    name="director"
                    placeholder="Director"
                    onChange={handleChange}
                    value={movie.director}
                />
                <br/>
                <input 
                    type="text"
                    name="metascore"
                    placeholder="MetaScore"
                    onChange={handleChange}
                    value={movie.metascore}
                />
                <br/>
                <input 
                    type="text"
                    name="stars"
                    placeholder="Stars"
                    onChange={handleChange}
                    value={movie.title}
                />
                <br/>
                <button className="update-btn">Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie