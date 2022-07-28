const baseUrl =
  'https://react-http-dummy-57a85-default-rtdb.asia-southeast1.firebasedatabase.app/events.json';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new TypeError("Oops, we haven't got JSON!");
  }

  const data = await response.json();

  const events = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      events.push({
        id: key,
        ...element
      })
    }
  }

  return events;
};

export async function getFeaturedEvents() {
  return fetch(`${baseUrl}?orderBy="isFeatured"&equalTo=true`).then(
    handleResponse
  );
}
