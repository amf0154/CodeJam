
const letters = new Map();
letters.set('k27','Esc');
letters.set('k49','!<br/>1');
letters.set('k50','@<br/>2');
letters.set('k51','#<br/>3');
letters.set('k52','$<br/>4');
letters.set('k53','%<br/>5');
letters.set('k54','^<br/>6');
letters.set('k55','&<br/>7');
letters.set('k56','*<br/>8');
letters.set('k57','(<br/>9');
letters.set('k48',')<br/>0');
letters.set('k189','_<br/>-');
letters.set('k187','+<br/>=');
letters.set('k220',`|<br/>|`);
letters.set('k192','~<br/>`');
letters.set('k9','Tab');
letters.set('k81','Q');
letters.set('k87','W');
letters.set('k69','E');
letters.set('k82','R');
letters.set('k84','T');
letters.set('k89','Y');
letters.set('k85','U');
letters.set('k73','I');
letters.set('k79','O');
letters.set('k80','P');
letters.set('k219','{<br/>[');
letters.set('k221','}<br/>]');
letters.set('k8','Delete');
letters.set('k17','Control');
letters.set('k65','A');
letters.set('k83','S');
letters.set('k68','D');
letters.set('k70','F');
letters.set('k71','G');
letters.set('k72','H');
letters.set('k74','J');
letters.set('k75','K');
letters.set('k76','L');
letters.set('k186',':<br/>;');
letters.set('k222','"<br/>');
letters.set('k13','Return');
letters.set('k16','Shift');
letters.set('k90','Z');
letters.set('k88','X');
letters.set('k67','C');
letters.set('k86','V');
letters.set('k66','B');
letters.set('k78','N');
letters.set('k77','M');
letters.set('k188','<<br/>,');
letters.set('k190','><br/>.');
letters.set('k191','?<br/>/ ');
letters.set('k16_duble','Shift');
letters.set('fn','Fn');
letters.set('k18','Alt');
letters.set('k91','⌘');
letters.set('k32','Backspace');
letters.set('k91_double','⌘');
letters.set('k18_double','Alt');
letters.set('k37','←');
letters.set('k38','↑');
letters.set('k40','↓');
letters.set('k39','→');


getLetterStyle = (key) =>{
    const letterStyle = new Map();
    letterStyle.set('k27', 'f_key');
    letterStyle.set('k9', 'f_key');
    letterStyle.set('k8', 'f_key');
    letterStyle.set('k17', 'f_key');
    letterStyle.set('k13', 'f_key');
    letterStyle.set('k16', 'left f_key');
    letterStyle.set('k16_duble', 'right f_key');
    letterStyle.set('k91', 'left f_key');
    letterStyle.set('k91_double', 'right f_key');
    letterStyle.set('k18', 'left f_key');
    letterStyle.set('k18_duble', 'right f_key');
    letterStyle.set('fn', 'f_key');
    return letterStyle.get(key) ? letterStyle.get(key) : 'key'
}

let keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
let main = document.createElement('div');
main.setAttribute('id', 'main');



/*
let k49 = document.createElement('div');
k49.setAttribute('class', 'k49 key');
let side49 = document.createElement('div')
side49.setAttribute('class', 'side');
side49.innerHTML="F1";
let keyCap49 = document.createElement('div');
keyCap49.setAttribute('class', 'keycap');


var br = document.createElement('br');
var val1=document.createTextNode("!");
var val2=document.createTextNode("1");
keyCap49.appendChild(val1);
keyCap49.appendChild(br);
keyCap49.appendChild(val2);

//keyCap49.appendChild(x);
keyCap49.innerHTML= "!<br/>1"
keyCap49.appendChild(side49);
k49.appendChild(keyCap49);
*/


letters.forEach((val, key) =>{
    let element = document.createElement('div');
    element.setAttribute('class', `${this.checkDubleKey(key)} ${this.getLetterStyle(key)}`);
    let innerElement = document.createElement('div');
    innerElement.innerHTML= val;
    innerElement.setAttribute('class', 'keycap');
    element.appendChild(innerElement);
    main.appendChild(element);
})

keyboard.appendChild(main);
document.body.appendChild(keyboard);

function checkDubleKey(key){
    const duble = '_duble';
    if(key.includes(duble))
        return key.slice(0,key.length - duble.length)
    return key;
}




keyDown = (e) =>{
    console.log(e)
    const pressedKey = ('.k' + e.keyCode);
    let el = document.querySelector(pressedKey);
    el.classList.add('pressed');
}
keyUp = (e) =>{
    const pressedKey = ('.k' + e.keyCode);
    let el = document.querySelector(pressedKey);
    el.classList.remove('pressed');
}
addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);