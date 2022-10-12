const productsApi = "https://fakestoreapi.com/products"
async function getResponse() {
  try {
    return await fetch(productsApi).then((response) => response.json())
   } catch (error) {
     console.log(error);
   }
  
}
export default getResponse;