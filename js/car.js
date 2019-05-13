
// //判断复选框是否打勾了
// var locOrder =function(){
//     var ids ="";
//     $("input[type ='checkbox']").each(function(){
//         if(this.checked && $(this).val()!=-1){
//             ids +=$(this).val() + ",";
//         }
//     });
//     if(ids == ""){
//         alert('请选择商品');
//         return false;
//     }
// }
//全选
function checkNoAll(t){
    console.log(11)
    var isCheck =$(t).is(':checked');//获得全选复选框是否选中
    console.log( $("input[type ='checkbox']").length)
    $("input[type ='checkbox']").each(function(){
        this.checked =isCheck;//循环赋值给每个复选框是否选中
       
    });
    
    //checkAll();
}

// $("input[type ='checkbox]").prop("checked",true);
// // function checkAll(){
//     var cnum =0;
//     var cprice =0;
//     $(".order_content ul").each(function(){
//         var checked =$(this).find("input[type=checkbox]").is(':checked');
//         if(checked){
//             var price =parseFloat($(this).find("p[class ='sum_price']").html().replace('￥',''));
//             var num =parseInt($(this).find("input[class='sum']").val());
//             cprice +=price*num;
//             cnum +=num;
//         }
//     });
//     $("#cnum").html(cnum);
//     $("#cprice").html(cprice.toFixed(2));
// }
// checkAll();
// var proid =0;
// $(function(){
//     $('.delBtn').click(function(){
//         proid =$(this).attr('val');
//         $('.model_bg').fadeIn(300);
//         $('.my_model').fadeIn(300);
//     })
//     function closeM(){
//         $('.model_bg').fadeOut(300);
//         $('.my_model').fadeOut(300);
//         $('.user_model').fadeOut(300);
//     }
// //      //关闭模态框
//      $('.closeModel').click(function () {
//         closeM();
//     });
//     $('.dialog-close').click(function () {
//         closeM();
//     });
//     $('.dialog-sure').click(function () {
//         ClearCart(proid, $(this).attr("id"), function () {
//             $(".order_content ul[ulid='" + proid + "']").remove();
//             closeM();
//            checkAll();
//             getTopCart();
//         })
//     })  
// })
// $(document).ready(function(){
//     //点击增加按钮触发事件
//         $(".plus").click(function(){
//             var num = $(this).parent().children("a");
//     //单品数量增加
//             num.text(parseInt(num.text())+1);
//     //商品总数增加
//             var totalNum = parseInt($(".price_num").text());
//             price_num++
//             $(". price_num").text( price_num);
//     //计算总价
//             var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
//             $(".total_text").text(parseInt($(".total_text").text())+goods_price);
//         });
// function Cart(){}
// Cart.prototype.getCar =function(){
// 	return JSON.parse(localStorage.getItem('cartlist'))||[];
// }
// //添加商品到购物车
// Cart.prototype.addCar =function(product){
// 	//1.判断是否有相同商品
// 	var cartlist =JSON.parse(localStorage.getItem('cartlist'))||[];
// 	if(this.hasGoods(product.id)){
// 		//1-1,有：商品数量加一
// 		for(var i =0;i<cartlist.length; i++){
// 			if(cartlist[i].id ==product.id){
// 				cartlist[i].number +=product.number;
// 			}
// 		}
// 	}else{
// 		//1-2,没有，直接加入商品
// 		cartlist.push(product);
// 	}
// 	//再存储到本地存储
// 	localStorage.setItem('cartlist',JSON.stringify(cartlist));
// }
// //判断是否有相同商品
// Cart.prototype.hasGoods =function(id){
// 	var cartlist =JSON.parse(localStorage.getItem('cartlist'))||[];
// 	for(var i =0; i<cartlist.length; i++){
// 		//判断id是否相同
// 		if(cartlist[i].id ==id){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// //删除购物车商品
// Cart.prototype.delCarGoods =function(id){
// 	var cartlist =JSON.parse(localStorage.getItem('cartlist'))||[];
// 	for(var i =0;i<cartlist.length; i++){
// 		if(id ==cartlist[i].id){
// 			cartlist.splice(i,1);
// 			//再写入本地存储
// 			localStorage.setItem('cartlist',JSON.stringify(cartlist));
// 			return true;
// 		}
// 	}
// 	return false;
// }
// //计算总价
// Cart.prototype.totalMoney = function(){
//     var cartlist = JSON.parse(localStorage.getItem("cartList")) || [];
//     var sum = 0;
//     for(var i = 0; i < cartlist.length; i++){
//         sum += cartlist[i].price * cartlist[i].number;
       
//     }
//     return sum;
// }