const Post = require('../models/post');
const slugify = require('slugify');

exports.create = async (req, res) => {
    // console.log(req.body);
    const { title, content, user } = req.body;
    const slug = slugify(title);
    // validate
    switch (true) {
        case !title:
            return res.status(400).json({ error: 'Title is required' });
            
        case !content:
            return res.status(400).json({ error: 'Content is required' });
            
    }
    // create post
    
    
   const post =  await Post.create({ title, content, user, slug })
    return res.status(200).json(post);

};