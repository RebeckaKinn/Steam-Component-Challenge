function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = /*HTML*/ `
    ${Header()}

    <main>
      ${TopSellers()}
      ${RecentlyUpdated()}
      ${UnderFive()}
    </main>
  `;
}

renderApp();
