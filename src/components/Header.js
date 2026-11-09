function Header() {
   const { user } = steamData;
   const { icons: icon } = steamData.app;
   const { logo } = steamData.app;
   return /*html*/ `
   <div class="header flex row align-center jusitfy-between">
      <img src="${logo}">
      
      <h2>STORE</h2>
      <h2>COMMUNITY</h2>
      <h2>JUXTOPPOSED</h2>
      <h2>LIBRARY</h2>
      <h2>DOWNLOADS</h2>

      <img src="${icon.people}">
      <img src="${icon.notifications}">

      <button class="flex row">
            <img src="${user.avatar}">
            <p>${user.username}</p>
            <p>${user.walletBalance}</p>
            <img src="${icon.arrow}">
      </button>
  </div>`;
}
