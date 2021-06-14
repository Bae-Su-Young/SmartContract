module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');//localhost:3000하면 실행되는 것(=index.html).
    });

    app.get('/about',function(req,res){
        res.render('about.html');
    });
	
	

}