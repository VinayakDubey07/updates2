import React from 'react'

import './Form.css'

function Form(){
    return(
        <div className='filter-section'>
            <form>
                <label htmlFor='class'/>
                <select id='class'>
                    <option value={11}>Class 11</option>
                    <option value={12}>Class 12</option>
                </select>

                <label htmlFor='board'/>
                <select id='board'>
                    <option>CBSE</option>
                    <option>ICSE</option>
                </select>

                <label htmlFor='subject'/>
                <select id='subject'>
                    <option>Physics</option>
                    <option>Maths</option>
                    <option>Chemistry</option>
                </select>

                <label htmlFor='submit'/>
                <input type='submit' id='submit'></input>
            </form>
        </div>
    )
}

export default Form