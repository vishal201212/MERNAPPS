import { Link } from "react-router-dom"



const Navigation = ()=>{

    return(
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<Link to="/" className="navbar-brand">EMP</Link>  
   


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/Home" className="nav-link">Home</Link>
      </li>
   
      
  
    </ul>
   
  </div>
</nav>
        </div>
    )
} 



export default Navigation