export function initHeader(div) {
  const getUser = localStorage.getItem("loggedin_user");

  div.innerHTML = `
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container">
        <a class="navbar-brand custom-logo" href="#"style="color:white;">Logo</a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto custom-nav">
            <li class="nav-item">
              <a class="nav-link custom-link active" aria-current="page" href="product-ecommerc.html"style="color:white;">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom-link" href="add-to-card.html"style="color:white;">Your Cart</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle custom-link dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"style="color:white;">
               Dropdown
              </a>
              <ul class="dropdown-menu"style="color:white;">
                <li><a class="dropdown-item custom-dropdown-item login" href="profile-user.html">${
                  getUser
                    ? `<i class="fa-solid fa-circle-user" style="color: #322f2f;"></i> ${getUser} `
                    : ""
                }</a></li>
                <li><a class="dropdown-item custom-dropdown-item login" href="index.html">Login</a></li>
                <li><a class="dropdown-item custom-dropdown-item" href="index.html">Register</a></li>
                <li><a class="dropdown-item custom-dropdown-item logout" id="logout" href="#">LogOut</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const logoutLink = div.querySelector(".logout");

  logoutLink.addEventListener("click", () => {
    localStorage.removeItem("users");
    localStorage.removeItem("loggedin_user");
    window.location.href = "http://127.0.0.1:5500/index.html";
  });
}
