import { express } from 'express';
import { postModel } from './model';

export const productRouter = express.Router();

//CRUD create, read, update, delete

//create
productRouter.post('/', async (req, res) => {
    const createPost = await postModel.create(req.body);
    res.status(201).json({ post:createPost });
});

//read all
productRouter.get('/', async (req, res) => {});

//read
productRouter.get('/:id', async (req, res) => {});

//update
productRouter.patch ('/:id', async (req, res) => {});

//delete
productRouter.delete('/:id', async (req, res) => {});
