import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex min-h-screen'>
      <SideMenu />
      <main className='ml-56 bg-white flex-1 over-flow-auto'>{children}</main>
    </div>
  );
}

export default MainLayout