
module.exports = (req, res, next) => {
    let curl = `curl -X ${req.method} 'http://localhost:3000${req.originalUrl}'`;

    if (req.body && Object.keys(req.body).length > 0) {
        curl += ` -H "Content-Type: application/json"`;
        curl += ` -d '${JSON.stringify(req.body)}'`;
    }

    console.log("\n🔹 CURL REQUEST:\n", curl, "\n");

    next();
};