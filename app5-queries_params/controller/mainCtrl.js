var data = require('../data');

module.exports = {
  getData: function(req, res, next) {
    var jobTitle = req.query.job;
    for(var i = 0; i < data.length; i++){
      if(data[i].job == jobTitle){
         return res.status(200).json(data[i]);
      }
    }
    res.status(200).send(data).end();
  },
  postData: function(req, res, next) {
    var newData =
    {
      job: req.body.job,
      sex: req.body.sex,
      year: req.body.year,
      count: req.body.count,
      perc: req.body.perc
    };
    res.status(200).json(data.push(newData));
  },

  getById: function(req, res, next) {
    var dataId = req.params.id;
    for(var i = 0; i < data.length; i++) {
      if(i == dataId){
        return res.status(200).json(data[i - 1]);
      }
    }
    res.status(200).send('no dice, b').end()
  },

  removeData: function(req, res, next) {
    var dataId = req.params.id;
    for(var i = 0; i < data.length; i++) {
      if(i == dataId){
        return res.status(200).json(data.splice(i, 1));
      }
    }
    res.status(200).send('No such ID, b')
  },

  modifyData: function(req, res, next){
    var dataId = req.params.id;
    var prop = req.query;
    console.log(prop);
    var dataToMod = data[dataId - 1];

    for(var key in dataToMod){
      if(prop.hasOwnProperty(key) && dataToMod.hasOwnProperty(key)) {
        dataToMod[key] = prop[key]
        return res.status(200).json(data[dataId]);
      }
    }
    res.end();

  }
}
