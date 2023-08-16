import React from 'react'
import { useState } from 'react'
import Display from './Display'
import Form from './Form'
import Cards from './Cards';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const formStyle = {
  backgroundColor: '#f4f4f4',
  border: '1px solid white',
  borderRadius: '5px',
  padding: '20px',
  marginTop: '20px',
  textAlign: 'center',
};
const inputStyle = {
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid white',
  borderRadius: '3px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: 'blue',
  color: 'white',
};


function Home() {

  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form , setFormSubmission] = useState(false)

  function handleSubmit(e) {
   e.preventDefault();
   if(fname && email){
    setFormSubmission(true)
   }
  }
  function handleInputChange(e){
    const {name , value} = e.target;
    if(name === 'name'){
      setName(value)
    }
    else if(name === 'email')
    {
      setEmail(value)
    }
     if(form && (!fname && !email)){
      setFormSubmission(false)
     }
  }

  return (
    <div style={containerStyle}>
      <Display />
      <form style={formStyle} action="" onSubmit={handleSubmit}>
        <label>Name : <input type="text" value={fname} name= 'name'  style={inputStyle} onChange={handleInputChange}/></label><br />
        <label>Email : <input type="email" value={email} name= 'email'  style={inputStyle} onChange={handleInputChange} /></label><br />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
     {form && <Form name={fname} email={email} />}
       <Cards />
    </div>
  )
}

export default Home
