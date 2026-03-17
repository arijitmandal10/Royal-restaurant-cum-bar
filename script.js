var mrpData = {
  "antiquity blue ultra premium":[1500,750,380],"blenders pride reserve collection":[1500,750,380],
  "signature premier grain whisky":[1250,630,320],"blenders pride ultra premium":[1250,630,320],
  "royal stag superior":[1000,500,250],"royal challenge premium gold":[1000,500,250],
  "sterling reserve b7":[950,480,240],"mcdowell's no.1 luxury blended":[900,450,230],
  "imperial blue superior grain":[850,430,220],"mcdowell's no.1 superior":[850,430,220],
  "johnnie walker gold label reserve":[6050,3030,1520],"glenfiddich 12 yo":[5250,2630,1320],
  "johnnie walker double black":[4950,2480,1240],"johnnie walker black label":[3950,1980,990],
  "chivas regal 12":[3950,1980,990],"jack daniel's":[3950,1980,990],
  "teachers 50":[3150,1580,790],"black dog triple gold reserve":[3150,1580,790],
  "ballantine's finest":[2500,1250,630],"johnnie walker red label":[2500,1250,630],
  "jim beam kentucky bourbon":[2400,1200,600],"black dog centenary black reserve":[2250,1130,570],
  "vat 69":[2150,1080,540],"black & white blended scotch":[2350,1180,590],
  "seagrams 100 pipers deluxe scotch":[2350,1180,590],"teachers highland cream":[2350,1180,590],
  "jameson irish whiskey":[2700,1350,680],"old monk coffee xo":[1350,680,340],
  "bacardi limon":[1250,630,320],"bacardi mango chilli":[1250,630,320],
  "old monk matured xxx":[750,380,190],"grey goose":[4300,2150,1080],
  "absolut":[2450,1230,620],"magic moments (all flavors)":[1000,500,250],
  "magic moments pure grain":[900,450,230],"honey bee brandy":[850,430,220],
  "bombay sapphire london dry gin":[3000,1500,750],
  "jacob's creek classic chardonnay":[2200,1100,550],"jacob's creek classic shiraz cabernet":[2200,1100,550],
  "dia red sparkling":[1100,550,280],"kyra premium red":[750,380,190]
};
var bevcoMrp = {
  "antiquity blue ultra premium":1190,"blenders pride reserve collection":1220,
  "signature premier grain whisky":1020,"blenders pride ultra premium":1020,
  "royal stag superior":800,"royal challenge premium gold":800,"sterling reserve b7":780,
  "mcdowell's no.1 luxury blended":710,"imperial blue superior grain":670,"mcdowell's no.1 superior":670,
  "johnnie walker gold label reserve":5020,"glenfiddich 12 yo":4360,"johnnie walker double black":4120,
  "johnnie walker black label":3290,"chivas regal 12":3270,"jack daniel's":3270,
  "teachers 50":2590,"black dog triple gold reserve":2550,"ballantine's finest":2040,
  "johnnie walker red label":2050,"jim beam kentucky bourbon":1980,"black dog centenary black reserve":1840,
  "vat 69":1790,"black & white blended scotch":1920,"seagrams 100 pipers deluxe scotch":1940,
  "teachers highland cream":1920,"jameson irish whiskey":2230,"old monk coffee xo":1120,
  "bacardi limon":1020,"bacardi mango chilli":1020,"old monk matured xxx":620,
  "grey goose":3570,"absolut":2020,"magic moments (all flavors)":800,"magic moments pure grain":710,
  "honey bee brandy":680,"bombay sapphire london dry gin":2490,
  "jacob's creek classic chardonnay":1200,"jacob's creek classic shiraz cabernet":1200,
  "dia red sparkling":590,"kyra premium red":400
};
var beerMrpMap = {
  "kingfisher imperial strong 650ml":160,"kingfisher imperial strong":160,
  "tuborg premium danish strong 650ml":160,"tuborg premium danish strong":160,
  "carlsberg elephant premium pilsner 650ml":190,"carlsberg elephant premium pilsner":190,
  "budweiser premium king of beers 500ml":130,"budweiser premium king of beers 650ml":170,"budweiser premium king of beers":170,
  "budweiser premium 500ml":130,"budweiser premium 650ml":170,"budweiser premium":170,
  "budweiser magnum strong 500ml":150,"budweiser magnum strong 650ml":200,"budweiser magnum strong":200,
  "corona extra premium lager 330ml":200,"corona extra premium lager":200,
  "bacardi breezer (all flavours) 275ml":100,"bacardi breezer (all flavours)":100
};
var beerDineIn = {
  "kingfisher imperial strong 650ml":200,"kingfisher imperial strong":200,
  "tuborg premium danish strong 650ml":200,"tuborg premium danish strong":200,
  "carlsberg elephant premium pilsner 650ml":230,"carlsberg elephant premium pilsner":230,
  "budweiser premium king of beers 500ml":160,"budweiser premium king of beers 650ml":210,"budweiser premium king of beers":210,
  "budweiser premium 500ml":160,"budweiser premium 650ml":210,"budweiser premium":210,
  "budweiser magnum strong 500ml":185,"budweiser magnum strong 650ml":240,"budweiser magnum strong":240,
  "corona extra premium lager 330ml":240,"corona extra premium lager":240,
  "bacardi breezer (all flavours) 275ml":120,"bacardi breezer (all flavours)":120
};
var ml60Map = {
  "antiquity blue ultra premium":150,"blenders pride reserve collection":150,
  "signature premier grain whisky":125,"blenders pride ultra premium":125,
  "royal stag superior":100,"royal challenge premium gold":100,"sterling reserve b7":95,
  "mcdowell's no.1 luxury blended":90,"imperial blue superior grain":85,"mcdowell's no.1 superior":85,
  "johnnie walker gold label reserve":605,"glenfiddich 12 yo":565,"johnnie walker double black":495,
  "johnnie walker black label":395,"chivas regal 12":395,"jack daniel's":395,
  "teachers 50":315,"black dog triple gold reserve":315,"ballantine's finest":245,
  "johnnie walker red label":245,"jim beam kentucky bourbon":240,"black dog centenary black reserve":225,
  "vat 69":215,"black & white blended scotch":235,"seagrams 100 pipers deluxe scotch":235,
  "teachers highland cream":235,"jameson irish whiskey":270,"old monk coffee xo":135,
  "bacardi limon":125,"bacardi mango chilli":125,"old monk matured xxx":75,
  "grey goose":430,"absolut":245,"magic moments (all flavors)":100,"magic moments pure grain":90,
  "honey bee brandy":85,"bombay sapphire london dry gin":315
};
var foodData = {
  "chilly chicken dry":199,"chilli chicken dry":199,"chicken dry fry":199,"chicken dry":199,
  "chicken pakora":189,"chilli chicken":220,"chicken 65":200,"crispy chicken":219,
  "chicken manchurian dry":249,"chicken lollipop":229,"fish fry (1 pc)":60,"fish fry (2 pcs)":150,
  "crispy chilli baby corn":179,"paneer 65":179,"chilli paneer dry":179,"paneer bhurji":199,
  "paneer pakora":150,"veg pakora":80,"egg bhurji":49,"egg pakora":60,
  "masala omelette":39,"masala omlette":39,"plain omlette":39,"boiled egg (2 pcs)":39,
  "onion pakora":60,"papar fry":29,"papad fry":29,"papad roast":19,"masala papad":39,"papar dry":20,
  "butter paneer":200,"kadai paneer":180,"chilly paneer":160,"chicken kosha":200,
  "chicken butter masala":250,"kadai chicken":220,"mutton kosha":380,"mutton curry":300,
  "chana masala":50,"peanut masala":60,"green salad":59,"onion salad":39,
  "cucumber salad":39,"lemon & chilli salad":29,"lemon &amp; chilli salad":29,"rocket salad":99,
  "roti":10,"butter roti":20,"plain rice (basmati)":60
};
var beerKeys = ['kingfisher','tuborg','carlsberg','budweiser','corona','breezer'];

function lookup(dict,key){
  if(dict[key]!==undefined)return dict[key];
  for(var k in dict){if(key.includes(k)||k.includes(key))return dict[k];}
  return null;
}
function escapeHtml(s){ if(s==null||s===undefined)return''; var d=document.createElement('div'); d.textContent=String(s); return d.innerHTML; }
function fmt(n){return '\u20b9'+Number(n).toLocaleString('en-IN');}

// ── TABS ──
function switchTab(id,btn){
  document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
  clearSearch();
}
function toggleAcc(header){header.parentElement.classList.toggle('open');}

