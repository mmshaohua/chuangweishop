    var goodslist = [
        {"id":"1","goodsName":"1s","prc_src":"../images/1s.jpg","price":"399"},
        {"id":"2","goodsName":"55H20","prc_src":"../images/55H20.jpg","price":"3799"},
        /* {"id":"3","goodsName":"40H5","prc_src":"../images/40H5.jpg","price":"1488"}, */
        /* {"id":"4","goodsName":"P1","prc_src":"../images/P1.jpg","price":"1399"}, */
        {"id":"5","goodsName":"Live-2","prc_src":"../images/Live-2.jpg","price":"1099"},
        {"id":"6","goodsName":"55H5","prc_src":"../images/55H5.jpg","price":"2888"},
        {"id":"7","goodsName":"55H6","prc_src":"../images/55H6.jpg","price":"3288"},
        {"id":"8","goodsName":"65S9A","prc_src":"../images/65S9A.jpg","price":"25999"},
        {"id":"9","goodsName":"49H5","prc_src":"../images/49H5.jpg","price":"2599"},
        {"id":"10","goodsName":"55H5M","prc_src":"../images/55H5M.jpg","price":"2988"},
        {"id":"11","goodsName":"55M9","prc_src":"../images/50M9.jpg","price":"1888"},
        {"id":"12","goodsName":"50M7S","prc_src":"../images/50M7S.jpg","price":"1899"},
        {"id":"13","goodsName":"P1 pro","prc_src":"../images/P1 pro.jpg","price":"1499"},
        {"id":"14","goodsName":"XB","prc_src":"../images/XB.jpg","price":"349"},
        {"id":"15","goodsName":"1v","prc_src":"../images/1v.jpg","price":"229"},
        {"id":"16","goodsName":"L1","prc_src":"../images/L1.jpg","price":"299"},
        {"id":"17","goodsName":"W30Ai","prc_src":"../images/W30Ai.jpg","price":"2199"},
        {"id":"18","goodsName":"W48AP","prc_src":"../images/W48AP.jpg","price":"2399"},
        {"id":"19","goodsName":"F90MCGA","prc_src":"../images/F90MCGA.jpg","price":"2499"},
        {"id":"20","goodsName":"T90Q5","prc_src":"../images/T90Q5.jpg","price":"1019"}
    ]
    
    var addhtml = ``;
    for (let i = 0; i < 5; i++) {
        addhtml += `<div class="list_cont">
                    <div class="list_pro"><a href="./goods.html?id=${goodslist[i].id}" target="_blank"><img src="${goodslist[i].prc_src}"></a></div>
                    <div class="list_bottom">
                        <h5><a href="./goods.html?id=${goodslist[i].id}" target="_blank">${goodslist[i].goodsName}(送智能音箱)</a></h5>
                        <p>55寸|2+32G | 极光幻彩淅变色 | </p>
                        <div class="price">￥${goodslist[i].price}</div>
                    </div>
                    <div class="hot"><i><img src="../images/imageTag3.png" /></i></div>
                    <div class="list_hover">
                        <span class="hover_price">￥${goodslist[i].price}</span>
                        <span class="shop_cart"><a href="./goods.html?id=${goodslist[i].id}" target="_blank">加入购物车</a></span>
                    </div>
                </div>`
    }
    /* console.log(addhtml); */
    /* document.getElementsByClassName("main_wrap")[0].appendChild(str); */
    /* $("#addhtml").html(addhtml); */
    
    
    /* console.log($("#sss")); */
    /* $(".main_wrap").eq(0).append(str);  */
            
        