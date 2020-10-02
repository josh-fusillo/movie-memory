import axios from 'axios';
import './Cards.scss';
import React, { Component } from 'react';

const apiKEY ="8918eb7a7f8e0c7f4ab64f17b93a62d9";

let min=[0]; 
let max=[5]; 
let oneOfSixID = Math.floor(Math.random() * (+max - +min) + +min);


export default class QuestCard extends Component {
    state = [{
        image: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: ""
    }]   

    generateMovie = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${oneOfSixID}?api_key=${apiKEY}`)
            .then(res => {
                const posterPath = res.data.poster_path
                const baseURL = `https://image.tmdb.org/t/p/w500${posterPath}`
                this.setState({
                    randomImage: baseURL,
                    image:
                    movieTitle: res.data.title

                })  
                console.log(res.data.title)              
            })
    } 
    
    
    componentDidMount() {       
        this.generateMovie();      
    }


    render() {
        return (
           <>
            <section className="card">

              <div className="card__flip">
                <div className="card__flip--inner">
                    <div className="card__flip--front" />  
                                        
                    <div className="card__flip--back">
                      <img className="card__movie" src={this.state.randomImage}  alt={this.state.movieTitle}/>
                    </div>
                        
                    </div>
                </div>
            </section> 
              </>
        )
    }
}
