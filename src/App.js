import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MainLayout from './layout/MainLayout';
import { ConfigProvider } from 'antd';
import storeAndPersistor from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <ConfigProvider
      theme={{
        dark: true,
        token: {
          colorPrimary: '#246bfd',
          fontFamily: "'Poppins', sans-serif"
        },
      }}
    >
      <div className='main min-h-screen bg-[--layout-header-background]'>
        <BrowserRouter>
          <Provider store={storeAndPersistor.store}>
            <PersistGate loading={null} persistor={storeAndPersistor.persistor}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index path="/" element={<Home />} />
                </Route>
              </Routes>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
