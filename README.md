# Angular Nodejs TEst

Test project for nodejs and angular using mongoose as database

## Quick Start

1. Clone the project.
   ```
   git clone https://github.com/aTeamIndia/node-angular-db-test.git
   ```
2. Install the client side dependencies. From root folder run the command
   ```
   cd client && npm install
   ```
3. Install server side dependencies. From root folder run the command
   ```
   cd server && npm install
   ```
4. Update the `config-db.js` file inside the server folder with your mongodb databse url

   ```javascript
   DB: "mongodb://<HOST>:<PORT>/<DB_NAME>";
   ```

5. Run the node js server by

   ```
   node server.js
   ```

6. Update the `API_URL` inside `environment` file

7. Run the client side application by the following command inside client folder
   ```
   ng serve
   ```
