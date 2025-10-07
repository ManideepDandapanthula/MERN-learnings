let array = ["Manideep",69,"Mango",3637];
let size = array.length;
for(i=0;i<size;i++){
    if(array[i][0] =='M' )
    console.log(array[i]);
}
array.push("surekha_pradeep_phanisree");
let poped = array.pop();
console.log(poped);
let unShifted = array.unshift("shreyansh");
console.log(unShifted);
let cars = ["BMW","ferrari","maruthi","kia"];
cars.splice(3);
cars.splice(0,2,"innova","spresso","waganor","urse");
let sortFuc  = ["manideep","sravani","pradeep","shreyansh","and"];
sortFuc.sort();
let langs = ["c","c++","java","sql","html","css","python","javascript","c#"];
console.log(langs.reverse().indexOf("javascript"));