window.onload = function() {
  setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
  }, 500); // Wait 0.5 sec after refresh, then scroll
};
