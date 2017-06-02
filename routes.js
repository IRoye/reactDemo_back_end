var Post = require('./models/posts');

module.exports = function(app){

app.get('/posts',function(req, res){
    Post.find().sort({'createdAt': -1}).exec(function(err, posts) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ posts: posts })
    });
});
// 添加 markdown
app.get('/posts/:_id', function(req, res){
    console
    Post.findById({_id : req.params._id}, function(err, post){
        if(err){
          return res.status(500).json({error: err.message})
        }
        res.json({post: post})
    })
});
app.post('/posts/create', function(req, res){
if(req.body.title === ''){
    return res.status(400).json({error: '文章标题不能为空！'});
}
   var post = new Post();
   for(prop in req.body){
       post[prop] = req.body[prop];
   }
   post.save(function(err){
     if(err){
         return res.status(500).json({error: err.message});
     }
     res.json({
         message: '创建成功！'
     })
   })

});
}