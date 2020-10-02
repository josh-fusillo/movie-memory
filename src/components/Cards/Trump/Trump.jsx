import React, { Component } from 'react';
import axios from 'axios';
import './Trump.scss';
import picOfUs from './angelajosh.jpg';

const apiKEY = "8918eb7a7f8e0c7f4ab64f17b93a62d9";

let min = 470;
let max = 900;
let randomID = Math.floor(Math.random() * (+max - +min) + +min);

export default class Trump extends Component {
    state = {
        memeGenerator: "",
        count: 0,
        randomImage: ""

    }

    getMeme = () => {
        axios
            .get("http://api.tronalddump.io/random/meme")
            .then(res => {
                this.setState({
                    memeGenerator: res.config.url
                })

            })
    }

    generateMovie = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${randomID}?api_key=${apiKEY}`)
            .then(res => {
                const posterPath = res.data.poster_path
                const baseURL = `https://image.tmdb.org/t/p/w500${posterPath}`
                this.setState({
                    randomImage: baseURL,
                    movieTitle: res.data.title

                })

            })
    }

    componentDidMount() {
        this.getMeme();
        this.generateMovie();
    }

    incrementCount = () => {
        this.setState(
            { count: this.state.count + 1 }
        );
    };


    render() {
        return (
            <>
                <h1>Who Loves A Donald Trump Meme?!?!</h1>
                <div className="hover__flex">
                    <div className="cards">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h2>Do you like movies??!!</h2>
                                </div>
                                <div className="flip-card-back">
                                    <img className="meme__card" src={this.state.randomImage} alt="funny meme" />
                                    


                                </div>
                                
                            </div>
                            <button className="new__meme" onClick={() => window.location.reload()}>New Movie</button>

                        </div>
                        
                    </div>
                    
                    <div className="cards">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h2>Hover Over To Find Out!!</h2>
                                </div>
                                <div className="flip-card-back">
                                    <img className="meme__card" src={this.state.memeGenerator} alt="funny meme" />


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="cards">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h2>Who might this be??</h2>
                                </div>
                                <div className="flip-card-back">
                                    <img className="meme__card" src={picOfUs} alt="funny meme" />


                                </div>
                            </div>
                                <button className="new__meme" onClick={() => window.location.reload()}>Change Faces</button>

                        </div>
                    </div>
                </div>
                <button className="new__meme" onClick={() => window.location.reload()}>New Meme</button>
                <div class="button-holder">
                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>
                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>
                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>

                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>

                    <h3>How many clicks can you do in an hour? Try not to reset the counter!</h3>

                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>

                    <button className="button-right buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>

                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>

                    <button className="button-left buttons" onClick={this.incrementCount}>
                        Clicks: {this.state.count}
                    </button>



                </div>

            </>




        )
    }
}
