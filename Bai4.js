var hoaDon=[275,40,430];


for(var i=0;i<3;i++){
    var tip = hoaDon[i]>=50&hoaDon[i]<=300?0.15*hoaDon[i]:0.20*hoaDon[i];
    var tongGiaTri = hoaDon[i]+tip;
    console.log("Hoa don la "+hoaDon[i]+",tien boa la "+tip+" va tong gia tri la "+tongGiaTri);
}