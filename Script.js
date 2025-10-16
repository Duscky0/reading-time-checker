javascript:(()=>{
  const texto=document.body.innerText||'';
  const palavras=texto.trim().split(/\s+/).length;
  const minutos=Math.ceil(palavras/200);
  const aviso=document.createElement('div');
  aviso.textContent=`⏱ Tempo estimado de leitura: ${minutos} min`;
  Object.assign(aviso.style,{
    position:'fixed',
    bottom:'20px',
    right:'20px',
    background:'#222',
    color:'#fff',
    padding:'8px 12px',
    borderRadius:'8px',
    fontFamily:'sans-serif',
    fontSize:'14px',
    zIndex:999999,
    boxShadow:'0 0 10px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(aviso);
  setTimeout(()=>aviso.remove(),8000);
})();
