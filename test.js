(function() {
    window.onload = function() {
      var menu = document.getElementById('menu');
      var init = menu.offsetTop;
      var docked;
      
      window.onscroll = function() {
        if (!docked && (menu.offsetTop - scrollTop() < 0)) {
          menu.style.top = 0;
          menu.style.position = 'fixed';
          menu.className = 'docked';
          docked = true;
        } else if (docked && scrollTop() <= init) {
          menu.style.position = '';
          menu.style.top = init + 'px';
          menu.className = menu.className.replace('docked','');
          docked = false;
        }
      };
    };
    
    function scrollTop() {
     return document.body.scrollTop || document.documentElement.scrollTop; 
    }
  })();