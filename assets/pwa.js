/* App installabile: service worker e pulsante "Installa l'app" nel footer quando il browser lo permette. */
if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  const f = document.querySelector("footer");
  if (!f || document.getElementById("pwa-btn")) return;
  const b = document.createElement("button");
  b.id = "pwa-btn"; b.type = "button"; b.textContent = "Installa l'app";
  b.style.cssText = "font:inherit;cursor:pointer;margin:8px 0;display:block";
  b.onclick = () => { e.prompt(); b.remove(); };
  f.appendChild(b);
});
