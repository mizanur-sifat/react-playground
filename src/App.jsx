import { useRef } from "react";
import ContactForm from "./components/ContactForm";
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DemoForm from "./components/DemoForm";
import MutableProperty from "./components/MutableProperty";
import CachingbyUseRef from "./components/CachingbyUseRef";
import UseState1 from "./components/UseState1";
import ToDo_useState from "./components/ToDo_useState";
import FormManageByuseState from "./components/FormManageByuseState";


const App = () => {
  let marks = 79;
  const city = ['Dhaka', 'Barishal', 'Sylhet', 'Rangpur'];
  const abroadCity = ['London', 'Delhi', 'Tehran', 'Gaza'];

  const itemObject = {
    name: 'Mizanur Rahman Sifat',
    age: 27,
    city: 'Dhaka'
  }

  const ButtonClick = () => {
    alert("Alhamdulillah");
  }

  // myimg is linked to the img html tag
  let myImg = useRef();
  // change function is called after clicking the button and then execute the myImg manipulation
  const change = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute('height', '100px');
    myImg.current.setAttribute('width', '150px');
  }

  return (
    <div>
      {/* <Header />
            <Hero />
            <ContactForm/>
            <Footer/> */}

      {/* {
        marks >= 80 ? <h1> Brilliant Result</h1> : <h1> Good Result</h1>
      } */}
      <Hero title="React Playground" description="Props passing from mother to child 'Hero'" />
      <DemoOne item={itemObject} />
      <DemoTwo ButtonClick={ButtonClick} />

      {(() => {
        if (marks >= 80) {
          return <h1>A+</h1>
        }
        if (marks < 80) {
          return <h1>A</h1>
        }

      })()}

      <ol>
        {
          city.map((item, i) => {
            return <li key={i.toSring}>{item}</li>
          })
        }
      </ol>

      <hr />

      <ul>
        {abroadCity.map((item, i) => <li key={i}> {item}</li>)}
      </ul>

      <ContactForm />

      {/* Dom Manupulation using useRef */}
      <img ref={myImg} src="https://placehold.co/400" alt="" />
      <button onClick={change} >Click</button>

      <hr />

      <DemoForm />
      <MutableProperty />
      <hr />
      <CachingbyUseRef />

      <hr />
      <UseState1/>
      <hr />
      <ToDo_useState/>
      <hr />
      <FormManageByuseState/>
    </div>
  );
};

export default App;
