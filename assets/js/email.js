// Join the split email address and turn the placeholders into mailto links.
// Links marked data-email-show also display the address.
(function () {
  var links = document.querySelectorAll('[data-email-user]');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var address = link.getAttribute('data-email-user') + '@' + link.getAttribute('data-email-domain');
    link.setAttribute('href', 'mailto:' + address);
    if (link.hasAttribute('data-email-show')) link.textContent = address;
  }
})();