// ── AUTH ──
var EMP_KEY='royal_emp_auth';
function isLoggedIn(){return localStorage.getItem(EMP_KEY)==='true';}
function initAuth(){
  if(parseInt(localStorage.getItem('royal_emp_attempts')||'0')>=5){
    var b=document.getElementById('empLoginBtn');if(b)b.classList.add('hidden');
    var s=document.getElementById('empStatus');if(s)s.classList.add('hidden');
  }
  if(isLoggedIn())showLoggedIn();
}
function showLoggedIn(){
  var loginBtn=document.getElementById('empLoginBtn'),status=document.getElementById('empStatus');
  var dot=document.getElementById('empDot'),cartBar=document.getElementById('cartBar'),tableBtn=document.getElementById('tableIconBtn');
  if(loginBtn)loginBtn.classList.add('hidden');
  if(status){status.classList.remove('hidden');status.classList.add('visible');}
  if(dot)dot.classList.remove('hidden');
  if(tableBtn)tableBtn.classList.remove('hidden');
  updateCartBar();
}
function logout(){
  localStorage.removeItem(EMP_KEY);
  var loginBtn=document.getElementById('empLoginBtn'),status=document.getElementById('empStatus');
  var dot=document.getElementById('empDot'),cartBar=document.getElementById('cartBar'),tableBtn=document.getElementById('tableIconBtn');
  if(loginBtn)loginBtn.classList.remove('hidden');
  if(status){status.classList.add('hidden');status.classList.remove('visible');}
  if(dot)dot.classList.add('hidden');
  if(cartBar)cartBar.classList.add('hidden');
  if(tableBtn)tableBtn.classList.add('hidden');
  updateCartBar();
  showToast('Logged out');
}
function openLoginPopup(){
  var ov=document.getElementById('loginOverlay'),inp=document.getElementById('loginPwInput'),err=document.getElementById('loginError');
  if(!ov)return; ov.classList.add('overlay-visible');
  if(inp)inp.value=''; if(err)err.textContent='';
  setTimeout(function(){var i=document.getElementById('loginPwInput');if(i)i.focus();},100);
}
function closeLoginPopup(){var ov=document.getElementById('loginOverlay');if(ov)ov.classList.remove('overlay-visible');}
function submitLogin(){
  var inp=document.getElementById('loginPwInput'),err=document.getElementById('loginError'),val=inp?inp.value:'';
  if(val==='12353'){
    localStorage.setItem(EMP_KEY,'true');localStorage.removeItem('royal_emp_attempts');
    closeLoginPopup();showLoggedIn();
  } else {
    var att=parseInt(localStorage.getItem('royal_emp_attempts')||'0')+1;
    localStorage.setItem('royal_emp_attempts',att);
    var rem=5-att;
    if(rem<=0){closeLoginPopup();var b=document.getElementById('empLoginBtn');if(b)b.classList.add('hidden');}
    else{
      if(err)err.textContent='Incorrect. '+rem+' attempt'+(rem===1?'':'s')+' left.';
      if(inp){inp.value='';inp.focus();}
    }
  }
}

// ── POPUP QTY ──
var _popupName='';
var _popupSizes={};

function popupQtyChange(size,delta){
  var entry=_popupSizes[size];if(!entry)return;
  var price=entry.price;var label=entry.label||size;
  var items=getBill();var key=_popupName+'||'+label;
  var existing=items.find(function(i){return i.key===key;});
  if(delta>0){
    if(existing){existing.qty++;}
    else{items.push({key:key,name:_popupName,price:price,size:label,qty:1});}
  } else {
    if(existing){
      existing.qty=Math.max(0,existing.qty-1);
      if(existing.qty===0)items=items.filter(function(i){return i.key!==key;});
    }
  }
  saveBill(items);refreshPopupQty();
}

function refreshPopupQty(){
  var items=getBill();
  var prefixMap={'Full':'mrpFull','60ml':'mrp60ml','30ml':'mrp30ml','Half':'mrpHalf','90ml':'mrp90ml','Qtr':'mrpQtr','MRP':'mrpMrp'};
  Object.keys(_popupSizes).forEach(function(size){
    var entry=_popupSizes[size];var label=entry?entry.label||size:size;
    var prefix=prefixMap[size]||null;
    if(!prefix)return;
    var key=_popupName+'||'+label;
    var found=items.find(function(i){return i.key===key;});
    var qty=found?found.qty:0;
    var addBtn=document.getElementById(prefix+'Add');
    var sel=document.getElementById(prefix+'Sel');
    var countEl=document.getElementById(prefix+'Count');
    if(!addBtn||!sel)return;
    if(qty>0){addBtn.classList.add('inline-add-hidden');sel.classList.remove('qty-sel-hidden');if(countEl)countEl.textContent=qty;}
    else{addBtn.classList.remove('inline-add-hidden');sel.classList.add('qty-sel-hidden');}
  });
  renderBillPanel();
  updateCartBar();
}

function showRow(prefix,visible){
  var a=document.getElementById(prefix+'Add');var s=document.getElementById(prefix+'Sel');
  if(a){if(visible)a.classList.remove('inline-add-hidden');else a.classList.add('inline-add-hidden');}
  if(s)s.classList.add('qty-sel-hidden');
}

// ── ITEM POPUP ──
function showItemPopup(name,isFood,size,tabId){
  if(!isLoggedIn())return;
  _popupName=name;_popupSizes={};
  if(isFood){showFoodPopup(name);}else{showLiquorPopup(name,size,tabId);}
}

var foodNoHalf=new Set(['roti','butter roti']);
function showFoodPopup(name){
  var key=name.toLowerCase().trim();
  var price=lookup(foodData,key);
  var noHalf=foodNoHalf.has(key);
  var half=!noHalf&&price?Math.ceil((price/2)/5)*5:null;
  var label=noHalf?'pc':'Full plate';
  if(price)_popupSizes['Full']={price:price,label:label};
  if(half)_popupSizes['Half']={price:half,label:'Half plate'};
  document.getElementById('mrpItemName').textContent=name;
  document.getElementById('mrpMrpRow').classList.add('mrp-row-hidden');
  document.getElementById('mrpFullLabel').textContent=noHalf?'Per piece':'Full Plate';
  document.getElementById('mrpFull').textContent=price?fmt(price):'\u2014';
  document.getElementById('mrpHalfLabel').textContent='Half Plate';
  document.getElementById('mrpHalf').textContent=half?fmt(half):'';
  document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
  document.getElementById('mrp30mlRow').classList.add('mrp-row-hidden');
  document.getElementById('mrpHalfRow').classList.toggle('mrp-row-hidden',!half);
  document.getElementById('mrp90mlRow').classList.add('mrp-row-hidden');
  document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
  showRow('mrpFull',!!price);showRow('mrp60ml',false);showRow('mrp30ml',false);showRow('mrpHalf',!!half);showRow('mrp90ml',false);showRow('mrpQtr',false);showRow('mrpMrp',false);
  var updateRow=document.getElementById('mrpUpdateTableRow');
  if(updateRow){updateRow.classList.toggle('mrp-row-hidden',!(_editingFromPending||_editingFromTable));var updateBtn=document.getElementById('mrpUpdateTableBtn');if(updateBtn)updateBtn.textContent='\u{1F4CB} Update Table';}
  var popup=document.querySelector('#mrpOverlay .mrp-popup');if(popup){if(billingEditMode)popup.classList.remove('mrp-readonly');else popup.classList.add('mrp-readonly');}
  document.getElementById('mrpOverlay').classList.add('overlay-visible');
  refreshPopupQty();
}

