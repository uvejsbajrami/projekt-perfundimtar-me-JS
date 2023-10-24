export function DailyDeals() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const dailyDeal = document.getElementById("daily-deal");
      for (let i = 0; i <= 0; i++) {
        let DailyProduct1 = data[Math.floor(Math.random() * data.length)];
        let DailyProduct2 = data[Math.floor(Math.random() * data.length)];

        const newDiv = document.createElement("div");
        newDiv.className = "col-sm-12 offset-sm-2 col-md-5 offset-md-1";
        newDiv.innerHTML = `
                    <div class="card mb-3 dailyProduct z-0 "  >
                        <div class="row g-0 cards">
                            <div class="col-md-4">
                                <img src="${
                                  DailyProduct1.image
                                }" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${
                                      DailyProduct1.title
                                    }</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><span style="font-size:17px;border:2px dashed black;">${
                                      DailyProduct1.price < 10 ||
                                      DailyProduct1.price < 20
                                        ? DailyProduct1.price
                                        : DailyProduct1.price - 20
                                    }$</span></p>
                                    <p class="card-text"><span id="time1" style="font-size:20px;">24:00:00</span></p>
                                    <a class="bn31" href="buy-now-cart.html"><span class="bn31span">BUY NOW</span></a>

                                </div>
                            </div>
                        </div>
                    </div>
                `;
        dailyDeal.appendChild(newDiv);

        const newDiv1 = document.createElement("div");
        newDiv1.className = "col-sm-12 offset-sm-2 col-md-5 offset-md-1";
        newDiv1.innerHTML = `
                    <div class="card mb-3 dailyProduct z-0 " >
                        <div class="row g-0 cards">
                            <div class="col-md-4">
                                <img src="${
                                  DailyProduct2.image
                                }" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${
                                      DailyProduct2.title
                                    }</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><span style="font-size:17px;border:2px dashed black;">${
                                      DailyProduct2.price < 10 ||
                                      DailyProduct2.price <= 20
                                        ? DailyProduct2.price
                                        : DailyProduct2.price - 20
                                    }$</span></p>
                                    <p class="card-text"><span id="time2" style="font-size:20px;">24:00:00</span></p>
                                    <a class="bn31 " href="buy-now-cart.html" target="_blank"><span class="bn31span">BUY NOW</span></a>
                                </div>
                            </div>
                         </div>
                     </div>
                `;
        dailyDeal.appendChild(newDiv1);
        if (DailyProduct2.price < 10) {
          DailyProduct2.price = DailyProduct2.price;
        } else if (DailyProduct2.price < 20) {
          DailyProduct2.price = DailyProduct2.price - 5;
        } else if (DailyProduct2 >= 100) {
          DailyProduct2.price = DailyProduct2.price - 20;
        }
        const time1 = document.getElementById("time1");
        const time2 = document.getElementById("time2");
        let timer = 24 * 60 * 60;

        const countdown = setInterval(() => {
          timer--;
          const hours = Math.floor(timer / 3600);
          const minutes = Math.floor((timer % 3600) / 60);
          const seconds = timer % 60;
          time1.innerText = `Daily Deal End In ${
            hours < 10 ? "0" + hours : hours
          }:${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          } `;
          time2.innerText = `Daily Deal End In ${
            hours < 10 ? "0" + hours : hours
          }:${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`;

          if (timer === 0) {
            clearInterval(countdown);
            location.reload();
          }
        }, 1000);

        if (timer === 0) {
        }
      }
    });
}
