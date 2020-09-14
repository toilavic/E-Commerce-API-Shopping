const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());

let products = [
    {
        id: 1
        ,name: 'A'
        ,manufacturer: 'china'
        ,category: 'sport'
        ,desc: ''
        ,price: 0
        ,bonusIMG: ''
    }
    ,
    {
        id: 2
        ,name: 'B'
        ,manufacturer: 'vietnam'
        ,category: 'tinh anh em'
        ,desc: ''
        ,price: 0
        ,bonusIMG: ''
    }
    ,
    {
        id: 3
        ,name: 'C'
        ,manufacturer: 'krong bong'
        ,category: 'thanh pho buon'
        ,desc: ''
        ,price: 0
        ,bonusIMG: ''
    }
];

let productID = products.length;

//Lobby
app.get('/', (req, res) => {
  res.send(products)
})

// create a product
app.post('/create', (req,res) => {
    productID++;
    products.push({
        id: productID
        ,name : req.body.name
        ,manufacturer: req.body.manufacturer
        ,category: req.body.category
        ,desc : req.body.desc
        ,price : req.body.price
        ,bonusIMG: req.body.bonusIMG
    });
    console.log('name ' +req.body.name);
    res.send('Created'+req.body.name);
})

// get single product
app.get('/product/:id', (req, res) => {
    res.send(products[req.params.id - 1])
    })

// modify
app.get('/modify/:id', (req, res) => {
    let productToEdit = products[req.params.id - 1];
    //Update object's name property.
    productToEdit.name = req.body.name
    productToEdit.manufacturer = req.body.manufacturer
    productToEdit.category = req.body.category
    productToEdit.desc  = req.body.desc
    productToEdit.price  = req.body.price
    productToEdit.bonusIMG = req.body.bonusIMG

    res.send(products[req.params.id - 1]);
    })

// Search
// 1.Based on name
app.get('/productName/:name', (req, res) => {
    objToFind = products.findIndex((obj => obj.name.includes(req.params.name)));
    res.send(products[objToFind])
    })
// 2. Based on manufacturer
app.get('/manufacturer/:name', (req, res) => {
    objToFind = products.findIndex((obj => obj.manufacturer.includes(req.params.name)));
    res.send(products[objToFind])
    })
// 3.Based on category
app.get('/category/:name', (req, res) => {
    objToFind = products.findIndex((obj => obj.category.includes(req.params.name)));
    res.send(products[objToFind])
    })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})