function showLiquorPopup(name,size,tabId){
  var key=name.toLowerCase().trim();
  var isBeer=beerKeys.some(function(b){return key.includes(b);});
  document.getElementById('mrpItemName').textContent=name;
  if(isBeer){
    var beerMrp=(size&&beerMrpMap[key+' '+size])?beerMrpMap[key+' '+size]:lookup(beerMrpMap,key);
    var dineIn=(size&&beerDineIn[key+' '+size])?beerDineIn[key+' '+size]:lookup(beerDineIn,key);
    var cartSize=size||'Bottle';
    _popupSizes={};if(dineIn)_popupSizes['Full']={price:dineIn,label:cartSize};
    if(beerMrp)_popupSizes['MRP']={price:beerMrp,label:'MRP'};
    document.getElementById('mrpMrpRow').classList.toggle('mrp-row-hidden',!beerMrp);
    document.getElementById('mrpMrpVal').textContent=beerMrp?fmt(beerMrp):'';
    document.getElementById('mrpFullLabel').textContent='Dine-In (Per Bottle)';
    document.getElementById('mrpFull').textContent=dineIn?fmt(dineIn):'\u2014';
    document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
    document.getElementById('mrp30mlRow').classList.add('mrp-row-hidden');
    document.getElementById('mrpHalfRow').classList.add('mrp-row-hidden');
    document.getElementById('mrp90mlRow').classList.add('mrp-row-hidden');
    document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
    showRow('mrpFull',!!dineIn);showRow('mrp60ml',false);showRow('mrp30ml',false);showRow('mrpHalf',false);showRow('mrp90ml',false);showRow('mrpQtr',false);showRow('mrpMrp',!!beerMrp);
  } else {
    var data=lookup(mrpData,key);var realMrp=lookup(bevcoMrp,key);
    document.getElementById('mrpMrpRow').classList.toggle('mrp-row-hidden',!realMrp);
    document.getElementById('mrpMrpVal').textContent=realMrp?fmt(realMrp):'';
    document.getElementById('mrpFullLabel').textContent='Dine-In (Full Bottle)';
    if(data){
      var full=data[0],half=data[1],qtr=data[2];
      var sixtyMl=lookup(ml60Map,key)||Math.ceil((full/12.5)/10)*10;
      var thirtyMl=sixtyMl?Math.ceil((sixtyMl/2)/5)*5:null;
      var ninetyMl=qtr?Math.ceil((qtr/2)/5)*5:null;
      var whiskyOnly=(tabId==='tab-whisky'||tabId==='tab-vodka-rum');
      if(whiskyOnly){
        _popupSizes={};
        if(realMrp)_popupSizes['MRP']={price:realMrp,label:'MRP'};
        _popupSizes['Full']={price:full,label:'Full'};_popupSizes['60ml']={price:sixtyMl,label:'60ml'};
        if(thirtyMl)_popupSizes['30ml']={price:thirtyMl,label:'30ml'};
        _popupSizes['Half']={price:half,label:'Half'};
        if(ninetyMl)_popupSizes['90ml']={price:ninetyMl,label:'90ml'};
        _popupSizes['Qtr']={price:qtr,label:'Qtr'};
      } else {
        _popupSizes={};
        if(realMrp)_popupSizes['MRP']={price:realMrp,label:'MRP'};
        _popupSizes['Full']={price:full,label:'Full'};
      }
      document.getElementById('mrpFull').textContent=fmt(full);
      document.getElementById('mrp60mlRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrp60ml').textContent=fmt(sixtyMl);
      document.getElementById('mrp30mlRow').classList.toggle('mrp-row-hidden',!whiskyOnly||!thirtyMl);document.getElementById('mrp30ml').textContent=thirtyMl?fmt(thirtyMl):'';
      document.getElementById('mrpHalfRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrpHalfLabel').textContent='Half Bottle';
      document.getElementById('mrpHalf').textContent=fmt(half);
      document.getElementById('mrp90mlRow').classList.toggle('mrp-row-hidden',!whiskyOnly||!ninetyMl);document.getElementById('mrp90ml').textContent=ninetyMl?fmt(ninetyMl):'';
      document.getElementById('mrpQtrRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrpQtr').textContent=fmt(qtr);
      showRow('mrpFull',true);showRow('mrp60ml',whiskyOnly);showRow('mrp30ml',whiskyOnly&&!!thirtyMl);showRow('mrpHalf',whiskyOnly);showRow('mrp90ml',whiskyOnly&&!!ninetyMl);showRow('mrpQtr',whiskyOnly);showRow('mrpMrp',!!realMrp);
    } else {
      if(realMrp)_popupSizes['MRP']={price:realMrp,label:'MRP'};
      document.getElementById('mrpFull').textContent='\u2014';
      document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
      document.getElementById('mrp30mlRow').classList.add('mrp-row-hidden');
      document.getElementById('mrpHalfRow').classList.add('mrp-row-hidden');
      document.getElementById('mrp90mlRow').classList.add('mrp-row-hidden');
      document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
      showRow('mrpFull',false);showRow('mrp60ml',false);showRow('mrp30ml',false);showRow('mrpHalf',false);showRow('mrp90ml',false);showRow('mrpQtr',false);showRow('mrpMrp',!!realMrp);
    }
  }
  var updateRow=document.getElementById('mrpUpdateTableRow');
  if(updateRow){updateRow.classList.toggle('mrp-row-hidden',!(_editingFromPending||_editingFromTable));var updateBtn=document.getElementById('mrpUpdateTableBtn');if(updateBtn)updateBtn.textContent='\u{1F4CB} Update Table';}
  var popup=document.querySelector('#mrpOverlay .mrp-popup');if(popup){if(billingEditMode)popup.classList.remove('mrp-readonly');else popup.classList.add('mrp-readonly');}
  document.getElementById('mrpOverlay').classList.add('overlay-visible');
  refreshPopupQty();
}

function closeMrpPopup(){document.getElementById('mrpOverlay').classList.remove('overlay-visible');}
function updateTableFromPopup(){
  var items=getBill();if(!items.length){showToast('Bill is empty');closeMrpPopup();return;}
  var gross=items.reduce(function(s,i){return s+(i.price*i.qty);},0);
  var discEl=document.getElementById('discountInput');var disc=discEl?(parseInt(discEl.value)||0):0;
  var net=Math.max(0,gross-disc);
  var billOnEl=document.getElementById('billOnInput');var billOn=billOnEl?billOnEl.value.trim():'';
  if(!billOn){createBill();closeMrpPopup();return;}
  if(_editingBillId){
    var pending=getPending();var bill=pending.find(function(b){return b.id===_editingBillId;});
    if(bill){
      bill.items=JSON.parse(JSON.stringify(items));bill.gross=gross;bill.discount=disc;bill.net=net;bill.time=new Date().toLocaleString('en-IN');
      savePending(pending);
      renderBillPanel();updateCartBar();showToast('Bill updated \u2713');
    }
  }else{
    var cnt=parseInt(localStorage.getItem('royal_bill_counter')||'0',10)+1;
    localStorage.setItem('royal_bill_counter',String(cnt));
    var billOnFinal=billOn||'Bill #'+cnt;
    if(billOnFinal){
      var empty=getEmptyTables();
      if(empty.indexOf(billOnFinal)>=0){empty=empty.filter(function(n){return n!==billOnFinal;});saveEmptyTables(empty);}
    }
    var newId=Date.now();
    var pending=getPending();
    pending.unshift({id:newId,time:new Date().toLocaleString('en-IN'),billOn:billOnFinal,items:JSON.parse(JSON.stringify(items)),gross:gross,discount:disc,net:net});
    savePending(pending);
    _editingBillId=newId;
    renderBillPanel();updateCartBar();showToast('Bill saved \u2713');
  }
  closeMrpPopup();
}

// ── CLICK OUTSIDE TO CLOSE ──
function isClickOutsidePopup(overlay,e){
  if(!overlay||!overlay.classList.contains('overlay-visible'))return false;
  var popup=overlay.querySelector('.popup');
  return overlay.contains(e.target)&&(!popup||!popup.contains(e.target));
}
document.addEventListener('click',function(e){
  if(isClickOutsidePopup(document.getElementById('mrpOverlay'),e)){closeMrpPopup();}
  if(isClickOutsidePopup(document.getElementById('loginOverlay'),e)){closeLoginPopup();}
  if(isClickOutsidePopup(document.getElementById('paymentMethodOverlay'),e)){closePaymentMethodPopup();}
  if(isClickOutsidePopup(document.getElementById('payLaterOverlay'),e)){closePayLaterPopup();}
  if(isClickOutsidePopup(document.getElementById('createTableOverlay'),e)){closeCreateTablePopup();}
  if(isClickOutsidePopup(document.getElementById('tableOptionsOverlay'),e)){closeTableOptionsPopup();}
});

// ── BILLING DATA ──
var BILL_KEY='royal_current_bill',HIST_KEY='royal_bill_history',PEND_KEY='royal_pending_bills',TABLES_KEY='royal_empty_tables';
function getBill(){try{return JSON.parse(localStorage.getItem(BILL_KEY))||[];}catch(e){return [];}}
function saveBill(items){localStorage.setItem(BILL_KEY,JSON.stringify(items));}
function getHistory(){try{return JSON.parse(localStorage.getItem(HIST_KEY))||[];}catch(e){return [];}}
function getPending(){try{return JSON.parse(localStorage.getItem(PEND_KEY))||[];}catch(e){return [];}}
function savePending(p){localStorage.setItem(PEND_KEY,JSON.stringify(p));}
function getEmptyTables(){try{return JSON.parse(localStorage.getItem(TABLES_KEY))||[];}catch(e){return [];}}
function saveEmptyTables(t){localStorage.setItem(TABLES_KEY,JSON.stringify(t));}
function getAllTables(){
  var pending=getPending(),empty=getEmptyTables();
  var fromPending={};
  pending.forEach(function(b){var n=(b.billOn||'').trim();if(n)fromPending[n]=true;});
  empty.forEach(function(n){if(n)fromPending[n]=true;});
  return Object.keys(fromPending);
}

