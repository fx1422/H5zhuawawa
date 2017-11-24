window.addEventListener(('orientationchange' in window ? 'orientationchange' : 'resize'), (function() {
    function c() {
        var d = document.documentElement;
        var cw = d.clientWidth || 750;
        d.style.fontSize = (20 * (cw / 375)) > 40 ? 40 + 'px' : (20 * (cw / 375)) + 'px';
    }
    c();
    return c;
})(), false);
    