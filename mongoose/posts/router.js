import express from 'express';
import { postModel } from './model.js';

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
postRouter.get('/:permalink', async (req, res) => {
    const post = await postModel.findOne( { permalink: req.params.permalink });
    res.status(200).json({ post });
});

//update
postRouter.patch ('/:permalink', async (req, res) => {});

//delete
postRouter.delete('/:permalink', async (req, res) => {});
