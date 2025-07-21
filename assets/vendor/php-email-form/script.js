document.querySelector('.php-email-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var form = this;
  var data = new FormData(form);

  var request = new XMLHttpRequest();
  request.open("POST", form.action, true);
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        form.querySelector('.sent-message').style.display = 'block';
        form.reset();
      } else {
        form.querySelector('.error-message').style.display = 'block';
      }
    }
  };

  request.send(data);
});