import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { RouterConfig } from "./routes/RouterConfig";

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
     <RouterConfig />
    </React.StrictMode>
  )
}
