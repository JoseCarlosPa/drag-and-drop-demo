import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';

const App:React.FC = () => {

    const [toDo,setToDo] = useState<string>("");

    console.log(toDo);

  return (
   <div className="App">
   <span className="heading">LeadSales</span>
       <InputFeild toDo={toDo}
        setToDo={setToDo}
       />
   </div>
  );
}

export default App;
