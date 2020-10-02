import axios from 'axios';
import './Cards.scss';
import React, { Component } from 'react'


const apiKEY ="8918eb7a7f8e0c7f4ab64f17b93a62d9";

let min=470; 
let max=900;  
let randomID = Math.floor(Math.random() * (+max - +min) + +min);



export default class MainGame extends Component {
    state = {
        randomQuote: "",
      
    }   

    generateMovie = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${randomID}?api_key=${apiKEY}`)
            .then(res => {
                const posterPath = res.data.poster_path
                const baseURL = `https://image.tmdb.org/t/p/w500${posterPath}`
                this.setState({
                    randomQuote: baseURL
                })                
               
            })
           
    } 
    
    
    

    
    
    componentDidMount() {       
        this.generateMovie();      
        
    }


    render() {

       
        
        return (
           
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">

                        </div>
                        <div className="flip-card-back">
                            <img className="movie__one"src={this.state.randomQuote} alt='whatever' />

                        </div>
                    </div>
                </div>
              


        )
    }
}
