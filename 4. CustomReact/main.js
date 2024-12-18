function renderElement(element) {
    var props = element.props;

    var domElement = document.createElement(element.type);
    for (var prop in props) {
        domElement.setAttribute(prop, props[prop]);
    }
    domElement.innerHTML = element.children;
    return domElement;
}

var myElement = {
    type: 'a',
    props: {
        href: 'http://google.com'
    },
    children: "Visit Google"
}

document.getElementById('root').appendChild(renderElement(myElement));