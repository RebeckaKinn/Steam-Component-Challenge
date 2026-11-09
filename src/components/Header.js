function Header() {
   const { user } = steamData;
   const { icons: icon } = steamData.app;
   const { logo } = steamData.app;
   const { navigation: nav } = steamData;
   return /*html*/ `
   <div class="header flex row align-center justify-between">
      <div class="flex row align-center justify-evenly gap-large">
         <img src="${logo}">
         <h3 class="highlight">${nav[0].label}</h3>
         <h3>${nav[1].label}</h3>
         <h3>${nav[2].label}</h3>
         <h3>${nav[3].label}</h3>
         <h3>${nav[4].label}</h3>
      </div>
      <div class="header-whitespace"></div>
      
      <div class="flex row align-center justify-between gap-small">
         <button class="flex row align-center justify-between">
            <img src="${icon.people}">
         </button>

         <button class="flex row align-center justify-between">
            <img src="${icon.notifications}">
         </button>

         <button class="flex row align-center justify-between">
               <img src="${user.avatar}">
               <p>${user.username}</p>
               <p>${user.walletBalance}</p>
               <img src="${icon.arrow}">
         </button>
      </div>
  </div>`;
}
