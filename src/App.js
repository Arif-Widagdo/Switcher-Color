// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Button from './Button';

function App() {
  const [color, setColor] = useState(getWindow());
  console.log(color);

  const switchColor = (colorSet) => {
      setColor(colorSet);
      localStorage.setItem('color', colorSet);
  } 

  const eventSwitcher = (ev) => {
    console.log(ev);
      if(ev.key) {
        if(ev.newValue){
          if(ev.newValue !== 'red' || ev.newValue !== 'grenn' || ev.newValue !== 'blue'){
            setColor('purple')
          }else{
            setColor(ev.newValue)
          }
        }else{
          setColor('purple')
        }
      }
  }
  
  useEffect(() => {
    console.log('rendered')
      if (color === null) {
        setColor('purple')
      } else {
        setColor(color)
      }
  },[])

  useEffect(() => {
    window.addEventListener('storage', eventSwitcher)
    return () => {
      window.removeEventListener('storage', eventSwitcher)
    }
  }, []);

  return (
    <div className={`App ${color}`}>
      <div>
        <h1>Color Switcher</h1>
        <Button color="red" switchColor={switchColor}/>
        <Button color="green" switchColor={switchColor}/>
        <Button color="blue" switchColor={switchColor}/>       
      </div>
    </div>
  );
}

export default App;


function getWindow () {
  let windows = window.localStorage.getItem('color');

  return windows;
}