let buttons = document.getElementsByClassName('btn')
buttons=Array.from(buttons)
let total=document.getElementById('total');
let cost=0;
total.innerText='Total: ₹'+cost.toString()

for(btnElement of buttons){
    btnElement.addEventListener('click',addToCart)
}

let priceColumn = document.getElementById('priceDesc')
let productColumn=document.getElementById('prodDesc')
let quantityColumn=document.getElementById('quanDesc')

function addToCart(e){
  let count=0;
  let price = e.target.previousElementSibling;
  let productTitle=price.parentNode.firstElementChild
  let productImg=price.parentNode.previousElementSibling
  let priceAppend=document.createElement('div')

  priceAppend.innerHTML=price.innerHTML;
  priceAppend.style.height='160px'
  priceAppend.style.display='flex'
  priceAppend.style.alignItems='center'
  priceAppend.style.justifyContent='center'
  priceAppend.style.margin='10px'
  priceColumn.style.fontSize='20px'
  
  let product=document.createElement('div')
  
  product.style.display='flex'
  product.style.alignItems='center'
  product.style.justifyContent='center'
  product.style.margin='10px'
  product.style.fontSize='20px'
  
  let productImgAppend=document.createElement('img')
  productImgAppend.src=productImg.src
  productImgAppend.style.height='160px';
  productImgAppend.style.width='100px';
  
  let productTitleAppend=document.createElement('div')
  productTitleAppend.innerHTML=productTitle.innerHTML
  productTitleAppend.innerText=productTitleAppend.innerText.substr(3,)
  productTitleAppend.style.padding='10px'
  productTitleAppend.style.width='200px'
  productTitleAppend.style.textAlign='left'

  product.appendChild(productImgAppend)
  product.appendChild(productTitleAppend)
  
  let quantityDiv=document.createElement('div')
  quantityDiv.style.display='flex';
  quantityDiv.style.height='160px';
  quantityDiv.style.alignItems='center'
  quantityDiv.style.justifyContent='center'
  
    
  let quantity=document.createElement('input')
  quantity.setAttribute('type','number')
  quantity.setAttribute('name','quantity')
  quantity.setAttribute('value',1)
  quantity.style.height='20px';
  quantity.style.width='40px';
  quantity.style.padding='2px';
  quantity.style.border='none';
  quantity.style.outline='none';
  quantity.style.borderRadius='4px';
  quantity.style.textAlign='right';
  if(quantity.value<0){
    alert('Quantity cannot be lesser than 1')
  }
  
  let priceAmt=parseInt(priceAppend.innerText.substr(1,))
  cost+=priceAmt;
  let sum=parseInt(priceAppend.innerText.substr(1,))
    
  let valueUp=document.createElement('button')
  valueUp.id='up'
  valueUp.innerText='+'
  valueUp.style.height='20px';
  valueUp.style.width='20px';
  valueUp.style.margin='2px';
  valueUp.addEventListener('click',()=>{
    quantity.stepUp();
    priceAmt+=sum
    cost+=sum
    priceAppend.innerText='₹'+priceAmt.toString()
    total.innerText='Total: ₹'+cost.toString()
  })
    
  let valueDown=document.createElement('button')
  valueDown.id='down'
  valueDown.innerText='-'
  valueDown.style.height='20px';
  valueDown.style.width='20px';
  valueUp.style.margin='2px';
  valueDown.addEventListener('click',()=>{
    if(quantity.value==1){
      alert("Quantity cannot be lesser than 1")
    }
    else{
      quantity.stepDown();
      priceAmt-=sum
      cost-=sum;
      priceAppend.innerText='₹'+priceAmt.toString()
      total.innerText='Total: ₹'+cost.toString()

    }
  })
    
  quantityDiv.appendChild(valueDown)
  quantityDiv.appendChild(quantity)
  quantityDiv.appendChild(valueUp)
  
  let quantityButton=document.createElement('button')
  quantityButton.innerText='Remove'
  quantityButton.classList='btn'
  quantityDiv.appendChild(quantityButton)
  quantityButton.addEventListener('click',()=>{
    productColumn.removeChild(product)
    priceColumn.removeChild(priceAppend)
    quantityColumn.removeChild(quantityDiv)
    cost-=parseInt(priceAppend.innerText.substr(1,))
    total.innerText='Total: ₹'+cost.toString()
    count=0;
  })

  
    if(count<1){
      productColumn.appendChild(product)
      quantityColumn.appendChild(quantityDiv)
      priceColumn.appendChild(priceAppend)
      count++;
    }
    else{
        alert('Book is already added in the cart')
        console.log(count)
    } 
    total.innerText='Total: ₹'+cost.toString()
}