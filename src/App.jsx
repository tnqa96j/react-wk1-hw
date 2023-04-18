import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home'
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query';
//import { feedImages } from './api';
//feedImages();


export default function App() {

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

