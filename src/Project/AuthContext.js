import { createContext } from "react";
 export const AuthContext = createContext({});
// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [userName, setUserName] = useState('');

//   return (
//     <AuthContext.Provider value={{ userName, setUserName }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
