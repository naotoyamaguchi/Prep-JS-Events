/*Exercise 1.  Fill in the correct id to target the paragraph tag*/
  function fontSize(){
    document.getElementById('biggie').style.fontSize = "200%";
  }

 /*Exercise 2. change the font color to red*/
  function colorMeBadd(){
    document.getElementById('colors').style.color = 'red'; 
  }

/*Exercise 3. fill in the spaces to make this function operate:*/
  function showAnswer(){
    document.getElementById('answer').innerHTML = " C (da sea get it?) arrrr!";
  }

/*Exercise 4.  Instruct the following function to display the message "My name is Lee, Brrruuuce Lee!" in a new paragraph element after the button is clicked.*/

  function kungfu(){
    document.getElementById('beWater').innerHTML = "My name is Lee, Brrruuuce Lee!";
  }


//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){
/*Exercise 5. Add an event listener to the quotes button that will display a quote after it is clicked on.</p>*/

var firstQuote = "When you do things right, people won't be sure you've done anything at all";

document.getElementById('Benjamin').addEventListener('click', sayQuote);

function sayQuote(){
  document.getElementById('lines').innerHTML = firstQuote;
}


/*Exercise 6. Add another event listener to the image below that will display an inspirational quote after it is clicked</p>*/

var myQuote = "knowing is better than learning..";

document.getElementById('khaled').addEventListener('click', khaledQuote);

function khaledQuote(){
  document.getElementById('wedabest').innerHTML = myQuote;
}


/*Exercise 7.  Generate a random quote from clicking on a button*/
var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

document.getElementById('change').addEventListener('click', randomQuote);

function randomQuote(){
  document.getElementById('displayQuotes').innerHTML = quotes[RNG()];
}

function RNG(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return randomNumber;
}


                                                   
/*Exercise 8. Create an event listener that will show and hide the message when clicking on the button.*/



document.getElementById("hideandseek").addEventListener('click', showMessage);

function showMessage(){
  var theMessage = document.getElementById("showmoney");
  if(theMessage.style.display === 'none'){theMessage.style.display = 'block';}
    else{
      theMessage.style.display = 'none';
    }
}

/*Final Boss:
Make a visual list of the items in the orders array. When clicking on the product, you must show and hide the price for that item.*/


var orders = [{product: "Finger Toothbrush", price: 9.99}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", price: 500.01}, {product: "Goldfish Aquairum Phone Booth", price: 199.99}, {product: "Woof Washer 360", price: 9.99}, {product: "Sauna Pants", price: 39.95}, {product: "Noiseless Mute Karaoke Microphone", price: 79.99}, {product: "Necktie Umbrella", price: 16.86}];



var myOrders = document.getElementById('myOrders');

function createButtons(){
  for (var i = 0; i < orders.length; i++) {
    var newButton = document.createElement('button');
    newButton.className = "priceButton";

    var productSpan = document.createElement('span');
    productSpan.innerHTML = orders[i].product;
    productSpan.className = "itemName";
    newButton.appendChild(productSpan);

    var priceSpan = document.createElement('span');
    priceSpan.innerHTML = orders[i].price;
    priceSpan.className = "itemPrice";
    priceSpan.id  = "itemPrice"+i;
    priceSpan.style.display = 'none';
    newButton.appendChild(priceSpan);

    myOrders.appendChild(newButton);
    newButton.addEventListener('click', togglePrice);
  }
}

createButtons();

function togglePrice(){
  var thePrice = this.querySelectorAll('.itemPrice')[0];
  if (thePrice.style.display === 'none'){
    thePrice.style.display = 'block';
  }else{
    thePrice.style.display = 'none';
  }
}


};