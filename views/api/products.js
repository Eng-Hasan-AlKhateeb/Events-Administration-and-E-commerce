document.addEventListener('DOMContentLoaded', async() => {
    try {
        const productsIdElement = document.querySelector('.cards_wrap');
        

       
        const response = await axios.get(`http://localhost:3000/api/v1/products/`);

        const products = response.data.products;

    
        for (let i = 0; i < products.length; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.id = products[i]._id;

        // Create the img element
        var imgElement = document.createElement('img');
        imgElement.alt = '';
         // Define the string
        //  var string =products[i].imgUrls[1];

        //  // Split the string by space
        //  var splitArray = string.split('\\');
        // imgElement.src = '../../'+splitArray[0]+'/'+splitArray[1];
        if(products[i].imgUrls.length!=0)
        {
            const myArray = products[i].imgUrls[0].split("\\");
            console.log(myArray);
            if(myArray[0].localeCompare("tempUploades")==0)
        {
              imgElement.src=products[i].imgUrls[1]


        }
        else
        imgElement.src=`../../public/images/${myArray[myArray.length-1]}`
       


        }
       
        
      

        cardDiv.appendChild(imgElement);
        


        // Create the h3 element
var h3Element = document.createElement('h3');
h3Element.style.fontSize = '25px';
h3Element.style.textAlign = 'right';
h3Element.style.setProperty('text-align', 'right', 'important');
h3Element.setAttribute('dir', 'rtl')
var textNode = document.createTextNode(products[i].name);
h3Element.appendChild(textNode);
cardDiv.appendChild(h3Element);
var pElement = document.createElement('p');
pElement.style.fontSize = '18px';
pElement.style.textAlign = 'right';
pElement.style.setProperty('text-align', 'right', 'important');

// Create the text node
var textNode = document.createTextNode(' الشركة المصنعة'+products[i].manufacturerCompany);

// Append the text node to the <p> element
pElement.appendChild(textNode);
cardDiv.appendChild(pElement);




var aElement = document.createElement('a');
aElement.href = '../product details/product details.html'+"?id="+products[i]._id;
aElement.className = 'button';
aElement.style.color = 'black';
aElement.style.fontSize = '18px';
aElement.style.textAlign = 'right';

// Create the text node for the link text
var linkText = document.createTextNode('المزيد من التفاصيل');

// Create the <span> element
var spanElement = document.createElement('span');
spanElement.className = 'material-symbols-outlined';

// Create the <box-icon> element
var boxIconElement = document.createElement('box-icon');
boxIconElement.name = 'right-arrow-alt';
boxIconElement.style.color = 'white';

// Append the <box-icon> element to the <span> element
spanElement.appendChild(boxIconElement);

// Append the link text and <span> element to the <a> element
aElement.appendChild(linkText);
aElement.appendChild(spanElement);
cardDiv.appendChild(aElement);
productsIdElement.appendChild(cardDiv)
        }
    } catch (error) {
        console.error('Error:', error);
        console.log("fdfdsf")
    }
});