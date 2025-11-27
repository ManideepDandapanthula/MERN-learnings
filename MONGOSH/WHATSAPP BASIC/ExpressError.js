class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.message = message;   // ✅ correct
        this.status = status;
    }
}

module.exports = ExpressError;
