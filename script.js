let i = 0;
let count = 0;
let n, x, y;
n = 100000;
let p;
while(i < n){
    x = Math.random();
    y = Math.random();

    if(Math.pow(x, 2) + Math.pow(y, 2) < 1){
        count = count + 1;
    }
    i = i + 1;
    p = 4 * (count / n)
}
console.log(p);
