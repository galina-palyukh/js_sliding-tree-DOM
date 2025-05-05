'use strict';
const wrapElement = (element, wrapperTag)=>{
    const createdElement = document.createElement(wrapperTag);
    createdElement.textContent = element.firstChild.textContent;
    element.replaceChild(createdElement, element.firstChild);
};
const items = document.querySelectorAll('li:has(> ul)');
items.forEach((el)=>wrapElement(el, 'span'));
document.addEventListener('click', (e)=>{
    if (e.target.tagName === 'SPAN') {
        const insideUl = e.target.nextElementSibling;
        if (insideUl.style.display === 'none') insideUl.style.display = 'block';
        else insideUl.style.display = 'none';
    }
});

//# sourceMappingURL=js_sliding-tree-DOM.f75de5e1.js.map
