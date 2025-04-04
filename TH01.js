const products = [
    { id: 1, name: "Burger Bò", description: "Burger bò với phô mai và rau tươi", price: "50.000đ", image: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?t=st=1743705384~exp=1743708984~hmac=fd166d65ed5e9a67c59845bc4f5f806021d78be27ee0f232bacc541e43b829a4&w=996" },
    { id: 2, name: "Gà Rán Giòn", description: "Gà rán giòn rụm, ngon miệng", price: "70.000đ", image: "https://i.pinimg.com/736x/9b/60/c8/9b60c87f8a2cf2e4a3561978bb49e53b.jpg" },
    { id: 3, name: "Pizza Phô Mai", description: "Pizza nóng hổi, phủ đầy phô mai", price: "120.000đ", image: "https://i.pinimg.com/736x/c5/b8/ab/c5b8ab113430f74aef487b5a2d70834d.jpg" },
    { id: 4, name: "Khoai Tây Chiên", description: "Khoai tây chiên giòn tan", price: "30.000đ", image: "https://i.pinimg.com/736x/ea/3e/84/ea3e84f0afd734f2327d1c26af3e4da4.jpg" },
    { id: 5, name: "Hotdog Xúc Xích", description: "Hotdog với xúc xích nướng và sốt đặc biệt", price: "40.000đ", image: "https://i.pinimg.com/736x/67/75/cf/6775cfc79faa22d6deef62e3f5296941.jpg" },
    { id: 6, name: "Sandwich Gà", description: "Sandwich với gà nướng và rau tươi", price: "60.000đ", image: "https://i.pinimg.com/736x/35/af/bd/35afbd9ab4eee964656236058951cf35.jpg" },
    { id: 7, name: "Mì Ý Bò Bằm", description: "Mì Ý sốt bò bằm đậm đà", price: "90.000đ", image: "https://i.pinimg.com/736x/2f/4f/06/2f4f06e26d086fbebec60b36e742b72c.jpg" },
    { id: 8, name: "Taco Mexico", description: "Taco với nhân thịt bò và rau củ tươi", price: "80.000đ", image: "https://i.pinimg.com/736x/44/8a/7a/448a7a40dacd8ab41a2ab70f9ff8a909.jpg" },
    { id: 9, name: "Gà Nướng BBQ", description: "Gà nướng sốt BBQ thơm ngon", price: "85.000đ", image: "https://i.pinimg.com/736x/33/fb/c4/33fbc444fab2e824557e63ca88dfdece.jpg" },
    { id: 10, name: "Nuggets Gà", description: "Miếng gà chiên vàng giòn, hấp dẫn", price: "55.000đ", image: "https://i.pinimg.com/736x/69/d5/c3/69d5c348e9114622d2c2d2ec5afaebf5.jpg" },
    { id: 11, name: "Salad Trái Cây", description: "Salad với nhiều loại trái cây tươi ngon", price: "45.000đ", image: "https://i.pinimg.com/736x/9c/d1/00/9cd1006884449e49e8253de8d89fe56c.jpg" },
    { id: 12, name: "Sushi Cá Hồi", description: "Sushi cá hồi tươi ngon, hấp dẫn", price: "150.000đ", image: "https://i.pinimg.com/736x/de/c7/98/dec798e136b87a1e345ed2121bc74cb5.jpg" }

];


const productList = document.getElementById("productList");
const productDetails = document.getElementById("productDetails");

products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${product.image}" alt="${product.name}"><p>${product.name}</p>`;
    li.onclick = () => {
        // Ẩn danh sách sản phẩm khi nhấn vào một sản phẩm
        productList.style.display = "none";

        // Hiển thị thông tin chi tiết của sản phẩm
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <p>Giá: ${product.price}</p>
            <button onclick="goBack()">Quay lại</button>
        `;
        productDetails.style.display = "block";
    };
    productList.appendChild(li);
});

// Hàm quay lại để hiển thị lại danh sách sản phẩm
function goBack() {
    productList.style.display = "grid";  // Hiển thị lại danh sách sản phẩm
    productDetails.style.display = "none";  // Ẩn thông tin chi tiết sản phẩm
}
