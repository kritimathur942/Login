import React, {useState} from 'react'





function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
   <form onSubmit={submitHandler}>
       <div className="form-inner">
           <h2>
               Welcome Back!
           </h2>
           <p>subtitle goes here</p>
            {(error != "") ? ( <div className='error'>{error}</div>) : ""}
           <div className="form-group">
               <label htmlFor="name" ></label>
               <input type="text" name='name' id='name'placeholder='Name' onChange= {e => setDetails({...details, name: e.target.value})} value={details.name} />
           </div>
           <div className="form-group">
               <label htmlFor="email"></label>
               <input type="email" name="email" id="email" placeholder='Email' onChange= {e => setDetails({...details, email: e.target.value})} value={details.email} />
           </div>
           <div className="form-group">
               <label htmlFor="password"></label>
               <input type="password" name='password' id='password' placeholder='Password' onChange= {e => setDetails({...details, password: e.target.value})} value={details.password}/>
           </div>
           <input type="submit" value="LOGIN" />
       </div>
   </form>
  )
  
}
export default LoginForm