/* Add boostrap*/
import React, {Component} from 'react';  

/* Import Components */ 
import Input from '../components/Input';   
import Button from '../components/Button';

function toggle() {
    this.setState({
        inputLinkClicked: true
    })
}

function Submission(props) {
    return <ul>
        <li>First Name:   {props.value.firstName}</li> 
        <li>Last Name: {props.value.lastName}</li> 
        <li>Phone: {props.value.phone}</li> 
        <li>Age: {props.value.age}</li> 
        </ul>
  }
class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
        inputLinkClicked: false
      },

    }
    
    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
this.setState( prevState => ({ newUser : 
     {...prevState.newUser, [name]: value
     }
   }), () => console.log(this.state.newUser))
} 
  handleFirstName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, firstName: value
        }
      }), () => console.log(this.state.newUser))
  }
  handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
         {...prevState.newUser, lastName: value
         }
       }), () => console.log(this.state.newUser))
   }
   handlePhone(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
         {...prevState.newUser, phone: value
         }
       }), () => console.log(this.state.newUser))
   }

  handleAge(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, age: value
        }
      }), () => console.log(this.state.newUser))
  }

 



  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
        inputLinkClicked: true
      })
  
  }

  handleClearForm(e) {
      
      e.preventDefault();
      this.setState({ 
        newUser : {
            firstName: '',
            lastName: '',
            phone: '',
            age: '',
        },
        inputLinkClicked: false
      
      })
  }

  render() {
    return (
    
        <form  onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'First Name'} 
                   name= {'firstName'}
                   value={this.state.newUser.firstName} 
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                   style = {inputStyle}
                   /> {/* Name of the user */}
        <Input inputType={'text'}
                   title= {'Last Name'} 
                   name= {'lastName'}
                   value={this.state.newUser.lastName} 
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                   style = {inputStyle}
                   /> {/* Name of the user */}
        <Input inputType={'text'}
                   title= {'Phone Number'} 
                   name= {'phone'}
                   value={this.state.newUser.phone} 
                   placeholder = {'Enter your Phone Number'}
                   handleChange = {this.handleInput}
                   style = {inputStyle}
                   /> {/* Name of the user */}
          <Input inputType={'number'} 
                name={'age'}
                 title= {'Age:'} 
                 value={this.state.newUser.age} 
                placeholder = {'Enter your age'}
                 handleChange={this.handleAge} 
                 style = {inputStyle}
                 /> {/* Age */} 
          <Button 
          onClick={this.toggle}
           action = {this.handleSubmitForm}
           value={this.state.newUser} 
            type = {'primary'} 
            title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
        
        {
              this.state.inputLinkClicked ?

                <Submission value = {this.state.newUser}/>
              
              
              :

              <div></div>
            }
        </form>
            
            
       
    );
  }
}

const buttonStyle = {
    width:'200px',
    textalign: 'right'
}

const inputStyle = {
    width:'200px',
    textalign: 'right'
}


export default FormContainer;