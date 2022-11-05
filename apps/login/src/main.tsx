import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';


import LoginApp from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<StrictMode><LoginApp /></StrictMode>
);
