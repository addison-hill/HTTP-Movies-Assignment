import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: null,
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);
    

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.id]);

    // in handlechange we need to set an if statement for stars and split() so it comes as an array instead of string

    const handleChange = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "metascore") {
            value = parseInt(value, 10);
        }
        setMovie({ ...movie, [e.target.name]: value });
        if (e.target.name === "stars") {
            setMovie(prevData => ({
                ...prevData,
                [e.target.name]: e.target.value.split(",")
            }));
        } else {
            setMovie(prevData => ({ ...prevData, [e.target.name]: value}));
        }
    };
       
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                alert('Movie Details Updated')
                props.history.push('/');
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
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
                    value={movie.stars}
                />
                <br/>
                <button className="update-btn" type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie