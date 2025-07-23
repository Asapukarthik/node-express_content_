const cluster = require('node:cluster');
const express = require('express');
const os = require('os');

const totalCpus = os.cpus().length;
// console.log(totalCpus);

if(cluster.isPrimary) {
    for(let i = 0; i < totalCpus; i++) {
        cluster.fork();
    }
}
else{
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.get('/', (req, res) => {    
    return res.json({message: `Hello, World!${process.pid}`});
    });

app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started`);
});

}