import express from "express";
import user from "./routes/user.mjs"
import department from "./routes/department.mjs"
const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", user);
app.use("/department", department);

app.get("/", (req, res) => {
    return res.send("work");
})

app.listen(port, () => {
    console.log("App listen on port : ", port);
});