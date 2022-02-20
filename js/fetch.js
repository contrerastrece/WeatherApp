export { getApi };

const getApi = async () => {
    let options = {
        method: "GET",
        statusCode: 200,
        mode:"no-cors",
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            
        }
    }
//   const url = `https://www.metaweather.com/api/location/search/?query=${search}`;
  const url = "https://www.metaweather.com/api/location/search/?query=san";
  
  const response = await fetch(url)
  console.log(response);
  const data = await response.json();

  
 console.log(data);   
  return data;
};
