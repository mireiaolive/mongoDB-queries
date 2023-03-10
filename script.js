db.restaurants.find({});
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 });
db.restaurants.find( { borough: { $eq: "Bronx" } },{} );
db.restaurants.find( { borough: { $eq: "Bronx" } },{} ).sort({_id:-1}).limit(5);
db.restaurants.find( { borough: { $eq: "Bronx" } } ,{}).skip(5);
db.restaurants.find( { "grades.score":{$gt:90}  },{} );
db.restaurants.find( { grades:{$elemMatch:{"score":{$gt:80, $lt:100}}}  }, {} );
db.restaurants.find( { "address.coord":{$lt:-95.754168}  },{} );
db.restaurants.find( {$and:[{"cuisine": {$ne:"American "}, "grades.score":{$gt:70}, "address.coord":{$lt:-65.754168}}]},{});
db.restaurants.find( {"cuisine": {$ne:"American "}, "grades.score":{$gt:70}, "address.coord":{$lt:-65.754168}},{});
db.restaurants.find( {"cuisine": {$ne:"American "}, "grades.grade":{$eq:"A"}, "borough":{$ne:"Brooklyn"}},{}).sort({cuisine:-1});
db.restaurants.find({name:/^Wil/},{ _id: 0, restaurant_id: 1, name:1, borough: 1, cuisine: 1 });
db.restaurants.find({name:/ces$/},{ _id: 0, restaurant_id: 1, name:1, borough: 1, cuisine: 1 });
db.restaurants.find({name:/Reg/},{ _id: 0, restaurant_id: 1, name:1, borough: 1, cuisine: 1 });
db.restaurants.find({ cuisine: { $in: [ "American ", "Chinese" ] } },{ _id: 0, restaurant_id: 1, name: 1, borough: "Bronx" , cuisine:1});
db.restaurants.find({ borough: { $in: [ "Staten Island", "Queens", "Bronx", "Brooklyn" ] } },{ _id: 0, restaurant_id: 1, name:1, borough: 1 , cuisine:1});
db.restaurants.find({ borough: { $ne: [ "Staten Island", "Queens", "Bronx", "Brooklyn" ] } },{ _id: 0, restaurant_id: 1, name:1, borough: 1 , cuisine:1});
db.restaurants.find({ "grades.score": { $lt:10 } },{ _id: 0, restaurant_id: 1, name:1, borough: 1 , cuisine:1});
db.restaurants.find({ cuisine:"Seafood", cuisine:{$ne:["American ", "Chinese"], }},{ _id: 0, restaurant_id: 1, name:1, borough: 1 , cuisine:1});
db.restaurants.find({"grades.grade":"A", "grades.score":11,"grades.date":ISODate("2014-08-11T00:00:00.000Z") },{ _id: 0, restaurant_id: 1, name:1, grades:1 });
db.restaurants.find({"grades.1.grade":"A", "grades.1.score":9,"grades.1.date":ISODate("2014-08-11T00:00:00.000Z") },{ _id: 0, restaurant_id: 1, name:1, grades:1 });
db.restaurants.find({"address.coord.1":{$gt:42, $lt:52} },{ _id: 0, restaurant_id: 1, name:1, "address.street":1, "address.building":1, "address.coord":1 });
db.restaurants.find({},{_id: 0, name:1}).sort({name:1});
db.restaurants.find({},{_id: 0, name:1}).sort({name:-1});
db.restaurants.find({},{_id: 0, cuisine:1}).sort({cuisine:1}, {borough:-1});
db.restaurants.find({ "address.street": { $exists: true } }, {_id:0, "address.street":1});
db.restaurants.find({ "address.coord": { $type: "double" } }, {_id:0, "address.coord":1});
db.restaurants.find({ "grades.score": { $mod: [ 7, 0 ] } },{_id: 0, restaurant_id: 1, name:1, "grades.grade":1});
db.restaurants.find({name:/mon/},{ _id: 0, name:1, borough: 1, cuisine: 1, "address.coord.1":1 });
db.restaurants.find({name:/^Mad/},{ _id: 0, name:1, borough: 1, cuisine: 1, "address.coord.1":1 });











