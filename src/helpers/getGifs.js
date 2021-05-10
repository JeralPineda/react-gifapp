export const getGifs = async (category) => {
   // Peticion http
   const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=yfxK1j1iSVjkUj0lGKX2RKL8Oqyu0svM`;

   const resp = await fetch(url);

   //   Extraemos la data de la petición
   const { data } = await resp.json();

   const gifs = data.map((img) => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url,
      };
   });

   return gifs;
};
