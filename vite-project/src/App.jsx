import './App.css'
import Card from './components/Card/card'
import Header from './components/header/header';

function App() {

  return (
    <>
      <div className="headd">
        <Header />
      </div>
      <div className="cardd">
        <Card
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
          name="Pizza Margheritta"
          desc="Mozzarella pendiri ,pomidor sousu və reyhan"
          price="10 AZN"
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
          name="Hamburger"
          desc="Ət ,pendir,kahı və sous ilə hazırlanan burger"
          price="8 AZN"
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1700673590238-a0e3a3795ae2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D"
          name="Şorbalar"
          desc="Gündəlik təzə tərəvəzlərdən hazırlanan isti şorbalar"
          price="6 AZN"
        />
      </div>
    </>
  );
}

export default App
