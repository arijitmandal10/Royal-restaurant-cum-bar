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
  "chicken manchurian dry":249,"chicken lollipop":229,"fish fry (1 pc)":60,"fish fry (2 pcs)":199,
  "crispy chilli baby corn":179,"paneer 65":179,"chilli paneer dry":179,"paneer bhurji":199,
  "paneer pakora":99,"veg pakora":80,"egg bhurji":49,"egg pakora":60,
  "masala omelette":39,"masala omlette":39,"plain omlette":39,"boiled egg (2 pcs)":39,
  "onion pakora":60,"papar fry":29,"papad fry":29,"papad roast":19,"masala papad":39,"papar dry":20,
  "butter paneer":200,"kadai paneer":180,"chilly paneer":160,"chicken kosha":200,
  "chicken butter masala":250,"kadai chicken":220,"mutton kosha":380,"mutton curry":300,
  "chana masala":50,"peanut masala":60,"green salad":59,"onion salad":39,
  "cucumber salad":39,"lemon & chilli salad":29,"lemon &amp; chilli salad":29,"rocket salad":99,
  "roti":10,"butter roti":15,"plain rice (basmati)":60
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
  var dot=document.getElementById('empDot'),cartBar=document.getElementById('cartBar'),cartBtn=document.getElementById('cartIconBtn');
  if(loginBtn)loginBtn.classList.add('hidden');
  if(status){status.classList.remove('hidden');status.classList.add('visible');}
  if(dot)dot.classList.remove('hidden');
  if(cartBar)cartBar.classList.remove('hidden');
  if(cartBtn)cartBtn.classList.remove('hidden');
  updateCartBar();
}
function logout(){
  localStorage.removeItem(EMP_KEY);
  var loginBtn=document.getElementById('empLoginBtn'),status=document.getElementById('empStatus');
  var dot=document.getElementById('empDot'),cartBar=document.getElementById('cartBar'),cartBtn=document.getElementById('cartIconBtn');
  if(loginBtn)loginBtn.classList.remove('hidden');
  if(status){status.classList.add('hidden');status.classList.remove('visible');}
  if(dot)dot.classList.add('hidden');
  if(cartBar)cartBar.classList.add('hidden');
  if(cartBtn)cartBtn.classList.add('hidden');
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
  Object.keys(_popupSizes).forEach(function(size){
    var entry=_popupSizes[size];var label=entry?entry.label||size:size;
    var prefix=size==='Full'?'mrpFull':size==='60ml'?'mrp60ml':size==='Half'?'mrpHalf':size==='Qtr'?'mrpQtr':null;
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

function showFoodPopup(name){
  var key=name.toLowerCase().trim();
  var price=lookup(foodData,key);
  var half=price?Math.ceil((price/2)/5)*5:null;
  if(price)_popupSizes['Full']={price:price,label:'Full plate'};
  if(half)_popupSizes['Half']={price:half,label:'Half plate'};
  document.getElementById('mrpItemName').textContent=name;
  document.getElementById('mrpMrpRow').classList.add('mrp-row-hidden');
  document.getElementById('mrpFullLabel').textContent='Full Plate';
  document.getElementById('mrpFull').textContent=price?fmt(price):'\u2014';
  document.getElementById('mrpHalfLabel').textContent='Half Plate';
  document.getElementById('mrpHalf').textContent=half?fmt(half):'';
  document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
  document.getElementById('mrpHalfRow').classList.toggle('mrp-row-hidden',!half);
  document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
  showRow('mrpFull',!!price);showRow('mrp60ml',false);showRow('mrpHalf',!!half);showRow('mrpQtr',false);
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
    document.getElementById('mrpMrpRow').classList.toggle('mrp-row-hidden',!beerMrp);
    document.getElementById('mrpMrpVal').textContent=beerMrp?fmt(beerMrp):'';
    document.getElementById('mrpFullLabel').textContent='Dine-In (Per Bottle)';
    document.getElementById('mrpFull').textContent=dineIn?fmt(dineIn):'\u2014';
    document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
    document.getElementById('mrpHalfRow').classList.add('mrp-row-hidden');
    document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
    showRow('mrpFull',!!dineIn);showRow('mrp60ml',false);showRow('mrpHalf',false);showRow('mrpQtr',false);
  } else {
    var data=lookup(mrpData,key);var realMrp=lookup(bevcoMrp,key);
    document.getElementById('mrpMrpRow').classList.toggle('mrp-row-hidden',!realMrp);
    document.getElementById('mrpMrpVal').textContent=realMrp?fmt(realMrp):'';
    document.getElementById('mrpFullLabel').textContent='Dine-In (Full Bottle)';
    if(data){
      var full=data[0],half=data[1],qtr=data[2];
      var sixtyMl=lookup(ml60Map,key)||Math.ceil((full/12.5)/10)*10;
      var whiskyOnly=(tabId==='tab-whisky'||tabId==='tab-vodka-rum');
      if(whiskyOnly){_popupSizes={'Full':{price:full,label:'Full'},'60ml':{price:sixtyMl,label:'60ml'},'Half':{price:half,label:'Half'},'Qtr':{price:qtr,label:'Qtr'}};}
      else{_popupSizes={'Full':{price:full,label:'Full'}};}
      document.getElementById('mrpFull').textContent=fmt(full);
      document.getElementById('mrp60mlRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrp60ml').textContent=fmt(sixtyMl);
      document.getElementById('mrpHalfRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrpHalfLabel').textContent='Half Bottle';
      document.getElementById('mrpHalf').textContent=fmt(half);
      document.getElementById('mrpQtrRow').classList.toggle('mrp-row-hidden',!whiskyOnly);document.getElementById('mrpQtr').textContent=fmt(qtr);
      showRow('mrpFull',true);showRow('mrp60ml',whiskyOnly);showRow('mrpHalf',whiskyOnly);showRow('mrpQtr',whiskyOnly);
    } else {
      document.getElementById('mrpFull').textContent='\u2014';
      document.getElementById('mrp60mlRow').classList.add('mrp-row-hidden');
      document.getElementById('mrpHalfRow').classList.add('mrp-row-hidden');
      document.getElementById('mrpQtrRow').classList.add('mrp-row-hidden');
      showRow('mrpFull',false);showRow('mrp60ml',false);showRow('mrpHalf',false);showRow('mrpQtr',false);
    }
  }
  document.getElementById('mrpOverlay').classList.add('overlay-visible');
  refreshPopupQty();
}

function closeMrpPopup(){document.getElementById('mrpOverlay').classList.remove('overlay-visible');}

// ── CLICK OUTSIDE TO CLOSE ──
document.addEventListener('click',function(e){
  // Close item popup
  var overlay=document.getElementById('mrpOverlay');
  if(overlay&&overlay.classList.contains('overlay-visible')&&e.target===overlay){closeMrpPopup();}
  // Close login popup
  var loginOv=document.getElementById('loginOverlay');
  if(loginOv&&loginOv.classList.contains('overlay-visible')&&e.target===loginOv){closeLoginPopup();}
  // Close billing panel when clicking backdrop (billing is full screen, no backdrop - skip)
});

// ── BILLING DATA ──
var BILL_KEY='royal_current_bill',HIST_KEY='royal_bill_history',PEND_KEY='royal_pending_bills';
function getBill(){try{return JSON.parse(localStorage.getItem(BILL_KEY))||[];}catch(e){return [];}}
function saveBill(items){localStorage.setItem(BILL_KEY,JSON.stringify(items));}
function getHistory(){try{return JSON.parse(localStorage.getItem(HIST_KEY))||[];}catch(e){return [];}}
function getPending(){try{return JSON.parse(localStorage.getItem(PEND_KEY))||[];}catch(e){return [];}}
function savePending(p){localStorage.setItem(PEND_KEY,JSON.stringify(p));}

function addToCart(name,price,size){
  var items=getBill();var key=name+'||'+size;
  var ex=items.find(function(i){return i.key===key;});
  if(ex){ex.qty++;}else{items.push({key:key,name:name,price:price,size:size,qty:1});}
  saveBill(items);updateCartBar();showToast(name+' ('+size+') added');
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
  if(ex){ex.qty++;}else{items.push({key:key,name:'Chakna',price:20,size:'extra',qty:1});}
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
  var badge=document.getElementById('cartIconCount');
  if(badge){if(count>0){badge.classList.remove('hidden');badge.textContent=count;}else{badge.classList.add('hidden');}}
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
function removeItem(idx){var items=getBill();items.splice(idx,1);saveBill(items);renderBillPanel();}

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
  var pending=getPending();
  pending.unshift({id:Date.now(),time:new Date().toLocaleString('en-IN'),billOn:billOn,items:JSON.parse(JSON.stringify(items)),gross:gross,discount:disc,net:net});
  savePending(pending);localStorage.removeItem(BILL_KEY);
  if(discEl)discEl.value='';if(billOnEl)billOnEl.value='';
  document.getElementById('discountRow').classList.add('hidden');
  document.getElementById('discountToggleBtn').textContent='+ Discount';
  renderBillPanel();switchBillTab('pending');showToast('Bill created \u2713');
}
function markPaid(id){
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  var hist=getHistory();hist.unshift(bill);localStorage.setItem(HIST_KEY,JSON.stringify(hist));
  savePending(pending.filter(function(b){return b.id!==id;}));
  closePendingDetail();renderPendingBills();updateCartBar();showToast('Marked as paid \u2713');
}
function editPendingBill(id){
  var pending=getPending();var bill=pending.find(function(b){return b.id===id;});if(!bill)return;
  saveBill(bill.items);savePending(pending.filter(function(b){return b.id!==id;}));
  closePendingDetail();renderBillPanel();switchBillTab('current');showToast('Bill loaded for editing');
}
function deletePendingBill(id){
  if(!confirm('Delete this pending bill?'))return;
  savePending(getPending().filter(function(b){return b.id!==id;}));
  closePendingDetail();renderPendingBills();updateCartBar();
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

function renderHistoryBills(){
  var hist=getHistory();var c=document.getElementById('billHistoryList');if(!c)return;
  if(!hist.length){c.innerHTML='<div class="empty-msg">No paid bills yet</div>';return;}
  c.innerHTML=hist.map(function(bill,i){
    var rows=bill.items.map(function(it){return '<div class="history-item-row">'+
      '<span>'+escapeHtml(it.name)+' ('+escapeHtml(it.size)+') \xd7'+it.qty+'</span><span class="history-item-amount">'+fmt(it.price*it.qty)+'</span></div>';}).join('');
    var disc=bill.discount?'<div class="history-discount-row"><span>Discount</span><span>\u2212 '+fmt(bill.discount)+'</span></div>':'';
    return '<div class="history-card">'+
      '<div class="history-card-header">'+
        '<span class="pending-card-meta">#'+(hist.length-i)+(bill.billOn?' \u00b7 '+bill.billOn:'')+' \u00b7 '+bill.time+' \u2714</span>'+
        '<span class="pending-card-amount">'+fmt(bill.net||bill.total||0)+'</span>'+
      '</div>'+rows+disc+'</div>';
  }).join('');
}

function switchBillTab(tab){
  ['current','pending','history'].forEach(function(t){
    var pane=document.getElementById('billPane-'+t);if(pane)pane.classList.toggle('hidden',t!==tab);
    var btn=document.getElementById('billTab-'+t);
    if(btn)btn.classList.toggle('active',t===tab);
  });
  if(tab==='pending')renderPendingBills();
  if(tab==='history')renderHistoryBills();
}
function clearAllData(){
  if(!confirm('Clear all billing data?'))return;
  localStorage.removeItem(BILL_KEY);localStorage.removeItem(HIST_KEY);localStorage.removeItem(PEND_KEY);
  renderBillPanel();updateCartBar();showToast('All data cleared');
}
function openBilling(){var p=document.getElementById('billingPanel');if(!p)return;p.classList.remove('hidden');switchBillTab('current');renderBillPanel();}
function closeBilling(){var p=document.getElementById('billingPanel');if(p)p.classList.add('hidden');}

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
    html+='<div class="search-section-label">'+g.tabLabel+(g.section?' \u2014 '+g.section:'')+'</div><table class="menu-table">';
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
