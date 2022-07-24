export enum RequestMethod {
  Get = "GET",
  Post = "POST",
  Delete = "DELETE",
  Put = "PUT",
  Patch = "PATCH",
}

export async function sendRequest(
  url: string,
  method: RequestMethod,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
) {
  return fetch(url, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data && JSON.stringify(data),
  })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .catch((error) => {
      return { error: true, errorMessage: error };
    });
}
