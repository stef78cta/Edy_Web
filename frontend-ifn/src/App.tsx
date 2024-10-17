import React from "react";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Bine ați venit la panoul de control Frontend IFN!</p>
    </Layout>
  );
};

export default App;
