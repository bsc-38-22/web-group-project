import  { NavLink } from 'react-router-dom';


import './App.css';

export const App = () => {
   return (
    
    <div className= "flex flex w-full bg-red-500 items start justify start">
      <div className="flex flex row h-10 w-full items-start justify start">
        Header
      </div>
      <div className="flex flex-row w-full items h-auto bg grey-200 items-start justify">
      <div className="flex flex col w-h-full bg-orange-300"></div>
    <div>My App</div>
    <NavLink to="/home">Go to home</NavLink><br/>
    <NavLink to="/home">Go to home</NavLink>
    </div>
    <div className="flex flex-row w-full items h-20 bg green 600 items-start justify" footer></div>
    main content
    <form>
      <input type="text" placeholder="Enter" ></input>
    </form>
    </div>

   )
}
 
export default App;


