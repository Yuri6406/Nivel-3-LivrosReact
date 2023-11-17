import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLAnchorElement).render(
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
);
