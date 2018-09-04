const express = require('express');
const router = express.Router();

// declare axios for http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/posts', (req, res) => {
    // get posts from mock api
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;