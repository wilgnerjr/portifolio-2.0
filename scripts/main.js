var img = document.getElementById('imgHeader');
var btnCurriculo = document.getElementById('btnCurriculo');
var container = document.getElementById('container');


btnCurriculo.addEventListener('mouseover', function(){
    img.classList.toggle('efeito');
    // btnCurriculo.classList.toggle('efeito');

});

btnCurriculo.addEventListener('mouseout', () => {
    img.classList.toggle('efeito');
    // btnCurriculo.classList.toggle('efeito');
});
