import { useState } from 'react';
import './App.css';
import Home from './components/screens/Home/Home';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
