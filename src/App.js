
import './App.css';
import AnimalsIndex from './Components/Table/AnimalsIndex';
import MainNavBar from './Components/Layout/MainNavBar';

function App() {
  const mesAnimaux = [
    {
      name: 'rosi',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'gaston',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Pablo',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Lewis',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    
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
