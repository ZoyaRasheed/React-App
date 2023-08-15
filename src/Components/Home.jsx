import React from 'react'
import { useState } from 'react'
import Display from './Display'
import Form from './Form'

function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form , setFormSubmission] = useState(false)

  function handleSubmit(e) {
   e.preventDefault();
   if(name && email){
    setFormSubmission(true)
   }
  }
  return (
    <div>
      <Display />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br></br>
        <button type="submit">Submit</button>
      </form>
     {form && <Form name={name} email={email} />}
    </div>
  )
}

export default Home
