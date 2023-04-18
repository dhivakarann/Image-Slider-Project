const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["image1","image2","image3","image4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})