import React from 'react';
import './Snake.scss'

export default (props) => {
        return(
            <>
                {props.snakeDots.map((dot, i) => {
                    const style = {
                        left: `${dot[0]}%`,
                        top: `${dot[1]}%`
                    }

                    return (
                        <div className="snake-dot" key={i} style={style}></div>
                    )
                })}
                {/* <div className="snake-dot" style={{top:0, left:0}}></div>
                <div className="snake-dot" style={{top:0, left:'2%'}}></div>
                <div className="snake-dot" style={{top:0, left:'4%'}}></div> */}
            </>
        )
}