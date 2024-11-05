export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QD9cEYGVI0ddEol7pbUgn3HSIn92Dr5G=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    console.log(data);
  
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
  
    return gifs;
  };
  