function addToCart(name,price,size){
  var items=getBill();var key=name+'||'+size;
  var ex=items.find(function(i){return i.key===key;});
  if(ex){ex.qty++;}else{items.push({key:key,name:name,price:price,size:size,qty:1});}
  saveBill(items);renderBillPanel();updateCartBar();showToast(name+' ('+size+') added');
}
function addWater(price){
  var items=getBill();var key='Water \u20b9'+price+'||ea';
  var ex=items.find(function(i){return i.key===key;});
  if(ex){ex.qty++;}else{items.push({key:key,name:'Water',price:price,size:'\u20b9'+price,qty:1});}
  saveBill(items);renderBillPanel();updateCartBar();
}
function addChakna(){
  var items=getBill();var key='Chakna||extra';
  var ex=items.find(function(i){return i.key===key;});
  if(ex){ex.qty++;}else{items.push({key:key,name:'Chakna',price:10,size:'extra',qty:1});}
  saveBill(items);renderBillPanel();updateCartBar();
}
function addCustomItem(){
  var nameEl=document.getElementById('customItemName');
  var priceEl=document.getElementById('customItemPrice');
  var name=nameEl?nameEl.value.trim():'';
  var price=priceEl?parseInt(priceEl.value):0;
  if(!name){showToast('Enter item name');return;}
  if(!price||price<=0){showToast('Enter valid price');return;}
  addToCart(name,price,'custom');
  renderBillPanel();updateCartBar();
  if(nameEl)nameEl.value='';if(priceEl)priceEl.value='';
  showToast(name+' added');
}

function updateCartBar(){
  var items=getBill();
  var count=items.reduce(function(s,i){return s+i.qty;},0);
  var total=items.reduce(function(s,i){return s+(i.price*i.qty);},0);
  var summary=document.getElementById('cartBarSummary');
  var totalEl=document.getElementById('cartBarTotal');
  if(summary)summary.textContent=count>0?count+' item'+(count===1?'':'s')+' in bill':'Tap any item to add';
  if(totalEl)totalEl.textContent=fmt(total);
  var pb=document.getElementById('pendingBadge');
  if(pb){var pc=getPending().length;if(pc){pb.classList.remove('hidden');pb.textContent=pc;}else{pb.classList.add('hidden');}}
}

function renderBillPanel(){
  var items=getBill();var container=document.getElementById('billItems');if(!container)return;
  if(!items.length){
    container.innerHTML='<div class="bill-empty-msg">No items \u2014 tap any menu item to add</div>';
    var bt=document.getElementById('billTotal');var nt=document.getElementById('netTotal');
    if(bt)bt.textContent=fmt(0);if(nt)nt.textContent=fmt(0);
    updateCartBar();return;
  }
  var total=0,html='';
  items.forEach(function(item,idx){
    var sub=item.price*item.qty;total+=sub;
    html+='<div class="bill-item-row">'+
      '<div class="bill-item-info"><div class="bill-item-name">'+escapeHtml(item.name)+'</div>'+
      '<div class="bill-item-meta">'+escapeHtml(item.size)+' &middot; '+fmt(item.price)+' each</div></div>'+
      '<div class="bill-item-qty">'+
        '<button class="bill-item-qty-btn" onclick="changeQty('+idx+',-1)">\u2212</button>'+
        '<input type="number" class="bill-item-qty-input" value="'+item.qty+'" min="1" onchange="setQty('+idx+',this.value)">'+
        '<button class="bill-item-qty-btn" onclick="changeQty('+idx+',1)">+</button>'+
      '</div>'+
      '<div class="bill-item-sub">'+fmt(sub)+'</div>'+
      '<button class="btn-remove-item" onclick="removeItem('+idx+')">\u2715</button>'+
    '</div>';
  });
  container.innerHTML=html;
  var bt=document.getElementById('billTotal');if(bt)bt.textContent=fmt(total);
  var discEl=document.getElementById('discountInput');var disc=discEl?(parseInt(discEl.value)||0):0;
  var nt=document.getElementById('netTotal');if(nt)nt.textContent=fmt(Math.max(0,total-disc));
  updateCartBar();
}
function changeQty(idx,delta){var items=getBill();if(!items[idx])return;items[idx].qty=Math.max(1,items[idx].qty+delta);saveBill(items);renderBillPanel();}
function setQty(idx,val){var items=getBill();if(!items[idx])return;var n=parseInt(val);if(!isNaN(n)&&n>=1){items[idx].qty=n;saveBill(items);renderBillPanel();}}
function removeItem(idx){if(!confirm('Remove this item?'))return;var items=getBill();items.splice(idx,1);saveBill(items);renderBillPanel();}

function toggleDiscount(){
  var row=document.getElementById('discountRow');var btn=document.getElementById('discountToggleBtn');
  var isHidden=row.classList.contains('hidden');
  row.classList.toggle('hidden',!isHidden);btn.textContent=isHidden?'\u2715 Discount':'+ Discount';
  if(!vis)setTimeout(function(){document.getElementById('discountInput').focus();},50);
}
function applyDiscount(){
  var gross=getBill().reduce(function(s,i){return s+(i.price*i.qty);},0);
  var disc=parseInt(document.getElementById('discountInput').value)||0;
  document.getElementById('netTotal').textContent=fmt(Math.max(0,gross-disc));
  showToast('Discount applied');
}
function createBill(){
  var items=getBill();if(!items.length){showToast('Bill is empty');return;}
  var gross=items.reduce(function(s,i){return s+(i.price*i.qty);},0);
  var discEl=document.getElementById('discountInput');var disc=discEl?(parseInt(discEl.value)||0):0;
  var net=Math.max(0,gross-disc);
  var billOnEl=document.getElementById('billOnInput');var billOn=billOnEl?billOnEl.value.trim():'';
  if(!billOn){
    var cnt=parseInt(localStorage.getItem('royal_bill_counter')||'0',10)+1;
    localStorage.setItem('royal_bill_counter',String(cnt));
    billOn='Bill #'+cnt;
  }
  if(billOn){
    var empty=getEmptyTables();
    if(empty.indexOf(billOn)>=0){empty=empty.filter(function(n){return n!==billOn;});saveEmptyTables(empty);}
  }
  var pending=getPending();
  if(_editingBillId){
    pending=pending.filter(function(b){return b.id!==_editingBillId;});
    _editingBillId=null;
  }
  pending.unshift({id:Date.now(),time:new Date().toLocaleString('en-IN'),billOn:billOn,items:JSON.parse(JSON.stringify(items)),gross:gross,discount:disc,net:net});
  savePending(pending);localStorage.removeItem(BILL_KEY);
  if(discEl)discEl.value='';if(billOnEl)billOnEl.value='';
  document.getElementById('discountRow').classList.add('hidden');
  document.getElementById('discountToggleBtn').textContent='+ Discount';
  _editingFromPending=false;_editingFromTable=false;
  var btn=document.getElementById('createBillBtn');if(btn)btn.textContent='\u{1F4CB} Create Bill';
  renderBillPanel();showToast('Bill created \u2713');
  closeBilling();
  if(typeof openTablesPanel==='function')openTablesPanel();
  if(typeof switchTablesPanelTab==='function')switchTablesPanelTab('pending');
  if(typeof renderTablesPanelPending==='function')renderTablesPanelPending();
  if(typeof renderTablesGrid==='function')renderTablesGrid();
}
var _pendingPayId=null;
function openPaymentMethodPopup(id){_pendingPayId=id;document.getElementById('paymentMethodOverlay').classList.add('overlay-visible');}
function closePaymentMethodPopup(){_pendingPayId=null;document.getElementById('paymentMethodOverlay').classList.remove('overlay-visible');}
function confirmPaymentMethod(method){
  var id=_pendingPayId;closePaymentMethodPopup();if(!id)return;
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  bill.paymentMethod=method;
  var hist=getHistory();hist.unshift(bill);localStorage.setItem(HIST_KEY,JSON.stringify(hist));
  savePending(pending.filter(function(b){return b.id!==id;}));
  closePendingDetail();if(typeof renderTablesPanelPending==='function')renderTablesPanelPending();updateCartBar();showToast('Marked as paid \u2713');
  if(typeof renderTablesGrid==='function')renderTablesGrid();
}
function markPaid(id){
  openPaymentMethodPopup(id);
}
var _payLaterBillId=null,_payLaterBillNet=0;
function payLater(id){
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  _payLaterBillId=id;_payLaterBillNet=bill.net;
  var totalEl=document.getElementById('payLaterTotalDisplay');if(totalEl)totalEl.textContent='Bill Total: '+fmt(bill.net);
  var inp=document.getElementById('payLaterAmountInput');if(inp)inp.value='0';
  updatePayLaterPending();
  document.getElementById('payLaterOverlay').classList.add('overlay-visible');
}
function closePayLaterPopup(){
  _payLaterBillId=null;
  document.getElementById('payLaterOverlay').classList.remove('overlay-visible');
}
function updatePayLaterPending(){
  var inp=document.getElementById('payLaterAmountInput');
  var paid=inp?Math.max(0,parseInt(inp.value)||0):0;
  var el=document.getElementById('payLaterPendingDisplay');
  if(el)el.textContent=fmt(Math.max(0,_payLaterBillNet-paid));
}
function confirmPayLater(){
  var id=_payLaterBillId;if(!id)return;
  var inp=document.getElementById('payLaterAmountInput');
  var paid=inp?Math.max(0,parseInt(inp.value)||0):0;
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  bill.paymentType='payLater';bill.amountPaid=paid;bill.amountPending=Math.max(0,bill.net-paid);
  var hist=getHistory();hist.unshift(bill);localStorage.setItem(HIST_KEY,JSON.stringify(hist));
  savePending(pending.filter(function(b){return b.id!==id;}));
  closePayLaterPopup();closePendingDetail();
  if(typeof renderTablesPanelPending==='function')renderTablesPanelPending();
  updateCartBar();showToast('Saved as Pay Later \u2713');
  if(typeof renderTablesGrid==='function')renderTablesGrid();
}
function editPendingBill(id){
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  saveBill(bill.items);
  _editingBillId=id;
  var billOnEl=document.getElementById('billOnInput');if(billOnEl)billOnEl.value=bill.billOn||'';
  var discEl=document.getElementById('discountInput');var discRow=document.getElementById('discountRow');var discBtn=document.getElementById('discountToggleBtn');
  if(bill.discount&&bill.discount>0){if(discEl)discEl.value=bill.discount;if(discRow)discRow.classList.remove('hidden');if(discBtn)discBtn.textContent='\u2715 Discount';}
  _editingFromPending=true;
  if(!_editingFromTable)_editingFromTable=false;
  var btn=document.getElementById('createBillBtn');if(btn)btn.textContent='\u{1F4CB} '+(_editingFromTable?'Update Table':'Update Bill');
  closePendingDetail();
  if(typeof closeTablesPanel==='function')closeTablesPanel();
  openBilling();
  renderBillPanel();switchBillTab('current');showSearchInBilling();showToast('Bill loaded for editing');
}
function deletePendingBill(id){
  if(!confirm('Delete this pending bill?'))return;
  savePending(getPending().filter(function(b){return b.id!==id;}));
  closePendingDetail();if(typeof renderTablesPanelPending==='function')renderTablesPanelPending();updateCartBar();
  if(typeof renderTablesGrid==='function')renderTablesGrid();
}

