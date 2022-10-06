import Button from '~/components/Button';
import Layout from '~/components/Layout';
import useRouter from '~/hooks/useRouter';

function Root() {
  const { push } = useRouter();

  const onClick = () => {
    push('/about');
  };

  return (
    <Layout>
      <span className="text-white font-bold mb-4">root</span>
      <Button onClick={onClick}>about</Button>
    </Layout>
  );
}

export default Root;
