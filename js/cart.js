var product = document.getElementById("mat-hang-le");  // Giả sử đây là container sản phẩm chính
var addToCartButtons = document.querySelectorAll(".click");  // Giả sử tên lớp cho các nút thêm vào giỏ hàng

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        var productItem = event.target.closest(".mathangle");  // Giả sử tên lớp cho các mục sản phẩm

        // Kiểm tra xem có tìm thấy phần tử sản phẩm hay không
        if (productItem) {
            var productName = productItem.querySelector(".name").innerHTML;  // Giả sử tên lớp cho tên sản phẩm
            var price = productItem.querySelector(".gia").innerHTML;
            var quantity = productItem.querySelector(".soluong").value;
            var image = productItem.querySelector("img").src;

            var productToAdd = {
                ten: productName,
                gia: price,
                soluong: quantity,
                anh: image
            };
            try {
                localStorage.setItem("cartItems", JSON.stringify(productToAdd));  // Lưu trữ mảng các mục
                alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
            } catch (error) {
                console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);  // Xử lý các lỗi tiềm ẩn
                alert("Đã xảy ra sự cố khi thêm sản phẩm vào giỏ hàng.");
            }
        } else {
            console.warn("Không tìm thấy mục sản phẩm.");  // Xử lý các phần tử sản phẩm bị thiếu
        }
    });
});

var showInfor = document.getElementById("show-infor");
var hidenInfor = document.getElementById("hidden-infor");
showInfor.addEventListener("click",function(){
    if(hidenInfor.style.display === 'none'){
        hidenInfor.style.display = 'block';
    }else{
        hidenInfor.style.display = 'none';
    }
})
