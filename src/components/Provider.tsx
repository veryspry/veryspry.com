import React, { useState } from 'react';

export const myContext = React.createContext({
  isDark: false,
  toggleTheme: () => null
});

const Provider = props => {
  const [isDark, setTheme] = useState(false);
  
  console.log({ isDark })

  return (
    <myContext.Provider value={{
      isDark,
      toggleTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
