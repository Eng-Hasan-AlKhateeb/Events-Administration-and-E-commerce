document.addEventListener('DOMContentLoaded', async() => {
    try {
        // const blogIdElement = document.querySelector('.article[data-blog-id]');
        // Get the URL of the current page
var url = window.location.href;
let paramString = url.split('?')[1]
let paramValue = url.split('=')[1]
// Create a new URLSearchParams object with the URL
// var searchParams = new URLSearchParams(url);
console.log(paramValue);
// Get the value of a specific parameter
// var paramValue = searchParams.get('id');

console.log(paramValue);
console.log(`http://localhost:3000/api/v1/products/${paramValue}`);


        const response = await axios.get(`http://localhost:3000/api/v1/products/${paramValue}`);

        const productDetils = response.data.product;
        console .log(productDetils);

        // Update the elements with the retrieved blog data
        for(let i=0;i<=5;i++)
        {
            let rel=(i+1)
            let clasapp=`pic-${rel}`
            console.log(clasapp);
            var pic1Div = document.querySelector("."+clasapp);
            console.log(pic1Div);

        const imgElement = document.createElement('img');
        imgElement.alt = '';
         // Define the string
        //  var string =productDetils.imgUrls[i];

        //  // Split the string by space
        //  var splitArray = string.split('\\');
        // imgElement.src = '../../'+splitArray[0]+'/'+splitArray[1];
       
          
        if(i==3)
        {
            const myArray = productDetils.imgUrls[0].split("\\");
            console.log(myArray);
            imgElement.src=`../../public/images/${myArray[myArray.length-1]}`
            

        }
        else if(i==4)
        {
            const myArray = productDetils.imgUrls[1].split("\\");
            imgElement.src=`../../public/images/${myArray[myArray.length-1]}`
        }
        else if(i==5)
        {
            const myArray = productDetils.imgUrls[2].split("\\");
            imgElement.src=`../../public/images/${myArray[myArray.length-1]}`
        }
        else{
            const myArray = productDetils.imgUrls[i].split("\\");
            imgElement.src=`../../public/images/${myArray[myArray.length-1]}`

        }
        
        pic1Div.appendChild(imgElement);


        }
        
// Select the <h3> element with class "product-title"
var h3Element = document.querySelector('.product-title');

h3Element.innerHTML =productDetils.name;

var starsElements =document.querySelector('.stars');
console.log(starsElements);

var rate=Math.round(productDetils.rate/20);
console.log(rate);
 for(let i=0;i<5 ;i++)
 {
    // Create a new <span> element
var spanElement = document.createElement('span');

    if(rate>0)
    {
        // Set the class attribute
spanElement.setAttribute('class', 'fa fa-star checked');

    }
    else
    {
                // Set the class attribute
spanElement.setAttribute('class', 'fa fa-star ');
    }



// Append the new element to the document body or any other parent element
starsElements.appendChild(spanElement);

rate--;
 }

 var reviewElements = document.querySelector('.review-no');


 reviewElements.innerHTML =productDetils.numRating+"مستخدم قيم هذا المنتج";

 var typeElements = document.querySelector('.protype');
 var countryElements = document.querySelector('.procountry');
 var  grantyElements = document.querySelector('.progranty');
 var manufaElements = document.querySelector('.promanufa');
 var  realpriceElements = document.querySelector('.realprice');
 var fackpriceElements = document.querySelector('.fackprice');
 typeElements.innerHTML =productDetils.type;
 countryElements.innerHTML =productDetils.relatedCompany.origin;
 grantyElements.innerHTML =productDetils.guarantee;
 manufaElements.innerHTML =productDetils.manufacturerCompany;
 realpriceElements.innerHTML=productDetils.priceOnSale;
 fackpriceElements.innerHTML=productDetils.price;

 var sizes=productDetils.sizes;
 var sizesElements = document.querySelector('.sizes');
// Create a new <span> element
var spanElement = document.createElement('span');

for(let i=0;i<sizes.length;i++)
{
// Set the class attribute
spanElement.setAttribute('class', 'size');

// Set the data-toggle attribute
spanElement.setAttribute('data-toggle', 'tooltip');

// Set the title attribute
spanElement.setAttribute('title', 'small');

// Set the text content
spanElement.textContent = sizes[i];

// Append the new element to the document body or any other parent element
sizesElements.appendChild(spanElement);

}

var colorsElement = document.querySelector('.colors');


for(let i=0;i<productDetils.colors.length;i++)
{
    
    const spanElement = document.createElement('span');
    spanElement.className = 'color blue'
    if(productDetils.colors[i].localeCompare('أزرق')==0)
    {
        spanElement.className = 'color blue'

    }
    if(productDetils.colors[i].localeCompare('بني')==0)
    {
        spanElement.style.backgroundColor = 'brown';
    }
    if(productDetils.colors[i].localeCompare('أصفر')==0)
    {
        spanElement.style.backgroundColor = 'yellow';
    }
    if(productDetils.colors[i].localeCompare('أحمر')==0)
    {
        spanElement.style.backgroundColor = 'red';
    }
   
    colorsElement.appendChild(spanElement)
}

        // Update other elements accordingly

    } catch (error) {
        console.error('Error:', error);
        console.log("fdfdsf")
    }
});