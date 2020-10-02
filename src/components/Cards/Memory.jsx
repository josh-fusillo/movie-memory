import React, { Component } from 'react'
import axios from 'axios'
import './Cards.scss'

const apiKEY ="8918eb7a7f8e0c7f4ab64f17b93a62d9";



export default class Memory extends Component {
    state = {
        cardPairOne: "",
        cardPairTwo: ""
    }

getCards = () =>
    axios
    .get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKEY}`)
    .then(res =>  {
        const posterPath = res.data.poster_path
        const baseURL = `https://image.tmdb.org/t/p/w500${posterPath}`
        this.setState({
            cardPairOne: baseURL        })
       
    })

getCardsTwo = () =>
    axios
    .get(`https://api.themoviedb.org/3/movie/470?api_key=${apiKEY}`)
    .then(res =>  {
        const posterPath = res.data.poster_path
        const baseURL = `https://image.tmdb.org/t/p/w500${posterPath}`
        this.setState({
            cardPairTwo: baseURL
        })        
    })


    componentDidMount() {       
        this.getCards(); 
        this.getCardsTwo();     
    }
    
    




    render() {
        return (
            <>
            <section className="card">

              <div className="card__flip">
                <div className="card__flip--inner">
                    <div className="card__flip--front" />  
                                        
                    <div className="card__flip--back">
                      <img className="card__movie" src={this.state.cardPairOne}  alt="matchy"/>
                    </div>
                        
                    </div>
                </div>
                <div className="card__flip">
                <div className="card__flip--inner">
                    <div className="card__flip--front" />  
                                        
                    <div className="card__flip--back">
                      <img className="card__movie" src={this.state.cardPairTwo}  alt="matchy"/>
                    </div>
                        
                    </div>
                </div>
                <div className="card__flip">
                <div className="card__flip--inner">
                    <div className="card__flip--front" />  
                                        
                    <div className="card__flip--back">
                      <img className="card__movie" src={this.state.cardPairOne}  alt="matchy"/>
                    </div>
                        
                    </div>
                </div>
                <div className="card__flip">
                <div className="card__flip--inner">
                    <div className="card__flip--front" />  
                                        
                    <div className="card__flip--back">
                      <img className="card__movie" src={this.state.cardPairTwo}  alt="matchy"/>
                    </div>
                        
                    </div>
                </div>
                

            </section> 

            </>
        )
    }
}

