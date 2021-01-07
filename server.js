

const express = require('express');
const { isRegExp } = require('util');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// this will serve the brower all files in public over http so that there it can read the styling, js, and other html pages
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// This is our way of telling the server that any time a client navigates to <ourhost>/api, 
// the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});

