
window.addEventListener('DOMContentLoaded',init);
const optTec = ['*','/','+','-'];
const opt = ['9','8','7','6','5','4','3','2','1','0','.'];
const spec = ['*','/','+','-',];
function init(){
    let dec = false;
    let eva = false;
    changeTitles(titles)
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '800px';
    container.style.margin = '5em';
    
    document.body.appendChild(container);
    const output = document.createElement('input');
    output.setAttribute('id','output');
    output.setAttribute('type','text');
    output.classList.add('output');
    
    output.style.width = '100%';
    output.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    output.style.marginBottom = '15px';
    container.appendChild(output);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);
    btnMaker("C",clrOutput, "clear");
    optTec.forEach(function(val){
      btnMaker(val, addOutput, "botoes");
    })
    opt.forEach(function(val){
      btnMaker(val, addOutput, "numeros");
    })
    btnMaker("←", delOutput, "delete");
    btnMaker("=",evalOutput, "sum");
    
    
    function cOutput(v){
      output.style.border = v + '1px solid';
      output.style.color = v;
    }

    function evalOutput(){
      cOutput('black');

      if(output.value===""){
        cOutput('red');
      }else{
        output.value = eval(output.value);
      }
    }
    function clrOutput(){
        output.value = "";
    }
    function delOutput(){
      var value = document.getElementById('output').value;
      document.getElementById('output').value = value.substr(0, value.length -1);
    }
    function btnMaker(txt, myFunction, id){
      let btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.setAttribute('class', 'button-6');
      btn.setAttribute('role', 'button');
      btn.setAttribute('id', id);
      btn.style.width = '31%';
      btn.style.lineHeight = '50px';
      btn.style.margin = '1%';
      btn.style.fontSize = '2em';
      btn.val = txt;
      btn.textContent = txt;
      btn.addEventListener('click', myFunction);
      main.appendChild(btn);
    }
    function addOutput(e){
    
      let char = e.target.val;
      if(char == '.'){
        if(dec){
          char = '';
          cOutput('red');
        }else{
          dec = true;
        }
      }
      eva = spec.includes(char);
      if(eva){
        dec = false;
      }
      output.value += char;
      cOutput('black');
      
    }
    
}
const titles = [
  "C", "Ca", "Cal", "Calc", "Calcu","Calcul","Calcula","Calculat","Calculato", "Calculator"
]
function changeTitles(titles){
let ii = 0
return (function update() {
  document.querySelector('title').textContent = titles[(ii++ % titles.length)]
  setTimeout(update, 600)
})()
}