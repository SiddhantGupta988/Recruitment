const http=require('http');
const app=require('./backend/app');
const server=http.createServer(app);
const port=process.env.PORT||3000;
app.set('port',port);

server.listen(port);
