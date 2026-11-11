const { topSellers } = steamData;
function TopSellers() {
  return `
  <h1>Top Sellers</h1>
  <article aria-label="top-sellers">
  <ul>${topSellers.map(topSeller => /*HTML*/
    `<li>
      <img src=${topSeller.image} alt="'${topSeller.title}' still preview banner image"> 
      <h2>${topSeller.title}</h2>
        ${topSeller.platform === "windows"
      ? `<span class="normal"></span>`
      : `<span class="normal">svgsak2</span>`} 
        ${topSeller.originalPrice == null
      ? `<span class="price">$${topSeller.price}</span>`
      : ["-" + topSeller.discount + "%",
      "$" + topSeller.originalPrice,
      "$" + topSeller.price].map((price, i) => `<span class= "price 
        ${(() => {
          switch (i) {
            case 0: return "discount";
            case 1: return "strike";
            case 2: return "newPrice";
          }
        })()}"
      >${price}</span>`).join("")} 
          <button aria-label=${topSeller.isWishlisted ? "is-wish-listed" : "is-not-wish-listed"}>${topSeller.isWishlisted ? '&#x2665;&#xfe0e;' : '&#x2661;'}</button>
    </li>`).join("")}</ul>
    </article>`;
}