// ── PENDING BILL DETAIL (full screen) ──
function openPendingDetail(id){
  var bill=getPending().find(function(b){return b.id===id;});if(!bill)return;
  var rows=bill.items.map(function(i){
    return '<tr><td class="pending-detail-td">'+escapeHtml(i.name)+'<div class="pending-detail-size">'+escapeHtml(i.size)+'</div></td>'+
      '<td class="pending-detail-td-center">\xd7'+i.qty+'</td>'+
      '<td class="pending-detail-td-right">'+fmt(i.price*i.qty)+'</td></tr>';
  }).join('');
  var disc=bill.discount?'<tr><td colspan="2" class="pending-detail-discount">Discount</td><td class="pending-detail-discount pending-detail-td-right">\u2212 '+fmt(bill.discount)+'</td></tr>':'';
  var panel=document.getElementById('pendingDetailPanel');
  if(!panel)return;
  document.getElementById('pendingDetailTitle').textContent=(bill.billOn||'Bill')+' \u00b7 '+bill.time;
  document.getElementById('pendingDetailBody').innerHTML=
    '<table class="pending-detail-table">'+
      '<tr><th class="pending-detail-th">ITEM</th>'+
      '<th class="pending-detail-th pending-detail-th-center">QTY</th>'+
      '<th class="pending-detail-th pending-detail-th-right">AMOUNT</th></tr>'+
      rows+disc+
      '<tr class="pending-detail-total"><td colspan="2">TOTAL</td>'+
        '<td class="pending-detail-td-right">'+fmt(bill.net)+'</td>'+
      '</tr></table>';
  document.getElementById('pendingDetailEdit').onclick=function(){editPendingBill(id);};
  document.getElementById('pendingDetailDelete').onclick=function(){deletePendingBill(id);};
  document.getElementById('pendingDetailPay').onclick=function(){markPaid(id);};
  document.getElementById('pendingDetailPayLater').onclick=function(){payLater(id);};
  panel.classList.remove('hidden');
}
function closePendingDetail(){
  var panel=document.getElementById('pendingDetailPanel');
  if(panel)panel.classList.add('hidden');
}

function renderPendingBills(){
  var pending=getPending();var c=document.getElementById('pendingBillsList');if(!c)return;
  if(!pending.length){c.innerHTML='<div class="empty-msg">No pending bills</div>';return;}
  c.innerHTML=pending.map(function(bill,i){
    var preview=bill.items.slice(0,2).map(function(it){return escapeHtml(it.name);}).join(', ')+(bill.items.length>2?' +'+( bill.items.length-2)+' more':'');
    return '<div class="pending-card" onclick="openPendingDetail('+bill.id+')">'+
      '<div class="pending-card-header">'+
        '<span class="pending-card-meta">#'+(pending.length-i)+(bill.billOn?' \u00b7 '+bill.billOn:'')+' \u00b7 '+bill.time+'</span>'+
        '<span class="pending-card-amount">'+fmt(bill.net)+'</span>'+
      '</div>'+
      '<div class="pending-card-preview">'+preview+'</div>'+
    '</div>';
  }).join('');
}

