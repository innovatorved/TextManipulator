import React from 'react';
import PropTypes from 'prop-types';

const firstTitleCase = (word) => {
    return (
        word.charAt(0).toUpperCase() + word.slice(1)
    )
}

export default function Alert(props){
    return (
        <div style={{height : "40px"}}>
            {props.alertMsg && 
            <div>
                <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
                <strong>{firstTitleCase(props.alertMsg.type)} </strong> {props.alertMsg.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    )
}

Alert.propTypes = {
    alertMsg : PropTypes.object,
}