
window.addEventListener('DOMContentLoaded',init);
const opt = ['*','/','+','-','9','8','7','6','5','4','3','2','1','0','.'];
const spec = ['*','/','+','-',];
function init(){
    let dec = false;
    let eva = false;
    changeTitles(titles)
    console.log('ready');
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);
    const output = document.createElement('input');
    output.setAttribute('type','text');
    output.classList.add('output');
    output.style.width = '80%';
    output.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    container.appendChild(output);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);
    opt.forEach(function(val){
      btnMaker(val, addOutput);
    })
    
    btnMaker("C",clrOutput);
    btnMaker("=",evalOutput);

    function evalOutput(){
      output.style.border = 'black 1px solid';
      console.log('=');
      if(output.value===""){
        output.style.border = 'red 1px solid';
      }else{
        output.value = eval(output.value);
      }

    }
    function clrOutput(){
        output.value = "";
    }
    function btnMaker(txt, myFunction){
      let btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.style.width = '25%';
      btn.style.lineHeight = '50px';
      btn.style.margin = '1%';
      btn.style.fontSize = '2em';
      btn.val = txt;
      btn.textContent = txt;
      btn.addEventListener('click', myFunction);
      main.appendChild(btn);
    }
    function addOutput(e){
      console.log(dec);
      console.log(e.target.val);
      let char = e.target.val;
      if(char == '.'){
        if(dec){
          char = '';
          output.style.border = 'red 1px solid';
        }else{
          dec = true;
        }
      }
      eva = spec.includes(char);
      if(eva){
        dec = false;
      }
      output.value += char;
      output.style.border = 'black 1px solid';
      
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




