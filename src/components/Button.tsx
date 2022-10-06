type Props = {
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

function Button(props: Props) {
  const { children, ...rest } = props;

  return (
    <button className="bg-black text-white p-2 rounded" {...rest}>
      {children}
    </button>
  );
}

export default Button;
