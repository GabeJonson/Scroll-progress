(() => {
  const progressLine = document.getElementById('progress-line'),
        body = document.body,
        html = document.documentElement;

  let viewportHeight = window.innerHeight,
      documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),

      scrollTop = () => scrollFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  window.onresize = () => documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  window.onscroll = () => {
    let scroll = scrollTop(),
        progress = (scroll / (documentHeight - viewportHeight)) * 100;

    progressLine.style.width = progress + '%';
  };
})();