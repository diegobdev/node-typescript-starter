import * as express from 'express';

const app = express();
const router = express.Router();

app.set("port", process.env.PORT || 3000);

// API Endpoints
router.route('/').get((req, res) => {
    res.send("Hello");
});

app.use('/', router);

const server = app.listen(app.get("port"), () => {
    console.log(
        "App is running on http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    )
});

export default server;