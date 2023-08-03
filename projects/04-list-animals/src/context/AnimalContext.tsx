import React, { createContext, useState } from 'react';

import data from '../assets/data.json'
import { AnimalsType, Props } from '../types/interfaceContext.d';

export const AnimalContext = createContext<AnimalsType | null>(null);

export const AnimalProvider: React.FC<Props> = ({ children }) => {
  const [animals] = useState(data)

  return (
    <AnimalContext.Provider value={{ animals }}>
      { children }
    </AnimalContext.Provider>
  )
}