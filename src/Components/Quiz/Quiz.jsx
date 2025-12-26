import React from 'react';
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>1. When Mary became pregnant, Mary and Joseph were:</h2>
            <ul>
                <li>married</li>
                <li>engaged</li>
                <li>just friends</li>
                <li>none of the above</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 5 questions</div>
        </div>
    )
}
export default Quiz