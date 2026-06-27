import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="grid h-dvh w-full grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto w-full max-w-lg overflow-y-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
