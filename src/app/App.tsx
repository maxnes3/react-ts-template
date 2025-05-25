import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Footer, Header, AuthLayout } from '@/components';
import { AuthProvider } from '@/hooks/auth';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AuthLayout>
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
          <Footer />
        </AuthLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