// ── TABLES (COT/BOT) ──
function openTablesPanel(){
  if(!isLoggedIn())return;
  var p=document.getElementById('tablesPanel');if(!p)return;
  p.classList.remove('hidden');
  switchTablesPanelTab('tables');
}
function closeTablesPanel(){
  var p=document.getElementById('tablesPanel');if(p)p.classList.add('hidden');
}
function switchTablesPanelTab(tab){
  ['tables','pending','history'].forEach(function(t){
    var pane=document.getElementById('tablesPane'+t.charAt(0).toUpperCase()+t.slice(1));if(pane)pane.classList.toggle('hidden',t!==tab);
    var btn=document.getElementById('tablesPanelTab-'+t);
    if(btn)btn.classList.toggle('active',t===tab);
  });
  if(tab==='tables')renderTablesGrid();
  if(tab==='pending')renderTablesPanelPending();
  if(tab==='history')renderTablesPanelHistory();
  var pb=document.getElementById('tablesPanelPendingBadge');if(pb){var pc=getPending().length;if(pc){pb.classList.remove('hidden');pb.textContent=pc;}else{pb.classList.add('hidden');}}
}
function renderTablesPanelPending(){
  var pending=getPending();var c=document.getElementById('tablesPanelPendingList');if(!c)return;
  if(!pending.length){c.innerHTML='<div class="empty-msg">No pending bills</div>';return;}
  c.innerHTML=pending.map(function(bill,i){
    var preview=bill.items.slice(0,2).map(function(it){return escapeHtml(it.name);}).join(', ')+(bill.items.length>2?' +'+(bill.items.length-2)+' more':'');
    return '<div class="pending-card" onclick="openPendingDetail('+bill.id+')">'+
      '<div class="pending-card-header">'+
        '<span class="pending-card-meta">#'+(pending.length-i)+(bill.billOn?' \u00b7 '+bill.billOn:'')+' \u00b7 '+bill.time+'</span>'+
        '<span class="pending-card-amount">'+fmt(bill.net)+'</span>'+
      '</div>'+
      '<div class="pending-card-preview">'+preview+'</div>'+
    '</div>';
  }).join('');
}
function renderTablesPanelHistory(){
  var hist=getHistory();var c=document.getElementById('tablesPanelHistoryList');var da=document.getElementById('tablesPanelHistoryDownload');
  if(!c)return;
  if(da){da.classList.toggle('hidden',!isLoggedIn()||!hist.length);}
  if(!hist.length){c.innerHTML='<div class="empty-msg">No paid bills yet</div>';return;}
  var byDate={};
  hist.forEach(function(bill){var k=getDateKey(bill);if(!byDate[k])byDate[k]=[];byDate[k].push(bill);});
  var dates=Object.keys(byDate).sort().reverse();
  var html='';
  dates.forEach(function(dateKey){
    var bills=byDate[dateKey];
    var dayTotal=bills.reduce(function(s,b){return s+(b.net||b.total||0);},0);
    var parts=dateKey.split('-');
    var dateLabel=parts.length>=3?parts[2]+'/'+parts[1]+'/'+parts[0]:dateKey;
    var delDayBtn=isLoggedIn()?'<button class="btn-delete-day" onclick="event.stopPropagation();deleteHistoryByDate(\''+dateKey+'\')">Del</button>':'';
    html+='<div class="history-date-section"><div class="history-date-header"><span>'+dateLabel+' \u00b7 Day Total: '+fmt(dayTotal)+'</span>'+delDayBtn+'</div>';
    bills.forEach(function(bill){
      var i=hist.indexOf(bill);
      var rows=bill.items.map(function(it){return '<div class="history-item-row">'+
        '<span>'+escapeHtml(it.name)+' ('+escapeHtml(it.size)+') \xd7'+it.qty+'</span><span class="history-item-amount">'+fmt(it.price*it.qty)+'</span></div>';}).join('');
      var disc=bill.discount?'<div class="history-discount-row"><span>Discount</span><span>\u2212 '+fmt(bill.discount)+'</span></div>':'';
      var isPayLater=bill.paymentType==='payLater';
      var pm=bill.paymentMethod;var pmStr=isPayLater?' \u00b7 Pay Later \u23F3':(pm==='cash'?' \u00b7 Cash':pm==='online'?' \u00b7 Online':pm==='both'?' \u00b7 Both':'');
      var statusIcon=isPayLater?'\u23F3':'\u2714';
      var payLaterInfo=isPayLater?'<div class="history-pay-later-row"><span>Paid: '+fmt(bill.amountPaid||0)+'</span><span class="history-pay-later-pending">Pending: '+fmt(bill.amountPending||0)+'</span></div>':'';
      var dlBtns=isLoggedIn()?'<div class="history-card-download"><button class="btn-history-card-dl" onclick="downloadBillByIdx('+i+')">Download CSV</button></div>':'';
      html+='<div class="history-card'+(isPayLater?' history-card-pay-later':'')+'">'+
        '<div class="history-card-header">'+
          '<span class="pending-card-meta">'+(bill.billOn?bill.billOn:'Bill')+' \u00b7 '+bill.time+pmStr+' '+statusIcon+'</span>'+
          '<span class="pending-card-amount">'+fmt(bill.net||bill.total||0)+'</span>'+
        '</div>'+rows+disc+payLaterInfo+dlBtns+'</div>';
    });
    html+='</div>';
  });
  c.innerHTML=html;
}
function renderTablesGrid(){
  var grid=document.getElementById('tablesGrid');if(!grid)return;
  var tables=getAllTables();
  if(!tables.length){grid.innerHTML='<div class="empty-msg">No tables yet. Create a table or create a bill with a table name.</div>';return;}
  var pending=getPending(),empty=getEmptyTables();
  var hasPending=function(n){return pending.some(function(b){return (b.billOn||'').trim()===n;});};
  var isEmpty=function(n){return empty.indexOf(n)>=0;};
  grid.innerHTML=tables.map(function(name){
    var isEmp=isEmpty(name);
    var bill=pending.find(function(b){return (b.billOn||'').trim()===name;});
    var attrVal=(name||'').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var delBtn=isEmp?'<button class="table-card-del" onclick="event.stopPropagation();deleteEmptyTable(this.parentElement.dataset.tableName)">\u2715</button>':'';
    var itemsHtml='',totalHtml='';
    if(bill&&bill.items&&bill.items.length){
      itemsHtml='<div class="table-card-items">'+bill.items.slice(0,4).map(function(it){return it.qty+'\xd7 '+escapeHtml(it.name);}).join(' \u00b7 ')+(bill.items.length>4?' +'+(bill.items.length-4):'')+'</div>';
      totalHtml='<div class="table-card-total">'+fmt(bill.net||bill.gross||0)+'</div>';
    } else if(isEmp){
      itemsHtml='<div class="table-card-items table-card-empty">Empty</div>';
    }
    return '<div class="table-card" data-table-name="'+attrVal+'" onclick="openTableOptionsPopup(this.dataset.tableName)">'+delBtn+'<div class="table-card-content"><span class="table-card-name">'+escapeHtml(name)+'</span>'+itemsHtml+totalHtml+'</div></div>';
  }).join('');
}
function openCreateTablePopup(){
  var ov=document.getElementById('createTableOverlay'),inp=document.getElementById('createTableInput');
  if(ov)ov.classList.add('overlay-visible');
  if(inp){inp.value='';inp.focus();}
}
function closeCreateTablePopup(){
  var ov=document.getElementById('createTableOverlay');
  if(ov)ov.classList.remove('overlay-visible');
}
function submitCreateTable(){
  var inp=document.getElementById('createTableInput');
  var name=inp?inp.value.trim():'';
  if(!name){showToast('Enter table name');return;}
  createTable(name);
  closeCreateTablePopup();
  renderTablesGrid();
  showToast('Table '+name+' created');
}
function createTable(name){
  var empty=getEmptyTables();
  if(empty.indexOf(name)<0)empty.push(name);
  saveEmptyTables(empty);
}
var _tableOptionsTableName='',_tableOptionsBillId=null;
function openTableOptionsPopup(tableName){
  if(!isLoggedIn())return;
  _tableOptionsTableName=tableName;_tableOptionsBillId=null;
  var pending=getPending(),bill=pending.find(function(b){return (b.billOn||'').trim()===tableName;});
  if(bill)_tableOptionsBillId=bill.id;
  var titleEl=document.getElementById('tableOptionsTitle'),bodyEl=document.getElementById('tableOptionsBody'),actionsEl=document.getElementById('tableOptionsActions');
  if(!titleEl||!bodyEl||!actionsEl)return;
  titleEl.textContent=tableName;
  if(bill){
    var rows=bill.items.map(function(i){
      return '<tr><td class="pending-detail-td">'+escapeHtml(i.name)+'<div class="pending-detail-size">'+escapeHtml(i.size)+'</div></td>'+
        '<td class="pending-detail-td-center">\xd7'+i.qty+'</td>'+
        '<td class="pending-detail-td-right">'+fmt(i.price*i.qty)+'</td></tr>';
    }).join('');
    var disc=bill.discount?'<tr><td colspan="2" class="pending-detail-discount">Discount</td><td class="pending-detail-discount pending-detail-td-right">\u2212 '+fmt(bill.discount)+'</td></tr>':'';
    bodyEl.innerHTML='<table class="pending-detail-table">'+
      '<tr><th class="pending-detail-th">ITEM</th><th class="pending-detail-th pending-detail-th-center">QTY</th><th class="pending-detail-th pending-detail-th-right">AMOUNT</th></tr>'+
      rows+disc+
      '<tr class="pending-detail-total"><td colspan="2">TOTAL</td><td class="pending-detail-td-right">'+fmt(bill.net)+'</td></tr></table>';
    bodyEl.classList.remove('hidden');
  } else {
    bodyEl.innerHTML='';
    bodyEl.classList.add('hidden');
  }
  actionsEl.innerHTML='<button class="popup-btn table-options-btn" onclick="closeTableOptionsPopup();openTableForEdit(_tableOptionsTableName)">\u270E Edit items</button>'+
    (bill?'<button class="popup-btn table-options-btn btn-pending-pay" onclick="closeTableOptionsPopup();closeTablesPanel();markPaid(_tableOptionsBillId)">\u2714 Mark as paid</button>':'')+
    (bill?'<button class="popup-btn table-options-btn btn-pending-pay-later" onclick="closeTableOptionsPopup();closeTablesPanel();payLater(_tableOptionsBillId)">\u23F3 Pay Later</button>':'');
  var ov=document.getElementById('tableOptionsOverlay');
  if(ov)ov.classList.add('overlay-visible');
}
function closeTableOptionsPopup(){
  var ov=document.getElementById('tableOptionsOverlay');
  if(ov)ov.classList.remove('overlay-visible');
}
function deleteEmptyTable(name){
  if(!confirm('Remove this table?'))return;
  var empty=getEmptyTables().filter(function(n){return n!==name;});
  saveEmptyTables(empty);
  renderTablesGrid();
  showToast('Table removed');
}
function openTableForEdit(tableName){
  if(!isLoggedIn())return;
  closeTablesPanel();
  openBilling();
  var pending=getPending(),bill=pending.find(function(b){return (b.billOn||'').trim()===tableName;});
  if(bill){
    _editingFromPending=true;_editingFromTable=true;
    editPendingBill(bill.id);
    var btn=document.getElementById('createBillBtn');if(btn)btn.textContent='\u{1F4CB} Update Bill';
  } else {
    saveBill([]);
    var billOnEl=document.getElementById('billOnInput');if(billOnEl)billOnEl.value=tableName;
    var discEl=document.getElementById('discountInput');var discRow=document.getElementById('discountRow');var discBtn=document.getElementById('discountToggleBtn');
    if(discEl)discEl.value='';if(discRow)discRow.classList.add('hidden');if(discBtn)discBtn.textContent='+ Discount';
    _editingFromPending=false;_editingFromTable=true;
    var btn=document.getElementById('createBillBtn');if(btn)btn.textContent='\u{1F4CB} Update Bill';
    switchBillTab('current');
    renderBillPanel();
    showSearchInBilling();
  }
}

