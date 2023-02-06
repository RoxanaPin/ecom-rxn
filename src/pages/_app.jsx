import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import './../styles/index.css';

// npm i usehooks-ts scriu in consola

export const UiContext = createContext();

export default function App({ Component, pageProps }) {
  const [perRow, setPerRow] = useLocalStorage('perRow');
  const [itemsPerRow, setItemsPerRow] = useState('4/row');
  const [pagination, setPagination] = useState({
    perPage: 8,
    page: 1,
    total: 0,
  });

  useEffect(() => {
    setItemsPerRow(perRow);
  }, [perRow, setItemsPerRow]);

  return (
    <UiContext.Provider
      value={{
        itemsPerRow,
        setItemsPerRow: setPerRow,
        pagination,
        setPagination,
      }}
    >
      <Component {...pageProps} />;
    </UiContext.Provider>
  );
}
