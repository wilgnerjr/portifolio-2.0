var img = document.getElementById('imgHeader');
var btnCurriculo = document.getElementById('btnCurriculo');
var container = document.getElementById('container');
alert('Olá Seja Bem Vindo!\n \nPassando aqui só para avisar que este portifólio está em constantes \natualizações volte sempre e confira as novidades');

btnCurriculo.addEventListener('mouseover', function(){
    img.classList.toggle('efeito');
    // btnCurriculo.classList.toggle('efeito');

});

btnCurriculo.addEventListener('mouseout', () => {
    img.classList.toggle('efeito');
    // btnCurriculo.classList.toggle('efeito');
});

