import { app } from "./utils/app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR", error);
    });

    app.listen(PORT || 5000, () => {
      console.log(`🚀 SERVER IS LISTENING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION ERROR", err);
  });
