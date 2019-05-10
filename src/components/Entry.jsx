import React from 'react';




const Entry = (props) => {
    return(
        <input
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
        
        )
    };

export default Entry;