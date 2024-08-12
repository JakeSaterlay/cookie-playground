# Cookie Playground

## Running the project

1. Run `npm i` at the root of the project and in the `test-site` folder.

2. run `npm start` at the root of the project to start the server

3. run `npm start` in the `test-site` folder

And you're good to go!

## What does this show?

### Server

The code on the server shows two endpoints:

- `set-cookie`
- `check-cookies`

`set-cookie` is a get request that sets a cookie on the server, that is sent back to the client with the `httpOnly` flag set to `true`. This means that the cookie being set is only available via HTTP and cannot be altered by the browser.

`check-cookies` reads each cookie that comes through in the request, and sends them back in the response. The `cookie-parser` library enables us to access the cookies from the request in an easier way.

See https://www.npmjs.com/package/cookie-parser

### Client

The code on the client is a simple React application that uses `axios` to query the server that you need to run with this project (above).

On load, the client will call the `set-cookie` endpoint which as explained above, sets a cookie on the server. The app then immediately calls the `check-cookies` endpoint after this, to return the cookies to the client recieved in the request, in a response from the server which is then displayed on the client. These calls to the server set the `withCredentials` flag to `true`. This means that cookies are passed back to the server with every request, which enables us to read them on the server.

A `setFrontEndCookie` function which is called on button click in the client demonstrates how a cookie can be created in the client, which can then subsequently get sent back to and read by the server on every request.

This is demonstrated by then calling the `checkCookies` function, after setting the front end cookie on the client.

`js-cookie` is used as a nicer way to handle cookies on the client. See https://www.npmjs.com/package/js-cookie
