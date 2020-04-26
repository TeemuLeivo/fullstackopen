import React from 'react'

const Filter = props => {
    return(
        <div>
            Filter value <input value={props.filterValue} onChange={props.filterChangeHandler} />
        </div>
    )
}

export default Filter