// axios
// JQuery
// fetch
// XMLHttpRequest

fetch("https://reqres.in/api/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.data);
    const html = res.data
      .map((user) => {
        return `
        <div class="user">
          <img src="${user.avatar}" alt="${user.first_name}"/>
          <p>Name ${user.first_name} ${user.last_name}</p>
          <p>Email: ${user.email}</p>
        </div>
        `;
      }).join("");
    document.querySelector(".app").insertAdjacentHTML("afterbegin", html);
  })
  .catch((err) => {
    console.log(err);
  });
