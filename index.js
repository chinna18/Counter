function myElement(elemName,elemClass)
{
  var elem = document.createElement(elemName);
  elem.setAttribute('class',elemClass);
  return elem;
}

  var div = myElement('div','container mt-5');
  div.setAttribute('style','text-align:center');
  var row = myElement('div','row');
  var col = myElement('div','col-md-12 mb-5');
  var btn = myElement('button','btn btn-outline-success');
  btn.setAttribute('type','button');
  btn.setAttribute('onclick','addCounter()');
  btn.innerHTML = 'Add Counter';
  col.append(btn);
  row.append(col);
  div.append(row);
  document.body.append(div);

  // Initializing Id as Global
  
  var id = 1;

// Add Counter

function addCounter(){
  var div = myElement('div','col-md-6 mb-4');
  var h = myElement('h2','hclass mb-3');
  h.setAttribute('style','text-align:center');
  h.setAttribute('id',id);
  h.innerHTML = 0;
  var b1 = myElement('button','btn btn-primary btn-outline-dark');
  b1.innerHTML = '-8';
  b1.setAttribute('onclick','add1('+id+')');
  var b2 = myElement('button','btn btn-primary btn-outline-dark');
  b2.innerHTML = '-4';
  b2.setAttribute('onclick','add2('+id+')');
  var b3 = myElement('button','btn btn-primary btn-outline-dark');
  b3.innerHTML = '-2';
  b3.setAttribute('onclick','add3('+id+')');
  var b4 = myElement('button','btn btn-primary btn-outline-dark');
  b4.innerHTML = '-1';
  b4.setAttribute('onclick','add4('+id+')');
  var b5 = myElement('button','btn btn-primary btn-outline-dark');
  b5.innerHTML = 'Reset';
  b5.setAttribute('onclick','add5('+id+')');
  var b6 = myElement('button','btn btn-primary btn-outline-dark');
  b6.innerHTML = '+1';
  b6.setAttribute('onclick','add6('+id+')');
  var b7 = myElement('button','btn btn-primary btn-outline-dark');
  b7.innerHTML = '+2';
  b7.setAttribute('onclick','add7('+id+')');
  var b8 = myElement('button','btn btn-primary btn-outline-dark');
  b8.innerHTML = '+4';
  b8.setAttribute('onclick','add8('+id+')');
  var b9 = myElement('button','btn btn-primary btn-outline-dark');
  b9.innerHTML = '+8';
  b9.setAttribute('onclick','add9('+id+')');
  div.append(h,b1,b2,b3,b4,b5,b6,b7,b8,b9);
  row.append(div);
  id++;
}


function add1(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)-8;
}
function add2(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)-4;
}
function add3(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)-2;
}
function add4(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)-1;
}
function add5(hid){
  var a = document.getElementById(hid);
  a.innerHTML = 0;
}
function add6(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)+1;
}
function add7(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)+2;
}
function add8(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)+4;
}
function add9(hid){
  var a = document.getElementById(hid);
  a.innerHTML = parseInt(a.innerHTML)+8;
}
