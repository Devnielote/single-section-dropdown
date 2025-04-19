export function toggleMenu(selector, toggle, close) {
  const menu = document.querySelector(selector);
  const openBtn= document.querySelector(toggle);
  const closeBtn = document.querySelector(close);
  
  if(!menu || !openBtn|| !closeBtn) return;

  openBtn.addEventListener("click", () => {
    menu.classList.add('active');
  })

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  })

  window.addEventListener("click", (e) => {
    if(!menu.contains(e.target) && e.target !== openBtn){
      menu.classList.remove('active');
    }
  });
}

export function toggleSubmenu(selector, toggle) {
  const submenu = document.querySelector(selector);
  const openBtn = document.querySelector(toggle);

  openBtn.addEventListener("click", () => {
    submenu.classList.toggle('active');
    openBtn.getElementsByTagName("img")[0].classList.toggle('active_btn')
  });
}

