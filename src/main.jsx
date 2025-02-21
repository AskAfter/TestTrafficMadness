import '.././node_modules/@ibm/plex-sans/css/ibm-plex-sans-all.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from '../src/components/App/App';
// import { Provider } from './components/ui/provider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </StrictMode>
);
