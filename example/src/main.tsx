import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import { FormRenderer } from '@acongmr/antd-components';
import 'antd/dist/reset.css';

const App = () => {
  return <div style={{ padding: 24 }}>
    <h2>组件示例</h2>
    <FormRenderer
      fields={[{ name: 'name', label: '姓名', type: 'input', required: true }]}
      onSubmit={(v) => console.log('submit', v)}
    ></FormRenderer>

  </div>
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
