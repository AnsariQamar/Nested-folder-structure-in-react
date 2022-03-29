import React from 'react';
import './style.css';
import Folder from './component/Folder';
import explorer from './data/folderData';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Folder explorer={explorer} />
    </div>
  );
}