function getDateKey(bill){
  var raw=bill.time||'';
  var d=new Date(raw);
  if(!isNaN(d.getTime()))return d.getFullYear()+'-'+(d.getMonth()+1<10?'0':'')+(d.getMonth()+1)+'-'+(d.getDate()<10?'0':'')+d.getDate();
  var m=raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if(m){var dy=parseInt(m[1],10),mo=parseInt(m[2],10),yr=parseInt(m[3],10);return yr+'-'+(mo<10?'0':'')+mo+'-'+(dy<10?'0':'')+dy;}
  return raw.split(',')[0]||'';
}
function deleteHistoryByDate(dateKey){
  if(!confirm('Delete all history for this date?'))return;
  var hist=getHistory().filter(function(b){return getDateKey(b)!==dateKey;});
  localStorage.setItem(HIST_KEY,JSON.stringify(hist));
  renderTablesPanelHistory();
  if(typeof renderHistoryBills==='function')renderHistoryBills();
  showToast('Day history deleted');
}
function formatBillDateTime(bill){
  var raw=bill.time||'';
  var d=new Date(raw);
  if(isNaN(d.getTime())&&raw.indexOf(',')>=0){
    var parts=raw.split(',');
    d=new Date(parts[0]+(parts[1]?' '+parts[1].trim():''));
  }
  if(isNaN(d.getTime())){
    var dp=(raw.split(',')[0]||'').trim();
    var tp=raw.indexOf(',')>=0?raw.substring(raw.indexOf(',')+1).trim():'';
    return{datePart:dp,timePart:tp};
  }
  var day=d.getDate(),mon=d.getMonth()+1,yr=d.getFullYear();
  var datePart=(day<10?'0':'')+day+'-'+(mon<10?'0':'')+mon+'-'+yr;
  var hrs=d.getHours(),mins=d.getMinutes();
  var ampm=hrs>=12?'PM':'AM';
  hrs=hrs%12||12;
  var timePart=(hrs<10?'0':'')+hrs+':'+(mins<10?'0':'')+mins+' '+ampm;
  return{datePart:datePart,timePart:timePart};
}
function getDateWiseTotals(bills){
  var map={};
  bills.forEach(function(b){
    var k=getDateKey(b);
    var n=b.net||b.total||0;
    map[k]=(map[k]||0)+n;
  });
  return map;
}
function csvEscape(s){if(s==null||s===undefined)return'';var x=String(s);if(x.indexOf(',')>=0||x.indexOf('"')>=0||x.indexOf('\n')>=0)return'"'+x.replace(/"/g,'""')+'"';return x;}
function formatBillsAsCsv(bills){
  var lines=['Date,Time,Bill On,Payment,Item,Size,Qty,Unit Price,Amount,Net'];
  var dateTotals={};
  function parseDDMMYYYY(s){
    var p=s.split('-');
    if(p.length!==3)return new Date(0);
    return new Date(parseInt(p[2],10),parseInt(p[1],10)-1,parseInt(p[0],10));
  }
  bills.forEach(function(bill){
    var net=bill.net||bill.total||bill.items.reduce(function(s,it){return s+it.price*it.qty;},0)-(bill.discount||0);
    var pm=bill.paymentType==='payLater'?'Pay Later (Paid:'+( bill.amountPaid||0)+', Pending:'+(bill.amountPending||0)+')':bill.paymentMethod==='cash'?'Cash':bill.paymentMethod==='online'?'Online':bill.paymentMethod==='both'?'Both':'';
    var dt=formatBillDateTime(bill);
    var datePart=dt.datePart,timePart=dt.timePart;
    if(bill.items.length){
      bill.items.forEach(function(it,idx){
        var amt=it.price*it.qty;
        var netVal=idx===0?net:'';
        var dateCol=idx===0?csvEscape(datePart):'',timeCol=idx===0?csvEscape(timePart):'',billOnCol=idx===0?csvEscape(bill.billOn||''):'',pmCol=idx===0?csvEscape(pm):'';
        lines.push(dateCol+','+timeCol+','+billOnCol+','+pmCol+','+csvEscape(it.name)+','+csvEscape(it.size)+','+it.qty+','+it.price+','+amt+','+(netVal===''?'':netVal));
      });
    }else{lines.push(csvEscape(datePart)+','+csvEscape(timePart)+','+csvEscape(bill.billOn||'')+','+csvEscape(pm)+',,,,,'+net);}
    lines.push('');
    dateTotals[datePart]=(dateTotals[datePart]||0)+net;
  });
  lines.push('','Date,Day Total');
  Object.keys(dateTotals).sort(function(a,b){return parseDDMMYYYY(a).getTime()-parseDDMMYYYY(b).getTime();}).forEach(function(d){lines.push(csvEscape(d)+','+dateTotals[d]);});
  return lines.join('\r\n');
}
function downloadBillCsv(billOrBills,filename){
  if(!isLoggedIn())return;
  var bills=Array.isArray(billOrBills)?billOrBills:[billOrBills];
  var csv=formatBillsAsCsv(bills);
  var blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();URL.revokeObjectURL(a.href);
}
function downloadAllHistoryCsv(){var hist=getHistory();if(!hist.length){showToast('No history');return;}downloadBillCsv(hist,'royal-logbook-'+new Date().toISOString().slice(0,10)+'.csv');}
function downloadBillByIdx(idx){var hist=getHistory();var bill=hist[idx];if(!bill)return;downloadBillCsv(bill,'bill-'+bill.id+'.csv');}
function renderHistoryBills(){
  var hist=getHistory();var c=document.getElementById('billHistoryList');var da=document.getElementById('historyDownloadActions');
  if(!c)return;
  if(da){da.classList.toggle('hidden',!isLoggedIn()||!hist.length);}
  if(!hist.length){c.innerHTML='<div class="empty-msg">No paid bills yet</div>';return;}
  var byDate={};
  hist.forEach(function(bill){var k=getDateKey(bill);if(!byDate[k])byDate[k]=[];byDate[k].push(bill);});
  var dates=Object.keys(byDate).sort().reverse();
  var html='';
  dates.forEach(function(dateKey){
    var bills=byDate[dateKey];
    var dayTotal=bills.reduce(function(s,b){return s+(b.net||b.total||0);},0);
    var parts=dateKey.split('-');
    var dateLabel=parts.length>=3?parts[2]+'/'+parts[1]+'/'+parts[0]:dateKey;
    var delDayBtn=isLoggedIn()?'<button class="btn-delete-day" onclick="event.stopPropagation();deleteHistoryByDate(\''+dateKey+'\')">Del</button>':'';
    html+='<div class="history-date-section"><div class="history-date-header"><span>'+dateLabel+' \u00b7 Day Total: '+fmt(dayTotal)+'</span>'+delDayBtn+'</div>';
    bills.forEach(function(bill){
      var i=hist.indexOf(bill);
      var rows=bill.items.map(function(it){return '<div class="history-item-row">'+
        '<span>'+escapeHtml(it.name)+' ('+escapeHtml(it.size)+') \xd7'+it.qty+'</span><span class="history-item-amount">'+fmt(it.price*it.qty)+'</span></div>';}).join('');
      var disc=bill.discount?'<div class="history-discount-row"><span>Discount</span><span>\u2212 '+fmt(bill.discount)+'</span></div>':'';
      var isPayLater=bill.paymentType==='payLater';
      var pm=bill.paymentMethod;var pmStr=isPayLater?' \u00b7 Pay Later \u23F3':(pm==='cash'?' \u00b7 Cash':pm==='online'?' \u00b7 Online':pm==='both'?' \u00b7 Both':'');
      var statusIcon=isPayLater?'\u23F3':'\u2714';
      var payLaterInfo=isPayLater?'<div class="history-pay-later-row"><span>Paid: '+fmt(bill.amountPaid||0)+'</span><span class="history-pay-later-pending">Pending: '+fmt(bill.amountPending||0)+'</span></div>':'';
      var dlBtns=isLoggedIn()?'<div class="history-card-download"><button class="btn-history-card-dl" onclick="downloadBillByIdx('+i+')">Download CSV</button></div>':'';
      html+='<div class="history-card'+(isPayLater?' history-card-pay-later':'')+'">'+
        '<div class="history-card-header">'+
          '<span class="pending-card-meta">'+(bill.billOn?bill.billOn:'Bill')+' \u00b7 '+bill.time+pmStr+' '+statusIcon+'</span>'+
          '<span class="pending-card-amount">'+fmt(bill.net||bill.total||0)+'</span>'+
        '</div>'+rows+disc+payLaterInfo+dlBtns+'</div>';
    });
    html+='</div>';
  });
  c.innerHTML=html;
}

var billingEditMode=false,_editingFromPending=false,_editingFromTable=false,_editingBillId=null;
function showSearchInBilling(){
  var sect=document.getElementById('billMenuSection');var sw=document.querySelector('.search-wrap');var tw=document.querySelector('.tabs-wrap');var ct=document.querySelector('.content');
  if(!sect||!sw||!tw||!ct)return;
  sect.appendChild(sw);sect.appendChild(tw);sect.appendChild(ct);
  sect.classList.remove('hidden');
  billingEditMode=true;
  var cartBar=document.getElementById('cartBar');if(cartBar)cartBar.classList.remove('hidden');
  updateCartBar();
}
function hideSearchInBilling(){
  var sect=document.getElementById('billMenuSection');var sw=document.querySelector('.search-wrap');var tw=document.querySelector('.tabs-wrap');var ct=document.querySelector('.content');
  if(!sect||!sw||!tw||!ct)return;
  sect.classList.add('hidden');
  var header=document.querySelector('header');
  if(header){
    header.parentNode.insertBefore(sw,header.nextSibling);
    header.parentNode.insertBefore(tw,sw.nextSibling);
    header.parentNode.insertBefore(ct,tw.nextSibling);
  }
  billingEditMode=false;
  var cartBar=document.getElementById('cartBar');if(cartBar)cartBar.classList.add('hidden');
}
function switchBillTab(tab){
  if(billingEditMode&&tab!=='current')hideSearchInBilling();
  var pane=document.getElementById('billPane-current');if(pane)pane.classList.remove('hidden');
}
function clearAllData(){
  if(!confirm('Clear all billing data?'))return;
  localStorage.removeItem(BILL_KEY);localStorage.removeItem(HIST_KEY);localStorage.removeItem(PEND_KEY);localStorage.removeItem(TABLES_KEY);localStorage.removeItem('royal_bill_counter');
  renderBillPanel();updateCartBar();showToast('All data cleared');
  if(typeof renderTablesGrid==='function')renderTablesGrid();
  if(typeof renderTablesPanelPending==='function')renderTablesPanelPending();
  if(typeof renderTablesPanelHistory==='function')renderTablesPanelHistory();
}
function openBilling(){var p=document.getElementById('billingPanel');if(!p)return;p.classList.remove('hidden');switchBillTab('current');renderBillPanel();}
function closeBilling(){
  var p=document.getElementById('billingPanel');
  if(p){hideSearchInBilling();p.classList.add('hidden');}
  if(_editingBillId){
    localStorage.removeItem(BILL_KEY);
    var billOnEl=document.getElementById('billOnInput');if(billOnEl)billOnEl.value='';
    var discEl=document.getElementById('discountInput');var discRow=document.getElementById('discountRow');var discBtn=document.getElementById('discountToggleBtn');
    if(discEl)discEl.value='';if(discRow)discRow.classList.add('hidden');if(discBtn)discBtn.textContent='+ Discount';
    _editingBillId=null;
  }
  _editingFromPending=false;_editingFromTable=false;
  var btn=document.getElementById('createBillBtn');if(btn)btn.textContent='\u{1F4CB} Create Bill';
}

function showToast(msg){
  var t=document.getElementById('toastMsg');
  if(!t){t=document.createElement('div');t.id='toastMsg';t.className='toast-msg';document.body.appendChild(t);}
  t.textContent=msg;
  t.classList.remove('toast-fade');
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.add('toast-fade');},2000);
}

