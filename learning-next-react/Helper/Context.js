"use client";

import React, { createContext } from 'react';
export const MyContext = createContext()

const Context = () => {
    const username = "Ansh Singh Sonkhia"   // we want this username to be available to all the components.
  return (
    <div>
        <MyContext.Provider value={username}>
            <h1 className="text-4xl font-bold text-center">
            Learning Context API - got the username from the context
            </h1>
        </MyContext.Provider>
    </div>
  )
}

export default Context