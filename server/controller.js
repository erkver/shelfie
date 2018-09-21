module.exports = {
  get: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then(items => {
      return res.status(200).json(items);
    }).catch(err => {
      res.status(500).send({errorMessage: "Something went wrong"});
      console.log(err);
    });
  },
  create: (req, res) => {
    const db = req.app.get('db');
    const { name, price, image_url } = req.body;
    db.create_item([name, price, image_url]).then(item => {
      return res.status(200).json(item);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  remove: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.delete_item([id]).then(items => {
      return res.status(200).json(items);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  update: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { name, price, image_url } = req.body;
    db.edit_item([id, name, price, image_url]).then(items => {
      return res.status(200).json(items);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  }
}