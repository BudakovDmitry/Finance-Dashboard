import { FC } from 'react';
import { getAllGoals } from 'src/http/api/goalsApi';
import { ReactChildren } from 'src/types/types';
import { Logger } from 'src/utils';
import { SWRConfig } from 'swr';

export interface SwrProviderType {
  children?: ReactChildren;
}

// const localStorageProvider = () => {
//   const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

//   window.addEventListener('beforeunload', () => {
//     const appCache = JSON.stringify(Array.from(map.entries()))
//     localStorage.setItem('app-cache', appCache)
//   })

//   return map
// }

const logger = (useSWRNext: any) => {
  return (key: any, fetcher: any, config: any) => {
    const extendedFetcher = (first: any, ...args: any) => {
      Logger.log('SWR Request:', key, config.cache);

      return fetcher(first, ...args);
    };

    return useSWRNext(key, extendedFetcher, config);
  };
};

export const SwrProvider: FC<ReactChildren> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        fetcher: getAllGoals,
        revalidateOnFocus: false,
        use: [logger]
      }}
    >
      {children}
    </SWRConfig>
  );
};
