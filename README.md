app.use([path], middlewareFunction)
path (optional) → which URLs it applies to
middlewareFunction → function that runs before route handler

app.use()
“run this logic for requests before they reach API endpoints”

Important: next()
If you don’t call next() → request will hang.


Request comes in
   ↓
app.use() middleware runs
   ↓
other app.use() runs
   ↓
app.get/app.post route runs
   ↓
response sent

mock-server/
│
├── server.js          → starts server
├── app.js             → configures express app
│
├── routes/
│   └── authRoutes.js  → API routes
│
├── controllers/
│   └── authController.js → business logic
│
├── middleware/
│   └── logger.js      → curl logger
│
└── package.json

server.js → Starts the server and listens on a port
app.js → Configures Express app (middleware + routes)
routes/ → Defines API endpoints and maps them to controllers
controllers/ → Contains business logic and builds responses
middleware/ → Runs reusable logic before/after requests (e.g., logging)
package.json → Manages project dependencies and scripts

START SERVER
shaikmadinabasha@shaiks-MacBook-Pro mock-server % node server.js
Server running on http://localhost:3000