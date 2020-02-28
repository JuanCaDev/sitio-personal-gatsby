import React from 'react';

import ilustration from '../img/img.svg'

import Form from '../components/contact.form'

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Juan</h1>
          <p className="text-xl">Creo aplicaciones web</p>
        </div>

        <img src={ ilustration } alt="Programador mirando el código" className="h-64"/>
      </div>

      <div>
        <Form/>
      </div>
    </div>
  </header>
)