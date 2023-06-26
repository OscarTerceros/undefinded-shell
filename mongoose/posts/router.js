import { express } from 'express';
import { postModel } from './model';

export const postRouter = express.Router();

//CRUD create, read, update, delete

//create
postRouter.post('/', async (req, res) => {
    const createPost = await postModel.create(req.body);
    res.status(201).json({ post:createPost });
});

//read all
postRouter.get('/', async (req, res) => {});

//read
postRouter.get('/:id', async (req, res) => {});

//update
postRouter.patch ('/:id', async (req, res) => {});

//delete
postRouter.delete('/:id', async (req, res) => {});
