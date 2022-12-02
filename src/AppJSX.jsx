import logo from './logo.svg';
import './App.css';

function App() {
  const name ="민디"
  const list = ['우유', '딸기', '바나나'];
  return(
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Mindy</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </>
  )
}

export default AppJSX;
