var User = require("../Model/User");
var amqp = require("amqplib/callback_api");

exports.GetByName = (req, res) => {
  console.log(req.params.name)
  User.findOne({Nome: req.params.name}).then(function (items) {
    return res.json(items);
  });
};

exports.CreateUtilizador = function (req, res) {
  var nome = req.body.nome;
  
  if (nome) {
    User.findOne({ Nome: req.body.nome }).then(function (user) {
      if (user != null) return res.json(user);
      let utilizador = new User({
        Nome: nome,
        Reputacao: 2.5,
        Estado: "ativo",
        Periodo: null,
      });

      utilizador.save(function (err) {
        if (err) return res.send(err);
        res.status(200);
        return res.json(utilizador);
      });
    });
  } else {
    res.status(400);
    res.json({ message: "Impossível de criar utilizador" });
  }
};
