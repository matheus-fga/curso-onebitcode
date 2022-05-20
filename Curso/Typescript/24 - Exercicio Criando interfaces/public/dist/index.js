var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Users = [];
function getGitHubUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const result = yield response.json();
        return result;
    });
}
function getGitHubUserRepos(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const result = yield response.json();
        return result;
    });
}
function loadGitHubUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const usersJSON = yield getGitHubUser(username);
        if (!usersJSON.hasOwnProperty('message')) {
            let user;
            Users.push(user = {
                id: usersJSON["id"],
                login: usersJSON["login"],
                name: usersJSON["name"],
                bio: usersJSON["bio"],
                public_repos: usersJSON["public_repos"],
                repos_url: usersJSON["repos_url"]
            });
            alert("Usuário Salvo.");
        }
        else {
            alert("Usuário não encontrado!");
        }
    });
}
function showGitHubUserInfo(username) {
    return __awaiter(this, void 0, void 0, function* () {
        let user;
        user = Users.find(user => user.login === username);
        const userReposJSON = yield getGitHubUserRepos(user.repos_url);
        let message = '';
        message += `Nome: ${user.name}\nBio: ${user.bio}\nRepositórios Publicos: ${user.public_repos}\n\n`;
        if (user.public_repos > 3) {
            message += "Repositórios:\n";
            for (let index = 0; index < 3; index++) {
                message += ` - Nome: ${userReposJSON[index].name}\n`;
                message += ` - Descrição: ${userReposJSON[index].description}\n`;
                message += ` - Fork: ${userReposJSON[index].fork ? 'Sim' : 'Não'}\n`;
                message += ` - Stars: ${userReposJSON[index].stargazers_count}\n\n`;
            }
        }
        else {
            message += "Repositórios:\n";
            userReposJSON.forEach(repo => {
                message += ` - Nome: ${repo.name}\n`;
                message += ` - Descrição: ${repo.description}\n`;
                message += ` - Fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
                message += ` - Stars: ${repo.stargazers_count}\n\n`;
            });
        }
        alert(message);
    });
}
function showAllGitHubUsers() {
    let message = '';
    Users.forEach(user => {
        message += ` - Nome: ${user.name}\n`;
        message += ` - Bio: ${user.bio}\n`;
        message += ` - Repositórios Públicos: ${user.public_repos}\n\n`;
    });
    alert(message);
}
function countGitHubUsersRepos() {
    const repos_count = Users.reduce((count, user) => count + user.public_repos, 0);
    alert(`Soma dos repositórios de todos os usuários: ${repos_count}`);
}
function top5GitHubUsersNumberOfRepos() {
    let mapped = Users.map((user, index) => {
        return { index: index, value: user.public_repos };
    });
    mapped.sort(function (a, b) {
        return b.value - a.value;
    });
    let result = mapped.map(user => Users[user.index]);
    let message = '';
    if (result.length > 4) {
        message += "TOP 5 em número de repositórios Públicos:\n";
        for (let index = 0; index < 5; index++) {
            message += `Top ${index + 1}\n`;
            message += ` - Nome: ${result[index].name}\n`;
            message += ` - Nº de Repositórios: ${result[index].public_repos}\n\n`;
        }
    }
    else {
        message += "TOP 5 em número de repositórios Públicos:\n";
        result.forEach((user, index) => {
            message += `Top ${index + 1}\n`;
            message += ` - Nome: ${user.name}\n`;
            message += ` - Nº de Repositórios: ${user.public_repos}\n\n`;
        });
    }
    alert(message);
}
