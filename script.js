document.addEventListener('DOMContentLoaded', function() {
    var showFormBtn = document.getElementById('showFormBtn');
    var modalBg = document.getElementById('modalBg');
    var modal = document.querySelector('.modal');
    var closeBtn = document.getElementById('closeBtn');
    
    showFormBtn.addEventListener('click', function() {
      modalBg.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
      modalBg.style.display = 'none';
    });
  });
  