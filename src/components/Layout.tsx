type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="grid place-items-center content-center h-screen bg-gray-800">
      {children}
    </div>
  );
}

export default Layout;
