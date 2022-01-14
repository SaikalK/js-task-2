let cardNum = prompt("введите номер карты:");
number = cardNum.replace(cardNum.slice(0,-4),"************");
alert("номер карты" + number);
