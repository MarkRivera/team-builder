import React, { useState } from 'react';
import Form from './Form.js';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: "Mark",
    email: "Mark@google.com",
    role: "Developer"
  }]);

  const addTeamMember = member => {
    setTeamMembers([...teamMembers, member ]);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        { 
          teamMembers.map((element, index) => {
            return (
            <section key={index + 1} >
              <h3>
                {element.name}
              </h3>
              <p>
                {element.email}
              </p>
              <p>
                {element.role}
              </p>
            </section>
            )
          })
        }
      </header>
      
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
