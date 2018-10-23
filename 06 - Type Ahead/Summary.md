# Summary

## Notes

1. **Fetch API**: provides a JS interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It provides a global **`fetch()`** method that fetches resources asynchronously across the network.

    `fetch` vs `jQuary.ajax()`:

    * The Promise returned from `fetch()` **won't reject on HTTP error status** even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with `ok` status set to false), and it will only reject on network failure or if anything prevented the request from completing.

    * By default, `fetch` **won't send or recieve any cookies** from the server, resulting in unauthenticated requests if the site relies on maintaining a user session (to send cookies, the credentials init option must be set). The spec changed the default credentials policy to `same-origin`.

    `fetch()` takes on argument - the path to the resource you want to fetch - and returns a promise containing the response (a Response obj). This is just an HTTP response, not the actual JSON. Use the **`json()`** method to extract the JSON body content from the response:
    
    ```
    fetch('http://example.com/movies.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
    ```

