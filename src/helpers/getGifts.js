export const getGift = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ufJCD5ldr5d6NNCJtWAHHdiTUaqpbyeq&q=${ category }&limit=30`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifts = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifts;
}
