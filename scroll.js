window.onload = () => {
  const scrollElement = new Scroll('.progress-line');
  scrollElement.init();
}

class Scroll {
  constructor(element, height = '5px', color = '#333') {
    this.element = element;
    this.height = height;
    this.color = color;
  }

  init() {
    const progressLine = document.querySelector(this.element),
          body = document.body,
          html = document.documentElement;

    let viewportHeight = window.innerHeight,
        documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    progressLine.style.position = 'fixed';
    progressLine.style.top = 0;
    progressLine.style.left = 0;
    progressLine.style.transition = '0.3s';

    this.scrollTop();

    window.onresize = () => {
      this.resize(documentHeight, body, html);
    }

    window.onscroll = () => {
      this.scroll(progressLine, documentHeight, viewportHeight);
    }
  }

  scrollTop(scrollFromTop) {
    return scrollFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  resize(documentHeight, body, html) {
    return documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  scroll(progressLine, documentHeight, viewportHeight) {
    let scroll = this.scrollTop(),
        progress = (scroll / (documentHeight - viewportHeight)) * 100;

    progressLine.style.width = progress + '%';
    progressLine.style.height = this.height;
    progressLine.style.backgroundColor = this.color;
  }
}
