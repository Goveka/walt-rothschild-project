var nameArray = new Array();
var count2 = 1;
var count = 5;
var p = 0;
var color = 1;

const deatails = {
    type: 'carousel',
    perView: 3

}
let array= []

let glide__slide=document.querySelectorAll(".glide__slide").forEach((slide, i) =>{
    slide.addEventListener('click', function addPrices(event) {
        let price= event.target.nextElementSibling.innerText;
        let priceNum=parseFloat(price)
        console.log(priceNum);
        array.push(priceNum)
        console.log(array);

        if (array.length >=3) {
            let sum=array.reduce((previousValue,currentValue)=>{
                return previousValue +  currentValue
              }, 0)
              let totalPrice=document.getElementById("totalPrice")
              totalPrice.innerText="Total price is"+":" +"R"+sum
              console.log(sum);   
        }
    })
})


new Glide(".glide", deatails).mount()

function SetImageName(strName) {

    document.getElementById("ImageName").value = strName;
    nameArray[p] = strName;

    for (i = 0; i < count; i++) {
        document.getElementById("image" + count2).innerHTML = nameArray[p];

    }

    if (p == 2) {
        document.getElementById("min").style.color = "#00FF00";
    }

    if (p == 4) {
        document.getElementById("max").style.color = "#FF0000";
    }
    p++;
    count2++;
    color++;

}