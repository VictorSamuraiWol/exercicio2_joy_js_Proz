/*usando getElement:
const titulo = document.getElementsByTagName('h1')[0];
const linkProz = document.getElementsByTagName('a')[0];
const listaOrdenada = document.getElementById('lista-ordenada');
const listaNaoOrdenada = document.getElementsByTagName('ul')[0];*/

/*usando o querySelector: */
const titulo = document.querySelector('h1');
const linkProz = document.querySelector('a');
const listaOrdenada = document.querySelector('#lista-ordenada');
const listaNaoOrdenada = document.querySelector('ul');

titulo.innerText = 'Titulo Proz';
linkProz.innerText = 'Link Proz';
listaNaoOrdenada.innerHTML = `
<li>Cursos</li>
<li>Matérias</li>
<li>Conteúdos</li>
`

listaOrdenada.innerHTML = `
<li>Proz: link <a href= 'https://prozeducacao.com.br'>https://prozeducacao.com.br</a></li>
<li>Youtube: link <a href= 'https://www.youtube.com/'>https://www.youtube.com/</a></li>
<li>Google: link <a href= 'https://www.google.com.br/'>https://www.google.com.br/</a></li>
`
