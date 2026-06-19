import { Outlet } from 'react-router';
import Header from './Header';

function AppLayout() {
  return (
    <div className="min-h-dvh w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
