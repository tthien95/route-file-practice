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
      });
    }
  }

  return events;
};

if (process.env.NODE_ENV == 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

export function getAllEvents() {
  return fetch(`${baseUrl}`).then(handleResponse);
}

export async function getFeaturedEvents() {
  return fetch(`${baseUrl}?orderBy="isFeatured"&equalTo=true`).then(
    handleResponse
  );
}

export async function getEventById(id) {
  const result = await fetch(`${baseUrl}?orderBy="$key"&equalTo="${id}"`).then(
    handleResponse
  );

  return result.length > 0 ? result[0] : null;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const DUMMY_EVENTS = await getAllEvents();

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
