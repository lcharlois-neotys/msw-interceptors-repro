# Issue reproduction

1. Run `npm i`
2. On a first terminal start the server, `npm run server`
3. On a second terminal run the working client (without @msw/interceptors), `npm run client`. It works
4. On a third terminal run the broken client (with @msw/interceptors), `npm run client-with-interceptors`. Client stucks and never received the response.

On the server side, looking at the logs we can see that the server never receive the 'end' event when using interceptors.
