import express,{Express ,Request,Response,NextFunction} from 'express';
const app : Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
interface CustomRequest extends Request {
    startTime?: number;
}

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
    req.startTime = Date.now();
    next();
});

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, world!');
});


// post route ->new user - name ,email
interface User {
    name: string;
    email: string;
}

app.post('/user',(req : Request<{}, {}, User>, res: Response) => {
    const {name,email} = req.body;
    //console.log(`User created: ${name}, Email: ${email}`);
    res.status(201).json({
        message: 'User created successfully',
        user: {
            name,
            email
        }
    });
});

app.get('/user/:id', (req: Request<{ id: string }>, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: `User details for ID: ${id}`,  
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
