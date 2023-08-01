**Sun Co. Instructions** <br />
To start locally, the dependency `json-server` must first be installed globally.

To do so: 
- First open terminal and type in `npm install -g json-server`.
- Next install the repository's packages using `npm install`.
- In another terminal, start the `json-server` by running `npm run server`.
- Start the frontend by running `npm run dev`.
- Finally, navigate to `localhost:5173`.

This version of the project demonstrates hitting a RESTful API that returns hardcoded data for products, otherwise, hardcoded products are imported in. 

Netlify hosting only serve static files, therefore API functionality provided by `json-server` will not be avaiable in the production environment.