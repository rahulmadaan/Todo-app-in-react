const app = require("./server/app.js");
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log("Listening on " + PORT));
