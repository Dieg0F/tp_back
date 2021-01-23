'use strict'

exports.get = (req, res, next) => {
    res.status(200).send({
        title: 'Node Store API',
        version: "0.0.2"
    });
}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({ id, item: req.body });
}

exports.remove = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id });
}