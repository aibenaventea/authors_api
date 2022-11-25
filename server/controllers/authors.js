const Authors = require('../module/author')

module.exports = {
    getAll: async function (req, res) {
        const author = await Authors.find().sort([['authorName','ascending']]);
        res.json(author)
    },

    getById: async function (req,res) {
        const id  = req.params.id;
        Authors.findOne({_id: id})
            .then(data => res.json(data))
            .catch((err) => {
                res.status(404).json({ error: err.message });
            });
    },

    createNew: async function (req, res) {
        const body = req.body;
        const author = new Authors(body);
        author.save()
            .then(data => res.json(data))
            .catch((err) => {
                res.status(404).json({ error: err.message });
            });
    },

    update: async function (req, res) {
        const id = req.params.id;
        const authorName = req.body.authorName;

        Authors.updateOne({_id: id}, {authorName})
            .then((data) => res.json(data))
            .catch((err) => {
                res.status(404).json({ error: err.message });
            });
    },

    delete: async function (req, res) {
        const id = req.params.id;
        Authors.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch((err) => {
                res.status(404).json({ error: err.message });
            });
    }
};