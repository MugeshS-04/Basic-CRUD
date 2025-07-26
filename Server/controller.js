import BookScheme from "./model.js"

export const addbooks = async(req, res) => {
    const{title, author, theme, date} = req.body

    if(title == null || author == null || theme == null || date == null)
    {
        return res.status(400).json({success : false, message: "All fields are required"})
    }

    try{
        const book = await BookScheme.findOne({title, author, theme})

        if(book)
        {
            return res.status(409).json({success : false, message: "Book is already entered"})
        }
        
        const newbook = new BookScheme({title, author, theme, date: new Date(date)})
        
        await newbook.save()

        return res.status(201).json({success : true, message: "Book added successfully"})

    }
    catch(error)
    {
        return res.json(error)
    }
}

export const getbooks = async(req, res) => {
    try{
        const book = await BookScheme.find()
        res.status(201).json(book)
    }
    catch(error)
    {
        res.status(500).json({success : false, message : error})
    }
}

export const deletebooks = async(req, res) => {
    await BookScheme.findOneAndDelete(req.params.id)
    res.status(201).json({success : true})
}


