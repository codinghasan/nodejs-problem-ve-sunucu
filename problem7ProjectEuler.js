const rakTop = (n) => {
    let asallar = [2];
    let enYuksek;
    let asalMi;
    for(let i = 3; asallar.length < n; i+=2) {
      enYuksek = Math.sqrt(i) + 1;
      asalMi = true;
      for(let j = 0; asallar[j] < enYuksek; j++) {
        if(i % asallar[j] === 0) {
          asalMi = false;
          break;
        }
      }
      if(asalMi) asallar.push(i);
    }
    return asallar[asallar.length - 1];
  }
  
var sonuc = console.log(rakTop(10001));
module.exports=sonuc;
