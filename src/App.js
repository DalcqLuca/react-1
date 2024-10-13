
import './App.css';
import AnimalsIndex from './Components/Table/AnimalsIndex';
import MainNavBar from './Components/Layout/MainNavBar';

function App() {
  const mesAnimaux = [
    {
      name: 'rosi',
      species: 'Front-end Developer',
      race: 'lindsay.walton@example.com',
      birthdate: 'Member',
    },
    {
      name: 'gaston',
      species: 'Front-end Developer',
      race: 'lindsay.walton@example.com',
      birthdate: 'Member',
    },
    {
      name: 'Pablo',
      species: 'Front-end Developer',
      race: 'lindsay.walton@example.com',
      birthdate: 'Member',
    },
    {
      name: 'Lewis',
      species: 'Front-end Developer',
      race: 'lindsay.walton@example.com',
      birthdate: 'Member',
    
  },
    
  ];

  const mesAnimaux2 = [
    {
      name: 'marcel',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'léon',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'jean',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'luc',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    
  },
    
  ]
  return (
    <div className="App">
      <MainNavBar/>
      <AnimalsIndex title="mes animaux"  description="la liste des animaux de la maison" elements={mesAnimaux}/>  
    </div>
  );
}

export default App;
