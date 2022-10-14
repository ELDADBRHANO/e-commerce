const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
  },
};

const store = "https://cheapshark-game-deals.p.rapidapi.com/stores"
async function productResponse() {
  try {
    return await fetch(
      store,
      options
    ).then((response) => response.json()).then((res)=>console.log(res))
  } catch (error) {
    console.error(error);
  }
}

export default productResponse;
