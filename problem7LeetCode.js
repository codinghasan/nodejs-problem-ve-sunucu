var tersCevir = function(n){
    let sonuc = 0;
    let isaret = 1;

    if(n<0){
        isaret = -1;
        n = -n;
    }

    while(n>0){
        var basamak = n%10;
        n = (n - basamak) / 10;
        sonuc = sonuc*10+basamak;

    }
    sonuc*=basamak
    if(sonuc>2**31-1) return 0
    if(sonuc<-(2**31)-1) return 0
    return console.log(sonuc)
}

console.log(tersCevir(123))