// ── SEARCH ──
var searchInput=document.getElementById('searchInput');
var clearBtn=document.getElementById('clearBtn');
var searchResults=document.getElementById('searchResults');
var allItems=[];
var tabMap={'tab-food':'Food','tab-whisky':'Whisky','tab-beer-wine':'Beer & Wine','tab-vodka-rum':'Vodka & Rum'};
var liquorTabIds=new Set(['tab-whisky','tab-beer-wine','tab-vodka-rum']);

document.querySelectorAll('.accordion').forEach(function(acc){
  var accTitle=(acc.querySelector('.accordion-title')||{}).textContent||'';
  var panel=acc.closest('.tab-panel');
  var tabLabel=panel?(tabMap[panel.id]||''):'';
  var isLiquor=panel?liquorTabIds.has(panel.id):false;
  var isFood=panel?panel.id==='tab-food':false;
  var headerRow=acc.querySelector('.price-header');
  var headers=headerRow?Array.from(headerRow.querySelectorAll('td')).map(function(td){return td.textContent.trim();}):[]; 
  acc.querySelectorAll('.menu-table tr:not(.price-header)').forEach(function(tr){
    var nameEl=tr.querySelector('.item-name');if(!nameEl)return;
    var bnEl=tr.querySelector('.item-bn');
    var tds=Array.from(tr.querySelectorAll('td'));
    var cells=tds.map(function(td,i){return i===0?nameEl.textContent.trim():td.textContent.trim();});
    var sizeTd=tr.querySelector('td.item-size');var rowSize=sizeTd?sizeTd.textContent.trim():null;
    if(isLiquor||isFood){
      tr.style.cursor='pointer';
      (function(n,f,sz,tid){tr.addEventListener('click',function(){showItemPopup(n,f,sz,tid);});})(nameEl.textContent.trim(),isFood,rowSize,panel?panel.id:'');
    }
    allItems.push({name:nameEl.textContent.trim(),bn:bnEl?bnEl.textContent.trim():'',cells:cells,headers:headers,section:accTitle.trim(),tabLabel:tabLabel,isLiquor:isLiquor,isFood:isFood,rowSize:rowSize});
  });
});

searchInput.addEventListener('input',function(){
  var q=this.value.trim();clearBtn.style.display=q?'block':'none';
  if(!q){searchResults.innerHTML='';searchResults.classList.remove('visible');document.querySelectorAll('.tab-panel').forEach(function(p){p.style.display='';});return;}
  doSearch(q);
});
function doSearch(q){
  var ql=q.toLowerCase();
  document.querySelectorAll('.tab-panel').forEach(function(p){p.style.display='none';});
  searchResults.classList.add('visible');
  var matched=allItems.filter(function(i){return i.name.toLowerCase().includes(ql)||i.bn.includes(q);});
  if(!matched.length){searchResults.innerHTML='<div class="no-results">No items found for "'+q+'"</div>';return;}
  var groups={};
  matched.forEach(function(item){var k=item.tabLabel+'|'+item.section;if(!groups[k])groups[k]={tabLabel:item.tabLabel,section:item.section,headers:item.headers,items:[]};groups[k].items.push(item);});
  var esc=q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');var html='';
  Object.values(groups).forEach(function(g){
    html+='<table class="menu-table">';
    if(g.headers.length){html+='<tr class="price-header">';g.headers.forEach(function(h,idx){var cls=idx===0?'':(idx===g.headers.length-1?' class="item-price"':' class="item-size"');html+='<td'+cls+'>'+h+'</td>';});html+='</tr>';}
    g.items.forEach(function(item,i){
      var rowClass=[i%2===0?'search-row-even':'',item.isLiquor||item.isFood?'row-clickable':''].filter(Boolean).join(' ');
      var sz=item.rowSize?",'"+item.rowSize+"'":",''";
      var tid=",'"+(item.tabLabel==='Whisky'?'tab-whisky':item.tabLabel==='Vodka & Rum'?'tab-vodka-rum':'tab-beer-wine')+"'";
      var hn=item.name.replace(new RegExp(esc,'gi'),function(m){return '<span class="highlight">'+m+'</span>';});
      html+='<tr class="'+rowClass+'"'+(item.isLiquor||item.isFood?' onclick="showItemPopup(\''+item.name.replace(/'/g,"\\'")+'\','+item.isFood+sz+tid+')"':'')+'>';
      item.cells.forEach(function(cell,ci){
        if(ci===0)html+='<td><span class="item-name">'+hn+'</span>'+(item.bn?'<span class="item-bn">'+item.bn+'</span>':'')+'</td>';
        else if(ci===item.cells.length-1)html+='<td class="item-price">'+cell+'</td>';
        else html+='<td class="item-size">'+cell+'</td>';
      });
      html+='</tr>';
    });
    html+='</table>';
  });
  searchResults.innerHTML=html;
}
function clearSearch(){
  searchInput.value='';clearBtn.style.display='none';searchResults.innerHTML='';
  searchResults.classList.remove('visible');document.querySelectorAll('.tab-panel').forEach(function(p){p.style.display='';});
}

initAuth();updateCartBar();
