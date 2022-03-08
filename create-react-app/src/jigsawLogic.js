const axios = require('axios');


const loginUrl = 'https://live.housingjigsaw.co.uk/auth/login/';


export const doLogin = async (username, password) => { 
  let bearerToken = null;
  let lastLogin = null;

  if (lastLogin > new Date() - 3600) {
    bearerToken = localStorage.getItem('bearerToken')
  } else {
    localStorage.clear();
 const tokens = await getCSRFTokens();
 /*
    // make auth request to Jigsaw
    const authCredentials = {
      Email: username,
      Password: password,
      __RequestVerificationToken: tokens.token,
    };

    const httpResponse = await axios.post({
      url: loginUrl,
      form: authCredentials,
      headers: {
        Cookie: tokens.cookies.join("; "),
        'Access-Control-Allow-Origin': '*',        
      },
      resolveWithFullResponse: true,
      simple: false,
    });

    for (const header of httpResponse.headers["set-cookie"]) {
      const matched = header.match(/access_token=([^;]*)/);
      if (matched) {
        bearerToken = matched[1];
        lastLogin = new Date();
        return bearerToken
      }
    } */
    
    
    return null;
  }
};


const getCSRFTokens = async function () {
  const httpResponse = await axios.get(loginUrl, {
    headers: {
      'mode': 'no-cors',
    }
  })
    const cookies = httpResponse.headers["set-cookie"].map(
    (cookie) => cookie.split(";")[0]
  );

  //const dom = new JSDOM(httpResponse.body);
  //const token = dom.window.document.querySelector(
  //  "input[name=__RequestVerificationToken]"
  //).value;
  const token = '';

  return {
    cookies,
    token,
  };
};
