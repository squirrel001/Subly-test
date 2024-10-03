import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import { FileData } from './types/FileData';
import Endpoint from './api/Endpoint.json'
// Remove this from Production version
// import Data from './test/data.json'

const App: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');

  useEffect(() => {
    // Fetch data from the endpoint
    const fetchData = async () => {
      const response = await fetch('https://run.mocky.io/v3/f13b1c78-a3ed-4920-87fc-d3298f81baed');
      const data: FileData[] = await response.json();
      // Remove line below for testing
      // const data = Data;
      setFiles(data);
    };
    fetchData();
  }, []);

  // Filter by status and logic
  const filteredFiles = files.filter((file) => {
    const statusMatch = statusFilter === 'all' || file.status === statusFilter;
    const languageMatch =
      languageFilter === 'all' || file.languages.includes(languageFilter);
    return statusMatch && languageMatch;
  });

  return (
    <div className="app">
      <div className="filters">
        <p>Status: </p>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="ready">Ready</option>
          <option value="transcribing">Transcribing</option>
          <option value="error">Error</option>
        </select>

        <p>&nbsp;&nbsp;Languages: </p>
        <select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="all">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <CardList files={filteredFiles}/>
    </div>
  );
};

export default App;