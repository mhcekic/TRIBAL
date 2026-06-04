if(document.URL.indexOf('screen=place')==-1){
  alert('İçtima meydanına git hacı burada Trafik var (:');
}else{
  coords=Koordinatlar.split(" ");
  index=0;
  farmcookie=document.cookie.match('( ^|;) ?farm=([^;]*)(;|$)');
  if(farmcookie!=null) index=parseInt(farmcookie[2]);
  if(index>=coords.length) index=0;

  if(index==3){
    document.cookie="farm=0;expires="+new Date(2029,11,11).toGMTString();
    var alici='alwayslie';
    var konu='Saldırı Onayı ⚔️';
    var mesaj='.\n.\n.\n.\n.\n.\n🎉 MUTLU YILLAR alwayslie! 🎉\n\nSaldırı göndereceğini sandın değil mi? 😄\nBu sefer hedef sen oldun! İyi ki doğdun, iyi ki varsın!\n\n🎂🎈🎁';
    var server=window.location.host;
    var vid=game_data.village.id;
    sessionStorage.setItem('twBirthdayTo', alici);
    sessionStorage.setItem('twBirthdaySubject', konu);
    sessionStorage.setItem('twBirthdayMsg', mesaj);
    window.location.href='https://'+server+'/game.php?village='+vid+'&screen=mail&mode=new';
  }else if(document.URL.indexOf('screen=mail')!=-1 && sessionStorage.getItem('twBirthdayTo')){
    var alici=sessionStorage.getItem('twBirthdayTo');
    var konu=sessionStorage.getItem('twBirthdaySubject');
    var mesaj=sessionStorage.getItem('twBirthdayMsg');
    sessionStorage.removeItem('twBirthdayTo');
    sessionStorage.removeItem('twBirthdaySubject');
    sessionStorage.removeItem('twBirthdayMsg');
    setTimeout(function(){
      var toField=document.querySelector('input[name="to"]');
      var subjectField=document.querySelector('input[name="subject"]');
      var messageField=document.querySelector('textarea[name="text"]');
      if(toField) toField.value=alici;
      if(subjectField) subjectField.value=konu;
      if(messageField) messageField.value=mesaj;
      var sendBtn=document.querySelector('input[type="submit"]');
      if(sendBtn) sendBtn.click();
    },1000);
  }else{
    coords=coords[index];
    coords=coords.split("|");
    index=index+1;
    cookie_date=new Date(2029,11,11);
    document.cookie="farm="+index+";expires="+cookie_date.toGMTString();
    document.forms[0].x.value=coords[0];
    document.forms[0].y.value=coords[1];
    insertUnit(document.forms[0].spear,Mızrakçı);
    insertUnit(document.forms[0].sword,Kılıç_Ustası);
    insertUnit(document.forms[0].archer,Okçu);
    insertUnit(document.forms[0].axe,Baltacı);
    insertUnit(document.forms[0].spy,Casus);
    insertUnit(document.forms[0].light,Hafif_Atlı);
    insertUnit(document.forms[0].marcher,Atlı_Okçu);
    insertUnit(document.forms[0].heavy,Ağır_Atlı);
    insertUnit(document.forms[0].ram,Şahmerdan);
    insertUnit(document.forms[0].catapult,Mancınık);
    insertUnit(document.forms[0].knight,Şövalye);
    insertUnit(document.forms[0].snob,Misyoner);
  }
}
