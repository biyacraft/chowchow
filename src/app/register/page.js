"use client"

import Image from 'next/image';
import React, { useState } from 'react';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(ev){
    ev.preventDefault();
    fetch("/api/register", {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
  }


  return (
    <section className='text-center text-primary txt-4xl'>
    <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input type='email' placeholder='Email' value={email} 
        onChange={ev=>setEmail(ev.target.value)}/>
        <input type='password' placeholder='Password' value={password} 
        onChange={ev=>setPassword(ev.target.value)} />
        <button type='submit'>Submit</button>
        <div className='flex p-4 gap-4'>
          <Image src={"/google.png"} alt='' width={40} height={40}/>
        <button>Log in with google</button>
        </div>
    </form>
    </section>
  )
}

