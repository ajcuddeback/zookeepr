const path = require('path');
const router = require('express').Router();


// serving the front en code to server
router.get('/', (req, res) => {
    // res.sendFile() will respond with a html page to display in the browser, 
    // this will tellthem where to fine the file we want our server to read and send it back to client
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
});
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router