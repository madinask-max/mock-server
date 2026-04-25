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