import React,{useState,useRef,useEffect} from "react";
import "./style.css";

export default function App() {

  const refcontainer = useRef(null);
  const divcontainer = useRef(null);
  const [user,setUser] = useState();
  console.log(refcontainer);

  const handleSubmit = (e)=>{
  e.preventDefault();
  // console.log(refcontainer.current.value); 
   setUser(refcontainer.current.value);
  // console.log(divcontainer.current.getBoundingClientRef());
}
useEffect(()=>{
  refcontainer.current.focus();
},[]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" ref={refcontainer}/>
          <button type='submit' className='btn'>submit</button>
          <h2>{user}</h2>
        </div>
      </form>    
      <div ref={divcontainer}></div>
    </>
  );
}
