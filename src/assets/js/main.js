const { nunjucks } = require("gulp-nunjucks-render");
const { express } = require('express')
const app = express();

var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];

nunjucks.configure('views',{
    autoescape: true,
    express: app,
    watch: true
})
app.set()