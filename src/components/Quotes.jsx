import React from 'react'
import {string} from 'prop-types';



const Quotes = ({quote,speaker,onUpdate}) => {
    return (
        <div>
            <p>{quote}</p>
            <p>{speaker}</p>
            <button onClick={onUpdate}>botao</button>
        </div>
    )
}


Quotes.propTypes={
    quote:string,
    speaker:string
}
export default Quotes
