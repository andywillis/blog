export default async function getData(endpoint) {
  try {
    const response = await fetch(endpoint);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
