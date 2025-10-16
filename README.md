# Reading Time Checker

Exibe o tempo estimado de leitura da página atual.  
Parte da coleção **+ Bookmarklets**, feita para automações rápidas no navegador.

## ⏱️ Como funciona
- Conta o total de palavras visíveis na página.  
- Calcula o tempo médio com base em 200 palavras por minuto.  
- Mostra uma caixa no canto inferior com o tempo estimado em minutos.  
- A notificação desaparece automaticamente após alguns segundos.

## 💻 Código
```js
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
