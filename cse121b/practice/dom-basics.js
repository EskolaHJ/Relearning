// creating a new paragraph node
const newParagraph = document.createElement("p");
// creating the text in the node
newParagraph.innerText = "Added with JavaScript!";
// adding a new node
document.body.appendChild(newParagraph);

// creating an image element
const newImage = document.createElement("img");
// setting a search attribute to the image 
newImage.setAttribute("src", "https://picsum.photos/200");
// setting the alt/ description node 
newImage.setAttribute("alt", "Random pictures from picsum");
// adding a new node to the parent element
document.body.appendChild(newImage);

// creating a new section node
const newSection = document.createElement("section");
// creating a new h2 node
const newH2 = document.createElement("h2");
// putting text in the h2 node
newH2.innerText = "DOM Basics";
// adding a new h2 node to the parent element
newSection.appendChild(newH2);
// creating a new paragraph node
const newP = document.createElement("p");
// adding text in the paragraph node
newP.innerText = "This was added through JavaScript";
// adding paragraph node to parent node
newSection.appendChild(newP);
// adding new section node to the body node
document.body.appendChild(newSection);