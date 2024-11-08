
document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Abhishek" && password === "1234") {
        document.getElementById("login-panel").style.display = "none";
        document.getElementById("dashboard-panel").style.display = "block";
        document.getElementById("user-name").innerText = username;
    } else {
        alert("Invalid login details.");
    }
});

async function fetchGitHubUsers() {
    const response = await fetch("https://github.com/SHIVANI2005350/cse.git");
    const users = await response.json();
    const userList = users.slice(0, 10); 
    displayUsers(userList);
}

function displayUsers(users) {
    const userListEl = document.getElementById("user-list");
    userListEl.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = user.html_url;
        link.target = "_blank";
        link.innerText = user.login;
        listItem.appendChild(link);
        userListEl.appendChild(listItem);
    });
}
document.getElementById("sort-dropdown").addEventListener("change", function() {
    if (this.value === "alphabetical") {
        const userItems = Array.from(document.querySelectorAll("#user-list li"));
        userItems.sort((a, b) => a.innerText.localeCompare(b.innerText));
        const userListEl = document.getElementById("user-list");
        userListEl.innerHTML = "";
        userItems.forEach(item => userListEl.appendChild(item));
    }
});


document.getElementById("fetch-users").addEventListener("click", fetchGitHubUsers);
document.getElementById("logout-button").addEventListener("click", function() {
    document.getElementById("dashboard-panel").style.display = "none";
    document.getElementById("login-panel").style.display = "block";
});
