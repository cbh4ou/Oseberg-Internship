import React from 'react';


const Input = (props) => {
	return (  
  <div >
    <label style={labelStyle}  for={props.name}>{props.title}</label>
    <input
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
};
const labelStyle ={
    float: 'left',
    width: '180px',
    clear:'left',
    paddingRight:'10px'
}

export default Input;