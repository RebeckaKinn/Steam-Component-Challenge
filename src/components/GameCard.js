const { topSellers } = steamData;
function TopSellers() {
  return `
  <h1>Top Sellers</h1>
  <article aria-label="top-sellers">
  <ul>${topSellers.map(topSeller => /*HTML*/
    `<li>
      <img src=${topSeller.image} alt=""> 
      <h2>${topSeller.title}</h2>
        ${topSeller.platform === "windows"
      ? `svgsakWindow`
      : `svgsak2`} 
        ${topSeller.originalPrice == null
      ? `<span>${topSeller.price}</span>`
      : ["-" + topSeller.discount + "%",
      "$" + topSeller.originalPrice,
      "$" + topSeller.price].map((price,i) => `<span class=
        ${(() => {
          switch (i) {
            case 0: return "discount";
            case 1: return "strike";
            case 2: return "newPrice";
          }
        })()}
      >${price}</span>`).join("")} 
          <button>${topSeller.isWishlisted ? '&#x2665;&#xfe0e;' : '&#x2661;'}</button>
      </p>
    </li>`).join("")}</ul>
    </article>`;
}
