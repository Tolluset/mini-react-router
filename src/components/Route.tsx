import { useContext } from 'react';
import { RouterPathContext } from './Router';

type Props = {
  path: string;
  component: React.ReactNode;
};

function Route(props: Props) {
  const { path, component } = props;

  const pathname = useContext(RouterPathContext);
  if (!pathname) throw new Error('Cannot find RouterPathContext.Provider');

  if (pathname !== path) return null;

  return <div>{component}</div>;
}

export default Route;
