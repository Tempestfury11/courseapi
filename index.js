require('dotenv').config();
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT) || 4000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

// Data
let courses = [
    {
        id: 1, name: 'Software Engineering'
    },
    {
        id: 2, name: 'Web Development'
    },
    {
        id: 3, name: "Database Management"
    }
];4

app.get('/', (req, res)=> {
    res.send(JSON.stringify(courses));   
})
app.get('/courses', (req, res) => {
    res.send(JSON.stringify(courses));
});

app.get('/courses/1', (req, res) => {
    res.send(JSON.stringify(courses[0]));
});

app.get('/courses/2', (req, res) => {
    res.send(JSON.stringify(courses[1]));
});

app.get('/courses/3', (req, res) => {
    res.send(JSON.stringify(courses[2]));
});




// app.use(router, cors(), express.json(),
//     express.urlencoded({
//         extended: true
//     })
// );
// app.listen(port);
// router.get('^/$|/courses', (req, res)=> {
//     res.send(courses);
// });
// router.get('/courses/:id', (req, res)=> {
//     const index = parseInt(req.params.id) - 1;
//     if(index < courses.length) {
//         res.status(200).json(
//             {result: courses[index]}
//         );
//     }else {
//         res.status(404).json(
//             {result: 'Resources was not found'}
//         );
//     }
// });
// //
// router.post('/courses', bodyParser.json(), (req, res)=> {
//     const bd = req.body;
//     courses.push(
//         {
//             id: bd.id, name: bd.name
//         }
//     )
//     res.status(200).json(
//         {result: courses}
//     );
// });
// router.get('/*', (req, res)=> {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });