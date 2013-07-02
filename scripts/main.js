// notification
function notification() {

    var btn = document.querySelector('#btnNotifications');

    btn.addEventListener('click', function () {
        Notification.requestPermission(function (result) {
            notficationPrint('Notification', 'Enabled :)');
        });
    }, false);
}

notification();

function notficationPrint(title, msg) {
    var tt = new Notification(title, {
        body: msg
    });
}


// template
function template(id, text) {
    var template = document.querySelector(id).content,
        title = template.querySelector('[data-elem=foo]'),
        tplContainer = document.querySelector('#templatePlace');

    title.textContent = text;

    tplContainer.appendChild(template.cloneNode(true));

}

var t0 = window.performance.now();

template('#template', 'Text in template!');
template('#template2', 'Lorem ipsum');

var t1 = window.performance.now();
console.info("Call to template() took " + (t1 - t0) + " milliseconds.");

// shadow DOM
function shadow(id) {
    var shadow = document.querySelector(id).webkitCreateShadowRoot();

    shadow.innerHTML =
        '<div style="color:red">Lorem Ipsum!</div>'
        + '<header><content select="h1"></content></header>'
        + '<section><content select="h2"></content></section>';

    shadow.resetStyleInheritance = false;
    shadow.applyAuthorStyles = true;
}

shadow('#shadow');

// MDV
function mdvLoop(id) {
    var t = document.querySelector(id),
        content = t.content,
        container = document.querySelector('#tplMdvLoop'),
        model = {
            items: [
                { item: 'Hello'},
                { item: 'GoodBye'},
                { item: 'Hello' },
                { item: 'GoodBye' }
            ]
        };

    t.model = model;

    container.appendChild(content.cloneNode(true));
}

mdvLoop('#tplBar');