const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
  },
};

async function productResponse() {
  try {
    return await fetch(
      "https://cheapshark-game-deals.p.rapidapi.com/stores",
      options
    ).then((response) => response.json())
  } catch (error) {
    console.error(error);
  }
}

export default productResponse;
