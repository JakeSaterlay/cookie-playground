import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.get("/set-cookie", (req: Request, res: Response) => {
  res.cookie("testCookie", "cookieValue", { httpOnly: true });
  res.send("Cookie has been set");
});

app.get("/check-cookies", (req: Request, res: Response) => {
  const cookies = req.cookies;
  console.log("CHECKING COOKIES", cookies);
  res.send(cookies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
