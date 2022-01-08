import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

interface User {
  nome: string;
  idade: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [hobby, setHobby] = useState("");

  const handleSubmit = (nome: string, idade: number, hobby: string) => {
    const person = { nome, idade, hobby };
    setUsers([...users, person]);
  };
  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <Input
            placeholder="Nome"
            label="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
          Idade:
          <Input
            placeholder="Idade"
            onChange={(e) => setIdade(Number(e.target.value))}
          />
          Hobby:
          <Input
            placeholder="Hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
          <Button onClick={() => handleSubmit(nome, idade, hobby)}>
            Enviar
          </Button>
          <div>
            {users.map((item, i) => (
              <Card
                nome={item.nome}
                idade={item.idade}
                hobby={item.hobby}
                key={item.idade}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
