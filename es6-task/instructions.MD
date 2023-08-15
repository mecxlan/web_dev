# AUCIS DEVELOPERS CLUB

## ES6 TASK - CREATING AN ONLINE SHOPPING CART
<i>Please read the following file carefully before starting your task.</i>

### INSTRUCTIONS
<i>Please read the instructions carefully in order to avoid losing marks.</i>
<ol>
    <li>Extract the ZIP file into any folder, and then open the extracted folder with Visual Studio Code</li>
    <li>Submit only the JavaScript file with your name and roll number e.g. <b>Ali-200301.js</b></li>
    <li>You are already provided with the javascript file i.e. <b>task.js</b>. All you have to do is to make changes in that file only based on the comments provided. You don't have to make a separate file for your task.</li>
    <li>Make sure that you have NodeJS installed and a Visual Studio Code extension named <b>CodeRunner</b> so that you can easily debug and run your JavaScript file all along.</li>
</ol>

### DESCRIPTION
<p>You are assigned to create a very basic online shopping cart using ES6 version of JavaScript. </p>
<p>The shopping cart should have the following functionalities:</p>
<ol>
    <li>The shopping cart allow users to add and remove the items</li>
    <li>The user would be able to see his cart items after successfully adding and/or removing them.</li>
</ol>

### REQUIREMENTS
<ol>
    <li>Implement an arrow function called <code>addToCart</code> that accepts the cart array named <b>products</b> and a <b>product id</b> as parameters. The function would add the selected product to the cart. If the product is already in the cart, increase its quantity by 1.</li>
    <li>Implement an arrow function called <code>removeFromCart</code> that accepts the cart array and a product id as paramenters. The function should should remove one quantity of the selected product from the cart. If the product's quantity reaches zero, completely remove it from the cart.</li>
    <li>Use destructuring to extract the name, price and quantity of each product when displaying the cart items.</li>
    <li>Similarly, use the spread operator to create copies of the cart array when adding or removing the items so that you don't mutate the original array <code>products</code></li>
</ol>


