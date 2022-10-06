import { useContext } from 'react';
import { BrowserRouterBasenameContext } from '~/libs/BrowserRouter';
import { RouterDispatchPathContext } from '~/libs/Router';

function useRouter() {
  const basename = useContext(BrowserRouterBasenameContext);
  const setPathname = useContext(RouterDispatchPathContext);

  if (!setPathname)
    throw new Error('Cannot find RouterDispatchPathContext.Provider');

  const push = (path: string) => {
    history.pushState(null, '', basename + path);
    setPathname(basename + path);
  };

  return { push };
}

export default useRouter;
