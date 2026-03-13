import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

const services = [
    {
        title: "Creative Design",
        price: "$199",
        icon: "fa-crop-alt",
        description: "Diseño creativo profesional."
    },
    {
        title: "Graphic Design",
        price: "$199",
        icon: "fa-code-branch",
        description: "Diseño gráfico moderno."
    },
    {
        title: "Web Design",
        price: "$199",
        icon: "fa-code",
        description: "Diseño de sitios web."
    },
    {
        title: "UI/UX Design",
        price: "$199",
        icon: "fa-laptop-code",
        description: "Diseño de experiencia de usuario."
    }
];

app.get("/", (req, res) => {
    res.render("index", {
        title: "Inicio - Portafolio",
        services: services
    });
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});