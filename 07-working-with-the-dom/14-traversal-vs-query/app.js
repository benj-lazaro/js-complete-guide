// Using DOM traversal properties

// Select the element <ul>; the next element sibling of <header> who is the 1st element child of <body>
const ul = document.body.firstElementChild.nextElementSibling;
console.log(ul);

// Selext the first <li> child of the element <ul>
const firstLi = ul.firstElementChild;
console.log(firstLi);
