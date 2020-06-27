var yuzHarfTop = 3;
var binHarfTop = 3;
var birlerIcinHarfTop = [0,3,3,2,4,3,4,4,5,5];
var onlarIcinHarfTop = [0,2,3,4,5,6,5,6,6,7];

function toplama(n) {
    var topla = 0;

    for (var i = 1; i <= n; i++) {
        var birler = i % 10;
        var onlar = Math.floor(i / 10) % 10;
        var yuzler = Math.floor(i / 100) % 10;
        var binler = Math.floor(i / 1000) % 10;

        
        topla += birlerIcinHarfTop[birler];

        
        topla += onlarIcinHarfTop[onlar];

        
        if (yuzler != 0) {
            topla += yuzHarfTop + birlerIcinHarfTop[yuzler];
        }

     
        if (binler != 0) {
            topla += binHarfTop + birlerIcinHarfTop[binler];
        }



        if (onlar == 1) {
            
            switch (birler) {
                case 4:
                case 6:
                case 7:
                case 9:
                    topla += 1;
                    break;
            }
        }

        if (i > 100 && i % 100 != 0) {
            topla += 3;
        }
    }

    return topla;
}

var sonuc = console.log(toplama(1000));
