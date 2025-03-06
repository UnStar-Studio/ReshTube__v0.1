var themeToggle = document.getElementById('theme-toggle');

themeToggle.onclick = function() {
    if (document.body.className.indexOf('dark-theme') === -1) {
        document.body.className += ' dark-theme';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.className = document.body.className.replace('dark-theme', '').trim();
        localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('theme') === 'dark') {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
};

if (localStorage.getItem('theme') === 'dark') {
    document.body.className += ' dark-theme';
    themeToggle.checked = true;
} else {
    document.body.className = document.body.className.replace('dark-theme', '').trim();
    themeToggle.checked = false;
}

var navBtns = document.querySelectorAll('.nav-btn');
var contents = document.querySelectorAll('.content');

for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].onclick = function() {
        for (var j = 0; j < navBtns.length; j++) {
            navBtns[j].className = navBtns[j].className.replace('active', '').trim();
        }

        for (var k = 0; k < contents.length; k++) {
            contents[k].className = contents[k].className.replace('active', '').trim();
        }

        this.className += ' active';

        var target = this.getAttribute('data-target');
        var content = document.getElementById(target);
        content.className += ' active';
    };
}