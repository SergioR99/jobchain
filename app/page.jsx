"use client"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('jose@jobchain.com');
  const [emailEmty, setEmailEmty] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-96">
          <fieldset className="mb-4">
            <input 
              type="email" 
              placeholder="Escribe tu correo electrónico"
              className="p-6 rounded-2xl w-full text-xl"
              style={ {background:' #141534', color: '#7876b1' }}
              id="" />
          </fieldset>

          <fieldset className="relative mb-4">
            <label className="absolute px-6 pt-1" style={{color: '#7871FF'}}>Correo electrónico</label>
            <input 
              type="email" 
              value={emailEmty}
              onChange={(e) => setEmailEmty(e.target.value)}
              className="pt-9 px-6 pb-4 rounded-2xl w-full text-xl "
              style={ {background:' #141534', color: '#FFF', border: '2px solid #7871ff', boxShadow: '0 0 0px 4px #7871ff66' }}
              id="" />
            <button
              className="absolute rounded-full text-lg font-normal w-9 h-9 right-4 top-6"
              style={ { background: '#30305e' } }
              onClick={() => setEmailEmty('')}
            >x</button>
          </fieldset>

          <fieldset className="relative mb-4">
            <label className="absolute px-6 pt-2" style={{color: '#7871FF'}}>Correo electrónico</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="pt-9 px-6 pb-4 rounded-2xl w-full text-xl "
              style={ {background:' #141534', color: '#FFF', border: '2px solid #7871FF', boxShadow: '0 0 0px 4px #7871ff66' }}
              id="" />
            <button
             className="absolute rounded-full text-lg font-normal w-9 h-9 right-4 top-6"
             style={ { background: '#30305e' } }
             onClick={() => setEmail('')}
             >x</button>
          </fieldset>

          <fieldset className="relative">
            <label className="absolute px-6 pt-2" style={{color: '#7871FF'}}>Correo electrónico</label>
            <input 
              type="email"
              value="jose@jobchain.com"
              disabled
              className="pt-9 px-6 pb-4 rounded-2xl w-full text-xl "
              style={ {background:' #141534', color: '#FFF', }}
              id="" />
          </fieldset>
        </div>
      </main>
    </div>
  );
}
