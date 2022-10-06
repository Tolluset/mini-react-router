import Button from '~/components/Button';
import Layout from '~/components/Layout';
import useRouter from '~/hooks/useRouter';

function About() {
  const { push } = useRouter();

  const onClick = () => {
    push('/');
  };

  return (
    <Layout>
      <span className="text-white font-bold mb-4">about</span>
      <Button onClick={onClick}>go main</Button>
    </Layout>
  );
}

export default About;
