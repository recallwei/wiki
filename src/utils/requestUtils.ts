export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
  Put = 'PUT',
  Patch = 'PATCH'
}

export const sendRequest = (
  url: string,
  method: RequestMethod,

  data?: any
) =>
  fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: data ? JSON.stringify(data) : null
  })
    .then((response) => {
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // eslint-disable-next-line quotes
        throw new TypeError("Oops, we haven't got JSON!")
      }
      return response.json()
    })
    .catch((error) => ({ error: true, errorMessage: error }))
