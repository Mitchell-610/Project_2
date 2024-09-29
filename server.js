const sequelize = require('./config/connection')
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');
const Pet = require('./models/pet');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
  })
);

// Set up Handlebars.js as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Use routes
app.use('/', routes);

const syncAndSeed = async () => {
  await sequelize.sync({ force: true });

  // Seed data
  await Pet.bulkCreate([
    { name: 'Fluffy', owner: 'Harold', species: 'cat', sex: 'f', birth: '1993-02-04' },
    { name: 'Claws', owner: 'Gwen', species: 'cat', sex: 'm', birth: '1994-03-17' },
    { name: 'Buffy', owner: 'Harold', species: 'dog', sex: 'f', birth: '1989-05-13' },
    // Add more sample data as needed
  ]);
};
syncAndSeed();

//Change back to false when db is setup correctly.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)
)
});