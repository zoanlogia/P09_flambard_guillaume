const path = 'http://localhost:3000/data/data.json';

export const fetchData = async () => {
  const results = await fetch(path);
  const dataApi = await results.json();
  return dataApi
}
