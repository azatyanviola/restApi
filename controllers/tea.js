'use strict';


const getMany = (req, res, next) => {
    res.json([{
        "id":1,
        "name":"Black tea"
      },
      {
        "id":2,
        "name":"Green tea"   
      },
      {
        "id":3,
        "name": "Other"
      }] ); 
    next();
}

const getOne = (req, res, next) => {
   res.send(req.params.id);
   next();
}


const newTea = (req, res, next) => {
    res.json({
        message: "Make new tea"
    }); 
    next();
};


let tea = {};
const update = (req, res, next) => {
    const teaType = tea[req.params.id];
    if(teaType === undefined){
        res.status(404).send('Type is not found');
    }else{
        const updatedType = req.body;
        tea[req.params.id] = updatedType;
        res.send(updatedType);
    }

    next();
}

const deleteOne =  (req, res, next) => {
    const teaType = tea[req.params.id];
    if(teaType === undefined){
        res.status(404).send('Type is not found');
    }else{
        delete tea[req.params.id];
        res.send();
    }

    next();
}


module.exports = {newTea, getMany, getOne, update, deleteOne};