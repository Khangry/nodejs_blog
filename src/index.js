const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
//http logs
// app.use(morgan('tiny'));
//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

//listen port 300
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
