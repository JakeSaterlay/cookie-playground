import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

// Middleware to set a cookie
app.use((req: Request, res: Response, next: NextFunction) => {
  res.cookie("testCookie", "cookieValue", { httpOnly: true });
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Cookie has been set!");
});

app.get("/check-cookies", (req: Request, res: Response) => {
  const cookies = req.cookies;
  console.log("COOKIES", cookies);
  res.send(cookies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
