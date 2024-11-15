import React, { useState } from 'react'

export const SignUp = () => {
    const [user, setUser] = useState<userType>({ userName: '', email: '', age: 0, profession: '', experience: 0, password: ''})
    const handleForm=async(e: { preventDefault: () => void; target: HTMLFormElement | undefined; })=>{
        e.preventDefault();
const form=new FormData(e.target);
const formData:userType={
    userName:form.get('name') ,
    email: form.get('email'),
    age: parseInt(form.get('age')),
    profession: form.get('profession'),
    experience: parseInt(form.get('experience')),
    password: form.get('password')
}
    }
  return (
    <form  method="post">
        <label>Name:<input type="text" name='name'/></label>
        <label>Email:<input type="email" name="email" /></label>
        <label>Age:<input type="number" name="age" /></label>
        <label>Profession:<input type="text" name='profession' /></label>
        <label>Experience:<input type="number" name="experience" /></label>
        <label>Password:<input type="password" name="password" /></label>
<input type="submit" value="Add" />
    </form>
  )
}
