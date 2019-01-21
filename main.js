// 1
var age =Math.floor(Math.random() * (100 - 1 + 1)) + 1;
if (age>= 1 && age<=17){
    console.log("Учеба")

} else if(age>=18 && age<=65){
    console.log('Работа')
} else  {
    console.log('Пенсия')

}
// 2
var arr = [1,2,3,4,5,6,7,8,9];

for (var i=0; i<arr.length; i++){
    switch (arr[i]) {
        default:
            console.log(arr[i] +' разработчик')
    }
}
