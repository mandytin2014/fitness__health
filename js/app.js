
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

    // 點選目錄上下移動
    $(".index__link").click(function(e){
        let pos = e.target.dataset.part;
        $("html,body").animate({"scrollTop":$("#"+pos).offset().top-230}, 1000)
    })



    // 漢堡選單
    
    $(".title__ham").click(function(){
        $(".title__ham").toggleClass("change__color")
        $(".menu--mb").slideToggle("normal");  
    })

    $(window).resize(function(){
        let width = window.innerWidth;
        $(".menu--mb").fadeOut()
        if(width < 1000){
            $(".title__ham").show();
        }else if(width >= 1000){
            $(".title__logo").show("normal");
            $(".menu--mb").hide();
            $(".title__ham").hide();
        }
    })

    // 動起來navbar
    $(".menu__item--col--mb").click(function(){
        $(".dropdown__list--mb").slideToggle("normal");

    })


    // 置頂按鈕
    $('.top').on('click', function (e) {
        $('html,body').animate({ // 有些瀏覽器只支援html或body 
            scrollTop: 0
        }, 1000);
        
        $(this).css('animation', 'jump 0.8s');
    });
    
    $(".top").each(function() {
        $(this)[0].addEventListener("animationend",function(){
            $(this).css("animation","");
        });
    });
   
        // 運動總消耗問答
        $(".answer__item").on("click",e=>{
            let answer = e.target.dataset.answer;
            
            if(answer == 0){
                $(".t").siblings().remove()
                document.querySelector(".fire").innerHTML = `<div class="show" id="container">
                
                <div class="show" id="fireworks" ><img  class="show" style="width: 500px;" src="./pictures/image-removebg-preview (1).png"></div>
                <div class="show" id="firecracker" ><img  class="show" style="width: 800px"; src="./pictures/image-removebg-preview (1).png"  width="8px"></div>
                </div>`
                document.querySelector(".response").innerHTML = `<h3 class="response__t  space"><i class="far fa-hand-paper response__icon space"></i>High Five 一 下~ 算 你 聰 明!</h3>`
                $(".response__t").css("visibility","visible"); 
                $(".answers").addClass("answer__after")      
                
            }else if(answer == 1){
                console.log("false")
                $(".t").siblings().remove();
                $(".response__f").css("visibility","visible");
                $(".answers").addClass("answer__after")  
                document.querySelector(".response").innerHTML = `<h3 class="response__f space"><i class="far fa-grin-tongue-wink"></i>不等你了！直接公布答案</h3>`
                return;
            }
            
        })
      



        // BMR & TDEE 計算機
            let bmr__result = document.querySelector(".result__bmr");
            let sit__result = document.querySelector(".sit__result");
            let low__result = document.querySelector(".low__result");
            let middle__result = document.querySelector(".middle__result");
            let high__result = document.querySelector(".high__result");
            let intense__result = document.querySelector(".intense__result");

            function bmr__calc(){

                let age = document.querySelector(".age").value;
                let gender = $('input[type= "radio"]:checked').val();
                let weight = document.querySelector(".weight").value;
                let height = document.querySelector(".height").value;
 
                // wrong
                if(age == "" || weight == "" || height == ""){
                    alert("請輸入完整資料");
                    console.log("fdsfdsf")
                    return;
                }else if(height<50 || height>250 ){
                    alert("請輸入正確身高");
                    console.log("wrong height")
                    return;
                }else if(age < 0 || age > 120 ){
                    alert("請輸入正確年齡");
                    console.log("wrong age")
                    return;
                }else if (weight < 3 || weight > 350 ){
                    alert("請輸入正確體重");
                    return;
                }else if (gender == "" ){
                    alert("請選擇正確性別");
                    return;
                }

                // correct
                if(gender == "male"){
                    bmr = Math.round(66.5 + ( 13.75 * weight ) + ( 5.003 * height ) - ( 6.755 * age ));
                    $(".result__container").show();

                } else if(gender == "female"){
                    bmr = Math.round( 655.1 + ( 9.563 * weight ) + ( 1.850 * height ) - ( 4.676 * age ));
                    $(".result__container").show();
                }  
                
  
                bmr__result.innerHTML = `<h4 class="subtitle__red p__center">基礎代謝率(BMR)結果: </h4> 
                <h3 class="result__bmr p__center"> ${bmr} 大卡</h3>`;
                sit__result.innerText = Math.round(bmr*1.2)
                low__result.innerText = Math.round(bmr*1.375)
                middle__result.innerText = Math.round(bmr*1.55)
                high__result.innerText = Math.round(bmr*1.72)
                intense__result.innerText = Math.round(bmr*1.9)
            }
          
            // 開始計算
            $(".btn__calc").on("click",e=>{
                e.preventDefault();
                bmr__calc();
                $("input[type='number']").val("");
                $("input[type='radio']").prop("checked",false);
            })
            // =================================================================
            // 運動影片分類點選

            $(".subtitle__box").on("click",function(e){
                e.stopPropagation;
                let target = e.currentTarget.dataset.type;

                // 改變按鈕背景顏色
                $(this).addClass("subtitle__box--click");
                $(".subtitle__box").not(this).removeClass("subtitle__box--click")

                if(target == "ab"){
                    $(".carousel__main").hide();
                    $(".ab").fadeIn();
                }else if(target == "lower"){
                    $(".carousel__main").hide();
                    $(".lower").fadeIn();
                }else if(target == "upper"){
                    $(".carousel__main").hide();
                    $(".upper").fadeIn();
                }else if(target == "cardio"){
                    $(".carousel__main").hide();
                    $(".cardio").fadeIn();
                }
                else if(target == "HIIT"){
                    $(".carousel__main").hide();
                    $(".hiit").fadeIn();
                }
                else if(target == "stretch"){
                    $(".carousel__main").hide();
                    $(".stretch").fadeIn();
                }
                

            })


            // 運動影片說明
            $(".outer__frame").on("click",function(){
                $(this).children(".workout__intro").toggleClass("show")
            })

           
         // =========================================================
            // 食物材料點選
            $(".pointUp").click(function(){
                $(this).siblings(".ingredient__box").fadeIn("normal")
            })
            $(".ingredient__box").click(function(){
                $(this).fadeOut("normal");
            })
   

            // 食物選擇
            $("input[name='food']").on("click",function(e){
                let type = e.target.id;
                console.log(type);
                if(type =="breakfast"){
                    $(".breakfast").fadeIn(400);
                }else{
                    $(".breakfast").fadeOut(100);
                }
                if(type =="drink"){
                    $(".drink").fadeIn(400);
                    
                }else{
                    $(".drink").fadeOut(100);
                }
                if(type =="protein"){
                    $(".protein").fadeIn(400);
                    
                }else{
                    $(".protein").fadeOut(100);
                }
                if(type =="carbonhydrate"){
                    $(".carbonhydrate").fadeIn(400);
                    
                }else{
                    $(".carbonhydrate").fadeOut(100);
                }
                if(type =="sweet"){
                    $(".sweet").fadeIn(400);
                    
                }else{
                    $(".sweet").fadeOut(100);
                }
                

            })

                   
        // ======================================================
        //  熱量比較   
            let all__cards = [
                {
                card__img: "./pictures/炸物/洋蔥圈.png",
                card__text: "洋蔥圈",
                card__text__sub:"(一份)",
                card__number : "325",
                type: "fried",
                hint: "慢跑30~40分鐘才能消耗，你捨得讓自己那麼累嗎?"
            },
            {
                card__img: "./pictures/炸物/大薯條.png",
                card__text: "麥當勞大薯",
                card__text__sub:"",
                card__number : "470",
                type: "fried",
                hint: "慢跑40~60分鐘才能消耗，高鈉還讓你水腫變豬腳！"
            },
            {
                card__img: "./pictures/炸物/炸杏鮑菇.png",
                card__text: "炸杏鮑菇",
                card__text__sub:"(一份)",
                card__number : "155",
                type: "fried",
                hint: "慢跑15~20分鐘才能消耗，原本高蛋白的杏鮑菇一丟到油鍋熱量翻倍跳！"
            },
            {
                card__img: "./pictures/炸物/炸臭豆腐.jpg",
                card__text: "炸臭豆腐",
                card__text__sub:"(一份)",
                card__number : "530",
                type: "fried",
                hint: "慢跑50~65分鐘才能消耗，炸物營養流失之外高鈉還致癌！"
            },
            {
                card__img: "./pictures/炸物/炸雞腿.jpg",
                card__text: "炸雞腿",
                card__text__sub:"(125g)",
                card__number : "270",
                type: "fried",
                hint: "慢跑25~33分鐘才能消耗，真要吃的話請把皮扒掉！"
            },
            {
                card__img: "./pictures/炸物/炸排骨.jpg",
                card__text: "炸排骨",
                card__text__sub:"(一片)",
                card__number : "330",
                type: "fried",
                hint: "慢跑30~40分鐘才能消耗，總不能把皮扒掉吧，裡面的肉少的可憐"
            },
            {
                card__img: "./pictures/炸物/炸四季豆.jpg",
             card__text: "炸四季豆",
             card__text__sub:"(一份)",
             card__number : "120",
             type: "fried",
             hint: "慢跑10~15分鐘才能消耗，炸前炸後熱量高達5倍！"
            },
            {
                card__img: "./pictures/炸物/鹹酥雞.png",
             card__text: "鹽酥雞",
             card__text__sub:"(一份)",
             card__number : "310",
             type: "fried",
             hint: "慢跑30~40分鐘才能消耗，以同重量的雞排來說，鹹酥雞接觸到的油更多，熱量相對也更高！"
            },
            {
                card__img: "./pictures/炸物/雞排.png",
                card__text: "炸雞排",
                card__text__sub:"(一片)",
                card__number : "630",
                type: "fried",
                hint: "慢跑60~80分鐘才能消耗，還占了一天能攝取的2/3熱量，你確定要吃？"
            },
            {
                card__img: "./pictures/清涼來一杯/珍珠奶茶.png",
                card__text: "半糖珍奶",
                card__text__sub:"(100ml)",
                card__number : "87",
                type: "drink",
                hint: "以500cc中杯手搖來說，慢跑40~55分鐘才能消耗，高糖分還會讓人變笨！"
            },
            {
                card__img: "./pictures/清涼來一杯/芒果冰沙.jpg",
                card__text: "芒果冰沙",
                card__text__sub:"(100ml)",
                card__number : "84",
                type: "drink",
                hint: "以500cc中杯手搖來說，慢跑40~53分鐘才能消耗，相對於珍奶比較健康，但芒果糖分十分高，請記得選無糖！"
            },
            {
                card__img: "./pictures/清涼來一杯/可樂.png",
                card__text: "可樂",
                card__text__sub:"(100ml)",
                card__number : "51",
                type: "drink",
                hint: "以罐裝310ml來說，慢跑15~20分鐘才能消耗，營養價值0之外，還會腐蝕牙齒，也許去刷馬桶更適合？！"
            },
            {
                card__img: "./pictures/清涼來一杯/黑咖啡.jpg",
                card__text: "黑咖啡",
                card__text__sub:"(100ml)",
                card__number : "2",
                type: "drink",
                hint: "運動前一小時喝黑咖啡，提升肌耐力還能減輕肌肉的疲勞痠痛，但別以為喝了就會瘦！少吃比較實在~"

            },
            {
                card__img: "./pictures/清涼來一杯/啤酒.jpg",
                card__text: "啤酒",
                card__text__sub:"(100ml)",
                card__number : "84",
                type: "drink",
                hint: "解渴消暑很誘人，但啤酒肚可能沒那麼誘人~"

            },
            {
                card__img: "./pictures/清涼來一杯/綠茶.png",
             card__text: "綠茶",
             card__text__sub:"(100ml)",
             card__number : "22",
             type: "drink",
             hint: "提神醒腦、降低膽固醇、養顏美容，但別喝太多！會影響鐵的吸收晚上還睡不著~"

            },
            {
                card__img: "./pictures/清涼來一杯/鮮奶茶.png",
                card__text: "無糖鮮奶茶",
                card__text__sub:"(100ml)",
                card__number : "27",
                type: "drink",
                hint: "相比珍奶更健康，但也別小看牛奶的乳糖，一樣都是會胖的糖！"

            },
            {
                card__img: "./pictures/清涼來一杯/運動飲料.jpg",
                card__text: "運動飲料",
                card__text__sub:"(100ml)",
                card__number : "11",
                type: "drink",
                hint: "散個步就喝運動飲料，那你可能沒消耗熱量先胖一圈，除非你做中高強度的運動才會流失水分和電解質需要補充！"

            },
            {
                card__img: "./pictures/清涼來一杯/四季春+珍波椰.png",
                card__text: "四季春+珍波椰",
                card__text__sub:"(100ml)",
                card__number : "84",
                type: "drink",
                hint: "糖分等於兩碗飯或16顆方糖，還要跑40~55分鐘才能消耗~"

            },
            {
                card__img: "./pictures/台灣小吃/大腸包小腸.png",
                card__text: "大腸包小腸",
                card__text__sub:"",
                card__number : "582",
                type: "taiwan",
                hint: "慢跑55~75分鐘才能消耗，香腸含有亞硝酸鹽，糯米難消化，高油高鹽高澱粉還吃不飽！"

            },
            {
                card__img: "./pictures/台灣小吃/小籠包.png",
                card__text: "小籠包",
                card__text__sub:"",
                card__number : "610",
                type: "taiwan",
                hint: "慢跑55~75分鐘才能消耗，湯汁香氣四溢我知道，但你等於在喝油！"

            },
            {
                card__img: "./pictures/台灣小吃/炸彈蔥油餅.jpg",
                card__text: "炸彈蔥油餅",
             card__text__sub:"",
             card__number : "700",
             type: "taiwan",
             hint: "一天1/2的熱量就那一片炸蛋蔥油餅，你甘願吃的那麼可憐嗎？"

            },
            {
                card__img: "./pictures/台灣小吃/肉圓.png",
                card__text: "肉圓",
                card__text__sub:"",
                card__number : "324",
                type: "taiwan",
                hint: "滿滿的精緻澱粉再浸泡在油裡，吃一顆跑30~40分鐘才能消耗，打消念頭吧！"

            },
            {
                card__img: "./pictures/台灣小吃/大腸麵線.jpg",
                card__text: "大腸麵線",
                card__text__sub:"",
                card__number : "610",
                type: "taiwan",
                hint: "一大坨麵線加上勾芡，大量澱粉還沒什麼蛋白質，減脂最大殺手"

            },
            {
                card__img: "./pictures/台灣小吃/蚵仔煎.jpg",
                card__text: "蚵仔煎",
                card__text__sub:"",
             card__number : "516",
             type: "taiwan",
             hint: "蚵仔雖然健康，但成本高量通常少，油通常也是劣質的大桶油！還要跑50~65分鐘才能消耗，還划算嗎？"

            },
            {
                card__img: "./pictures/台灣小吃/胡椒餅.png",
                card__text: "胡椒餅",
             card__text__sub:"",
             card__number : "370",
             type: "taiwan",
             hint: "熱量一半都是來自油脂，35%碳水化合物，受不了的話請選瘦肉的~"

            },
            {
                card__img: "./pictures/台灣小吃/綜合豆花.png",
                card__text: "綜合豆花",
                card__text__sub:"",
             card__number : "610",
             type: "taiwan",
             hint: "豆花營養價值高，但應該不會有人單吃豆花不配糖水和料，請避免添加粉圓珍珠芋圓等高碳水配料！"

            },
            {
                card__img: "./pictures/台灣小吃/滷肉飯.png",
                card__text: "滷肉飯",
                card__text__sub:"",
                card__number : "434",
                type: "taiwan",
                hint: "高油高鹽高熱量，還要跑步40~50分鐘，加上吃滷肉飯就是要配小菜，你應該不想整天都在跑步吧！"

            },
            {
                card__img: "./pictures/早餐/牛角麵包.jpg",
                card__text: "牛角麵包",
                card__text__sub:"",
                card__number : "355",
                type: "breakfast1",
                hint: "奶油、糖、酥油為主要成分，吃一塊血糖就漲停板！"

            },
            {
                card__img: "./pictures/早餐/藍莓貝果雜糧.png",
                card__text: "藍莓貝果雜糧",
                card__text__sub:"",
                card__number : "270",
                type: "breakfast1",
                hint: "油脂較少，但碳水高！讓人吃了昏昏欲睡，一次分量吃一半更健康喔！"
            },
            {
                card__img: "./pictures/早餐/韭菜盒子.png",
                card__text: "韭菜盒子",
                card__text__sub:"",
                card__number : "295",
                type: "breakfast1",
                hint: "大量油煎，燥熱容易上火，體味會變濃厚！可惜了韭菜的高營養價值~"
            },
            {
                card__img: "./pictures/早餐/豬肉滿福堡加蛋.png",
                card__text: "豬肉滿福堡加蛋",
                card__text__sub:"",
                card__number : "389",
                type: "breakfast1",
                hint: "瑪芬麵包的外皮，油脂含量較低，有1.5份的蛋白質，可惜沒有生菜增加纖維質！"
            },
            {
                card__img: "./pictures/早餐/鹹豆漿.png",
                card__text: "油條鹹豆漿",
                card__text__sub:"",
                card__number : "414",
                type: "breakfast1",
                hint: "鹹豆漿相比甜豆漿熱量較低，但加了油條熱量就飆高！"

            },
            {
                card__img: "./pictures/早餐/飯糰.jpg",
                card__text: "飯糰",
                card__text__sub:"",
                card__number : "600",
                type: "breakfast1",
                hint: "跑步55~77分鐘才能消耗一顆飯糰，糯米難消化容易脹氣、油條油脂高！"

            },
            {
                card__img: "./pictures/早餐/燒餅油條.jpg",
                card__text: "燒餅油條",
                card__text__sub:"",
                card__number : "554",
                type: "breakfast1",
                hint: "高油高澱粉，跑步50~70分鐘才能消耗，中式早餐你有更好的選擇！"
            },
            {
                card__img: "./pictures/早餐/蛋餅.jpg",
                card__text: "蛋餅",
                card__text__sub:"",
                card__number : "265",
                type: "breakfast1",
                hint: "蛋餅控看過來，想要營養均衡的話請加蔬菜和蛋白質讓餐點更健康！"

            },
            {
                card__img: "./pictures/早餐/蘿蔔糕.jpg",
                card__text: "蘿蔔糕",
                card__text__sub:"",
                card__number : "357",
                type: "breakfast1",
                hint: "四塊蘿蔔糕等於一碗飯，當正餐容易血糖快速飆升，建議搭配其他蛋白質和蔬菜當作一餐~"
            },
            
        ]
        
        
        let content = document.querySelector(".cards__box");
        content.innerHTML = 
            `<ul class="foodList">
            ${all__cards.map(function(e){
                return `
                <li class="card ${e.type}" style="width: 13rem;"  data-calories="${e.card__number}">
                    <div class="bgc__intro">
                    <p> ${e.hint}</p>
                   </div>
                <img src="${e.card__img}" class="card-img-top" alt="picture">
                <div class="card-body">
                <p class="card-text">${e.card__text}<span class="card__text__sub">${e.card__text__sub}</span> </p>
                <p class="card-text">${e.card__number}大卡</p>
                 </div>
                 </li>`;
                }).join("")}
                </ul>`;
        

            let cards = document.querySelectorAll(".card")
            console.log(cards)
           $(".card").on("click",function(){
               $(".bgc__intro").css("opacity","0")
               $(this).children(".bgc__intro").css("opacity","1");

           })
    
            $(".calories").on("click",function(e){
              
                    cards.forEach((w)=>{
                        w.style.display = "none";

                        if(w.classList.contains(e.target.id)){
                            w.style.display = "block";
                        }else if(e.target.id == "all"){
                            w.style.display = "block";
                        }
                    })

                

                console.log(...cards)
                })

                // 高價低價排序
                let foodBox = document.querySelector(".foodList")
                const originLists = Array.from(foodBox.children);
                // console.log(...originLists)
                let lists = Array.from(foodBox.children);
                console.log(...lists)

                let select = document.getElementById("calories");
                
                select.onchange = sortingValue;

                function sortingValue() {
                if (this.value === "default") {
                    while (foodBox.firstChild) {
                    foodBox.removeChild(foodBox.firstChild);
                    }
                    console.log(foodBox)
                    foodBox.append(...originLists)
                }

                
                if (this.value === "low__high") {
                    sortCost(foodBox, lists, true);
                    console.log(...lists)
                }

                if (this.value === "high__low") {    
                    sortCost(foodBox, lists, false);
                }
                }
                /* 按照價格排序 */
                function sortCost(foodBox, lists, asc) {  
                    let sortli = lists.sort((a, b) => {
                        let aCalories = a.getAttribute("data-calories");
                        let bCalories = b.getAttribute("data-calories");
                        
                        /* asc判斷升降冪 */ 
                        
                        if(asc){
                            return aCalories - bCalories
                        }else{
                            return bCalories - aCalories
                        }               
                    
                    });
                
                    while (foodBox.firstChild) {
                    foodBox.removeChild(foodBox.firstChild);
                    }
                    
                    foodBox.append(...sortli);
                }

})


        

            

        