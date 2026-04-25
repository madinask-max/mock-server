

exports.login = (req, res) => {
    const { FirstName, MiddleName, LastName } = req.body || {};

    if (!FirstName || !LastName) {
        return res.status(400).json({
            success: false,
            message: "FirstName and LastName are required"
        });
    }

    const completeName = `Welcome ${FirstName} ${LastName}Basha`;

    res.json({
        success: true,
        CompleteName: completeName,
        token: "mock-jwt-token-123"
    });
};