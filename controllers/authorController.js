const {Author,Book}=require("../model/model")

const authorController={

    //api add author
    addAuthor:async(req,res)=>{
       try{
        const newAuthor= new Author(req.body);
        const saveAuthor=await newAuthor.save();
        res.status(200).json(saveAuthor);
      }
      catch(err){
        res.status(500).json(err)

       }
    },

    getAllAuthors: async(req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    
}
module.exports=authorController;