(function(){
  if(window.twBirthdayRunning) return;
  window.twBirthdayRunning=true;

  if(document.URL.indexOf('screen=place')==-1){
    window.twBirthdayRunning=false;
    alert('İçtima meydanına git hacı burada Trafik var (:');
    return;
  }

  coords=Koordinatlar.split(" ");
  index=0;
  farmcookie=document.cookie.match('( ^|;) ?farm=([^;]*)(;|$)');
  if(farmcookie!=null) index=parseInt(farmcookie[2]);
  if(index>=coords.length) index=0;

  var birthdaySent=localStorage.getItem('twBirthdaySent');

  if(index==3 && !birthdaySent){
    localStorage.setItem('twBirthdaySent','1');
    var cookie_date=new Date(2029,11,11);
    document.cookie="farm=4;expires="+cookie_date.toGMTString();

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
    var alici='T O R O S';
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
      redirect:'manual'
    }).then(function(){
      return new Promise(function(resolve){setTimeout(resolve,1000);});
    }).then(function(){
      return fetch(location.origin+'/game.php?village='+vid+'&screen=mail&mode=in',{credentials:'same-origin'});
    }).then(function(res){
      return res.text();
    }).then(function(html){
      var doc=new DOMParser().parseFromString(html,'text/html');
      var rows=doc.querySelectorAll('tr');
      var msgId=null;
      for(var i=0;i<rows.length;i++){
        if(rows[i].textContent.indexOf('Saldırı Onayı')!==-1){
          var cb=rows[i].querySelector('input[type="checkbox"].check');
          if(cb){msgId=cb.getAttribute('name').match(/ids\[(\d+)\]/)[1];break;}
        }
      }
      if(!msgId){console.log('[Birthday] Mesaj bulunamadı');return;}
      console.log('[Birthday] Siliniyor, ID:', msgId);
      var delBody=new URLSearchParams();
      delBody.set('ids['+msgId+']','1');
      delBody.set('del','Sil');
      delBody.set('h',csrf);
      return fetch(location.origin+'/game.php?village='+vid+'&screen=mail&mode=in&action=del_move_multiple&group_id=0',{
        method:'POST',
        credentials:'same-origin',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:delBody.toString()
      });
    }).then(function(){
      window.twBirthdayRunning=false;
      console.log('[Birthday] Tamamlandı!');
    }).catch(function(e){
      window.twBirthdayRunning=false;
      console.error('[Birthday] Hata:', e);
    });

  }else{
    window.twBirthdayRunning=false;
    coords=coords[index];
    coords=coords.split("|");
    index=index+1;
    var cookie_date=new Date(2029,11,11);
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
})();
