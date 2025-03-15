import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex min-h-screen'>
      <SideMenu />
      <main className='bg-white flex-1 over-flow-auto'>{children}</main>
    </div>
  );
}

export default MainLayout