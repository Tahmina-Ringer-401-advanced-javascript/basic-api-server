'use strict';

class BabyAnimal {
  constructor(name){
    this.id = 0;
    this.name = name;
    this.db = [];
  }

  get(id){
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update(id, obj) {
    if (!id || id > this.db.length) {
    //   return null;
    // } else {
    //   this.
    }
    //TODO: figure out how to update object
    return obj;
  }

  delete(id) {
    if(!id) { return null; }
    //TODO: figure out how to delete the object
    return null;
  }
}

module.exports = BabyAnimal;