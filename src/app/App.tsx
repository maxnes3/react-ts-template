import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Footer, Header, AuthLayout } from '@/components';
import { AuthProvider } from '@/hooks/auth';
import './App.scss';
import { NewsProvider } from '@/hooks/news';
import { DirectionsProvider } from '@/hooks/directions';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NewsProvider>
          <DirectionsProvider>
            <Header />
            <AuthLayout>
              <Routes>
                {routes.map((route) => (
                  <Route {...route} key={route.path} />
                ))}
              </Routes>
              <Footer />
            </AuthLayout>
          </DirectionsProvider>
        </NewsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
