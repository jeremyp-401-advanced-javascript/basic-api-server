'use strict';

class Drink{
  constructor(){
    this.id = 0;
    this.db = [];
  }
  get(id) {
    if (id) { // We were given a specific id
      return this.db.find(record => record.id === id); // Return the record object matching the id
    } else { // We weren't given an id
      return this.db; // Return everything
    }
  }
  post(obj) {
    const postObject = {
      id: ++this.id, // What is the current.id on our Drink model? Out object.id is that + 1.
      name: obj.name,
      type: obj.type,
      size: obj.size,
    };
    this.db.push(postObject); // Pretty relaxed validation, but I'll let it slide.
    return postObject; //Show the user what we've posted, including the id we attached.
  }
  update(id, obj) {
    let errors = {};
    if (!id) {
      let needIdError = 'You must provide an id...';
      return needIdError; // Fall dead, but let our user know why.
    } else {
      // Do input validation. I'm sure we could use our validator function. Instead:
      if (!obj) { // They did send something, right?
        let needDataError = 'No update to this drink specified...';
        return needDataError; // Fall dead, but let our user know why.
      } else {
        if(!obj.name) {
          errors.name = 'Please add a drink name';
        }
        if(!obj.type) {
          errors.type = 'Please add a drink type';
        }
        if(!obj.size) {
          errors.size = 'Please add a drink size';
        }
        if(Object.keys(errors).length > 0) {
          return errors;
        }

        const updateObj = {
          id: obj.id,
          name: obj.name,
          type: obj.type,
          size: obj.size,
        };
        
        // TODO: Find the object in the db and update it [find, then filter (or splice and insert)] with updateObj.
      }
    }
  }
  delete(id) {
    if (!id) {
      let needIdError = 'You must provide an id...';
      return needIdError; // Fall dead, but let our user know why.
    } else {
      // TODO: Find record in the db and remove it [filter() on id].
    }
  }
}