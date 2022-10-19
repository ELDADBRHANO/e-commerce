
const productsApi = "https://api.escuelajs.co/api/v1/products"
async function getResponse() {
  try {
    return await fetch(productsApi).then((response) => response.json())
   } catch (error) {
     console.log(error);
   }
  
}
export default getResponse;



