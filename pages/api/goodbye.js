
var name='Oscar'

export default function handler(req, res) {
    
    if(req.method === 'GET'){
      res.status(200).json(name)
    }else if (req.method === 'POST'){
      const data=  req.body
      name= data
      res.status(201).json('Changed')
    }
    
  }
  