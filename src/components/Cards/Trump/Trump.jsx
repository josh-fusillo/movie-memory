import React, { Component } from 'react';
import axios from 'axios';
import './Trump.scss'


export default class Trump extends Component {
    state = {
        memeGenerator: "",
        count: 0
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

    componentDidMount() {
        this.getMeme();
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
             <button className="new__meme" onClick={() => window.location.reload()}>New Meme</button>

             <div class="button-holder">

             <button className="button-left buttons" onClick={ this.incrementCount }>
				Clicks: { this.state.count }
			</button>

            <button className="button-right buttons" onClick={ this.incrementCount }>
				Clicks: { this.state.count }
			</button>

      

  </div> 
            
</>




        )
    }
}
