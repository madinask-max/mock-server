const express = require('express');
const app = express();
app.use(express.json()); 

app.use((req, res, next) => {
    let curl = `curl -X ${req.method} 'http://localhost:3000${req.originalUrl}'`;

    // headers
    const headers = [];
    for (const key in req.headers) {
        headers.push(`-H "${key}: ${req.headers[key]}"`);
    }

    // body
    if (req.body && Object.keys(req.body).length > 0) {
        curl += ` \\\n-H "Content-Type: application/json"`;
        curl += ` \\\n-d '${JSON.stringify(req.body)}'`;
    }

    curl += ` \\\n${headers.join(' ')}`;

    console.log("\n🔹 CURL REQUEST:\n", curl, "\n");

    next();
});

// Example mock API 2 (POST)
app.post('/api/login', (req, res) => {
    const { FirstName, MiddleName, LastName } = req.body || {};

    if (!FirstName || !LastName) {
        return res.status(400).json({
            success: false,
            message: "FirstName and LastName are required"
        });
    }

    const completeName = `Welcome ${FirstName} ${MiddleName} ${LastName}`;

    res.json({
        success: true,
        CompleteName: completeName,
        token: "mock-jwt-token-123"
    });
});

// Example mock API 3 (dynamic param)
app.get('/api/order/:id', (req, res) => {
    res.json({
        orderId: req.params.id,
        status: "SHIPPED",
        amount: 2500
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
});