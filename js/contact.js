$(function(){

// 動起來下拉式選單
let menu__item = document.querySelector(".menu__item--col");
menu__item.addEventListener("click", e=>{
 $(".dropdown__list").toggle();
})

// 手機板點選改變字體顏色

$(".dropdown__list--text").click(function(){
    $(this).css("color","#559dd8");
})



// 漢堡選單
$(".title__ham").click(function(){
    $(".menu--mb").slideToggle("normal");
    $(".title__ham").slideToggle("normal");
    $(".title__logo").slideToggle("normal");
    $(".title__ham--close").show("normal");

})
$(".title__ham--close").click(function(){
    $(".title__ham--close").slideToggle("normal")
    $(".menu--mb").slideToggle("normal");
    $(".title__logo").slideToggle("normal");
    $(".title__ham").slideToggle("normal")
})

// 動起來navbar
$(".menu__item--col--mb").click(function(){
    $(".dropdown__list--mb").slideToggle("normal");

})


// 置頂按鈕
$('.top').on('click', function (e) {
    $('html,body').animate({ // 有些瀏覽器只支援html或body 
        scrollTop: 0
    }, 110);
    
    $(this).css('animation', 'jump 0.8s');
});

$(".top").each(function() {
    $(this)[0].addEventListener("animationend",function(){
        $(this).css("animation","");
    });
});


$('.submit__btn').click(function(e){
    e.preventDefault();

    let name = $('#name').val(); // 抓取input值
    let gender = $('input[name="gender"]:checked').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let topic =  [];
    $('input[name="topic"]:checked').each(function(index,item){
        topic.push($(this).val());
    })
    let motivation = [];
    $('input[name="motivation"]:checked').each(function(index,item){
        motivation.push($(this).val())
    });
    let suggestion =$('#word').val();


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    console.log("Fdsfdsf")
    if(gender==""||phone==""||email==""){ // 判斷空值時加上提示樣式
      
      alert("請輸入完整資料");
      
    }else if(validateEmail(email) == false){
        alert("請輸入正確信箱");

    }else if(name == ""){
        $(".invalid__name").addClass("invalid__active");
        alert("請輸入完整資料");
    } else { 
      // 傳送資料給API
      $.ajax({
      url: "https://script.google.com/macros/s/AKfycbw2LSqLkZiYtv-pZi8NMVSwqPfKJcHgGe5838LfSDPpEaKcML0IWaeWhIW_5ImfHi1qzw/exec",
      data: {
        "name": name,
        "gender":gender,
        "phone":phone,
        "email":email,
        "topic":topic.toString(),
        "motivation":motivation.toString(),
        "suggestion":suggestion,
        
         //以JSON格式傳送資料
      },
      success: function (response) {
        if (response == "成功") {  //回傳“成功”時跳出提示
            $(".bgc__submit").addClass("bgc__submit--active")
            alert("我們聽到你的心聲囉~~"); 
        }
      },
    });
    }
    
  }
  )









})