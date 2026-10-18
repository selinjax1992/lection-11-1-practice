// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

console.log(window.fetch);
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    if (err.message === '404') {
      alert('Page not found');
    }
  });
