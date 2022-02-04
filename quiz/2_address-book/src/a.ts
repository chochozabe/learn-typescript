// function fetchItems() {
//     var items = ['a','b','c'];

//     return items;
// }

let result = fetchItems();
console.log(result);

function fetchItems(): Promise<string[]> {
    var items = ['a','b','c'];

    
    return new Promise<string[]>(function(resolve) {
        resolve(items);
    }
}


