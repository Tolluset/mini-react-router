import { createContext } from 'react';

type Props = {
  children: React.ReactNode;
  basename?: string;
};

export const BrowserRouterBasenameContext = createContext<string>('/');

function BrowserRouter({ children, basename = '/' }: Props) {
  return (
    <BrowserRouterBasenameContext.Provider value={basename}>
      {children}
    </BrowserRouterBasenameContext.Provider>
  );
}

export default BrowserRouter;
