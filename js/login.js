const loginForm =document.getElementById("login-form");
const storedUsers = localStorage.getItem("users");
document.getElementById("loginBtn").addEventListener("click",login)

function login() {
    // Lấy danh sách tài khoản từ localStorage
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        const usersArray = JSON.parse(storedUsers);

        // Kiểm tra username và password
        const user = usersArray.find(
            user => user.username === username.value && user.password === password.value
        );

        if (user) {
            console.log("Đăng nhập thành công!");
            window.location.href = "index.html";
        } else {
            console.log("Sai tài khoản hoặc mật khẩu!");
            return false;
        }
    } else {
        console.log("Không có tài khoản nào được lưu.");
        return false;
    }
}
