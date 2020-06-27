var dizi = {};

dizi.getFactors = function (n){
    var dizi = [];
    
    var bas = 1;
    var sqrt = Math.sqrt(n);
    while(bas <= sqrt){
        if(n % bas == 0){
            dizi[dizi.length] = bas;
            
            var digBas = n / bas;
            if(digBas > bas){
                dizi[dizi.length] = digBas;
            } 
        }
        bas++;
    }
    
    return dizi;
};

var asal = {};

asal.asalMi = function(num){
    num = (num > 0) ? num : num * -1;
    return dizi.getFactors(num).length <= 2;
};

var kaciciAsal = function(a, b){
    var n = 0;
    var cevap = 1;
    while(asal.asalMi(n*n + a * n + b)){
        n++;
    }
    
    return n;
};

console.log(kaciciAsal(1, 41));
console.log(kaciciAsal(-79, 1601));

var maxToTest = 1000;
var maxA = 0;
var maxB = 0;
var maxNumPrimes = 0;
for(var b = -maxToTest; b <= maxToTest ; b++){
    if(asal.asalMi(b)){
        for(var a = -maxToTest; a <= maxToTest; a++){
            var asalSayisi = kaciciAsal(a, b);
            if(asalSayisi > maxNumPrimes){
                maxA = a;
                maxB = b;
                maxNumPrimes = asalSayisi;
            }
        }
    }
}

console.log('a: ' + maxA );
console.log('b: ' + maxB );
console.log('a*b: ' + (maxA * maxB));
console.log('cevap: ' + maxNumPrimes);
