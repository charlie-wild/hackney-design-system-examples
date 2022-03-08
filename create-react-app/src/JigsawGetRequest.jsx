import { axios } from 'axios';

export const JigsawGetRequest = (props) => {    

    return (
<>    
          <button class="govuk-button lbh-button" data-module="govuk-button" onClick={doJigsawGetRequest}>
        Get Jigsaw Data
      </button>
      <button class="govuk-button lbh-button" style={{marginLeft: '15px'}}data-module="govuk-button" onClick={() => { props.setAuth() }}>Authenticate Again</button>
      </>

    );
}


const doJigsawGetRequest = async function() {
  const token = localStorage.getItem('jigsawToken');

  return doGetRequest('https://customers.housingjigsaw.co.uk/api/Customer/580739/Notes/',{ Authorization: `Bearer ${token}` });
};

const doGetRequest = async function(uri,headers) {
  let options = { uri };
  if (headers) options.headers = headers; 

  options.resolveWithFullResponse = true;
  const httpResponse = await axios.get(options);

  return JSON.parse(httpResponse.body);
};