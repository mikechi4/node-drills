var data = require('../data');

module.exports = {

  getData: function(req, res, next) {
    res.status(200).json(data);
  },

  postData: function(req, res, next){
    var newPerson = {
      name: req.body.name,
      start: req.body.start,
      end: req.body.end,
      index: data.length
    }
    res.status(200).json(data.push(newPerson));
  }
}
