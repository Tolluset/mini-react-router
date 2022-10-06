import { useContext } from 'react';
import { RouterDispatchPathContext } from '~/components/Router';

function useRouter() {
  const setPathname = useContext(RouterDispatchPathContext);
  if (!setPathname)
    throw new Error('Cannot find RouterDispatchPathContext.Provider');

  const push = (path: string) => {
    history.pushState(null, '', path);
    setPathname(path);
  };

  return { push };
}

export default useRouter;
