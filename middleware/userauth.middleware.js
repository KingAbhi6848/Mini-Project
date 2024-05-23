export const auth = (req,res,next)=>{
 
    if(req.session.isUser || req.session.isRecuriter){
        next();
    }
    else{
        res.send('Login Required, Go Back to HomePage');
        // res.redirect('back');
    }


}