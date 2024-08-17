import NavBar from './NavBar';
import '../app/globals.css'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
