import { useState } from "react";
import { JigsawGetRequest } from "./JigsawGetRequest";
import { doLogin } from "./jigsawLogic";

export const JigsawAuth = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [needsAuth, setNeedsAuth] = useState(true);
 const [authError, setAuthError] = useState(false);

  const setAuth = () => {
  setNeedsAuth(!needsAuth);
}



const doJigsawLogin = async function() { 
  const token = await doLogin(username, password);
  if (!token) {
    console.log('Error logging in');
    setAuthError(true);
  } else {
    localStorage.setItem('jigsawToken', token);
    setNeedsAuth(false);
  }
}


  return (
     needsAuth ?    
      <div class="govuk-form-group lbh-form-group">
      <label class="govuk-label lbh-label" for="input-example">
        Jigsaw Username
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label class="govuk-label lbh-label" for="input-example">
        Jigsaw Password
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {authError && <span class="govuk-error-message lbh-error-message">Error validating credentials</span>}
      <button class="govuk-button lbh-button" data-module="govuk-button"onClick={doJigsawLogin}> Authenticate with Jigsaw
      </button>
    </div>  
    : <div><JigsawGetRequest setAuth={setAuth}/></div>
  );
};


