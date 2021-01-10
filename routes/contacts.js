const express = require('express')
const router = express.Router();

// @route GET api/contacts
// @desc get all users contacts
// @access private
router.get('/', (req, res) => { 
    res.send('get user contacts')
})


// @route POST api/contacts
// @desc new contacts
// @access private
router.post('/', (req, res) => { 
    res.send('add contacts')
})


// @route PUT api/contacts/:id
// @desc update contacts
// @access private
router.put('/:id', (req, res) => { 
    res.send('update user contacts')
})

// @route DELETE api/contacts/:id
// @desc update contacts
// @access private
router.delete('/:id', (req, res) => { 
    res.send('delete user contacts')
})


module.exports = router