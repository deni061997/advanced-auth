import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

(async () => {
   try {
      await mongoose.connect(process.env.DB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });

      app.listen(PORT, () =>
         console.log(`App has been started on port ${PORT}`)
      );
   } catch (error) {
      console.log(error);
   }
})();
