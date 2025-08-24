import { useState } from "react";

function RegisterLogin() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      
      <form>
        {!isLogin && (
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Enter name" required />
          </div>
        )}
        
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter email" required />
        </div>

        <div>
          <label>Password: </label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={{ color: "blue", cursor: "pointer" }}>
        {isLogin ? "New user? Register here" : "Already have an account? Login here"}
      </p>
    </div>
  );
}

export default RegisterLogin;
