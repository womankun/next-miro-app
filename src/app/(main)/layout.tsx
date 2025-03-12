const MainLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen'>
      <div className='bg-gray-500'>side</div>
      <main className='bg-slate-50 flex-1 over-flow-auto'>{children}</main>
    </div>
  );
}

export default MainLayout