const myEach = function (collection, callback) {
    console.log(collection, callback)
    for(let accessor in collection) {
        callback(collection(accessor))
    }
    return collection;
    //const someObj = [...collection]
    //collection.forEach(element => {
        
    //});
    
}