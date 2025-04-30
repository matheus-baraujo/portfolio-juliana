'use client'

import { createContext, useContext, useState, useEffect} from 'react';

const Contexto = createContext();

export const usarContexto = () => {
  return useContext(Contexto);
};

export const ContextoProvider = ({ children }) => {

  //tema da pagina (inCompany tem um tema diferente)
  //deafult - inCompany
  const [tema, setTema] = useState('default');


  return (
    <Contexto.Provider value={{ tema, setTema }}>
      {children}
    </Contexto.Provider>
  );
};