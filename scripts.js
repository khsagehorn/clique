// set a 'scroll' data attribute on the html tag that we can access via CSS
document.documentElement.dataset.scroll = 0;

document.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY;
});
