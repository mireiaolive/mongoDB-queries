db.restaurants.find({});
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 });
db.restaurants.find( { borough: { $eq: "Bronx" } } );
db.restaurants.find( { borough: { $eq: "Bronx" } } ).sort({_id:-1}).limit(5);
db.restaurants.find( { borough: { $eq: "Bronx" } } ).skip(5);
db.restaurants.find( { "grades.score":{$gt:90}  } );
db.restaurants.find( { "grades.score":{$gt:80, $lt:100}  } );
db.restaurants.find( { "address.coord":{$lt:-95.754168}  } );
db.restaurants.find( {$and:[{"cuisine": {$ne:"American "}, "grades.score":{$gt:70}, "address.coord":{$lt:-65.754168}}]});
db.restaurants.find( {"cuisine": {$ne:"American "}, "grades.score":{$gt:70}, "address.coord":{$lt:-65.754168}})
db.restaurants.find( {$and:[{"cuisine": {$ne:"American "}, "grades.grade":{$eq:"A"}, "borough":{$ne:"Brooklyn"}}]}).sort({cuisine:-1});
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name:/^Wil/, borough: 1, cuisine: 1 });









