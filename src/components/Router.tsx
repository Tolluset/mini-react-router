import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type Props = {
  children: React.ReactNode;
};

export const RouterPathContext = createContext<string>('/');
export const RouterDispatchPathContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => {});

function Router({ children }: Props) {
  const [pathname, setPathname] = useState<string>(location.pathname);

  useEffect(() => {
    window.onpopstate = () => {
      setPathname(location.pathname);
    };
  }, []);

  return (
    <RouterPathContext.Provider value={pathname}>
      <RouterDispatchPathContext.Provider value={setPathname}>
        {children}
      </RouterDispatchPathContext.Provider>
    </RouterPathContext.Provider>
  );
}

export default Router;
