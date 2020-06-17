const Color = require("../model/color")

exports.createColor = (req, res) => {
    const color = new Color(req.body)
    color.save((err, color) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        else{
            res.json({color})
        }
    })
}

exports.getAllColors = (req, res) => {
    Color.find().exec((err, colors) => {
      if (err) {
        return res.status(400).json({
          error: "NO color found"
        });
      }
      res.json(colors);
    });
  };