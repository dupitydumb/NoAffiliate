import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Our Chrome Extension
      </h1>
      <img
        src="src/assets/icon.png"
        alt="Extension Icon"
        className="w-32 h-32 mb-4"
      />
      <p className="mb-4 text-lg">Anti shopee affiliator spammmmmmm</p>
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-md w-full mb-4 text-black">
        <h2 className="text-3xl font-bold mb-4">Installation Instructions</h2>
        <img src="src/assets/tutorial.gif" alt="Step 1" className="mb-4" />
        <ol className="list-decimal list-inside"></ol>
      </div>
      <a
        href="src/assets/AntiAffiliate.zip"
        download
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Extension
      </a>
    </div>
  );
}

export default App;
