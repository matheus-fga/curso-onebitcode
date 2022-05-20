interface GitHubUser {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
}

interface GitHubUserRepo {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}

const Users: GitHubUser[] = []

async function getGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const result = await response.json()
  return result
}

async function getGitHubUserRepos(url: string) {
  const response = await fetch(url)
  const result = await response.json()
  return result
}

async function loadGitHubUser(username: string) {
  const usersJSON = await getGitHubUser(username)
  if(!usersJSON.hasOwnProperty('message')) {
    let user: GitHubUser
    Users.push(
      user = {
        id: usersJSON["id"],
        login: usersJSON["login"],
        name: usersJSON["name"],
        bio: usersJSON["bio"],
        public_repos: usersJSON["public_repos"],
        repos_url: usersJSON["repos_url"]
      }
    )
    alert("Usuário Salvo.")
  } else {
    alert("Usuário não encontrado!")
  }
}

async function showGitHubUserInfo(username: string) {
  let user: GitHubUser
  user = Users.find(user => user.login === username)
  const userReposJSON = await getGitHubUserRepos(user.repos_url)
  let message: string = ''
  message += `Nome: ${user.name}\nBio: ${user.bio}\nRepositórios Publicos: ${user.public_repos}\n\n`
  
  if(user.public_repos > 3){
    message += "Repositórios:\n"
    for (let index = 0; index < 3; index++) {
      message += ` - Nome: ${userReposJSON[index].name}\n`
      message += ` - Descrição: ${userReposJSON[index].description}\n`
      message += ` - Fork: ${userReposJSON[index].fork ? 'Sim' : 'Não'}\n`
      message += ` - Stars: ${userReposJSON[index].stargazers_count}\n\n`
    }
  } else {
    message += "Repositórios:\n"
    userReposJSON.forEach(repo => {
      message += ` - Nome: ${repo.name}\n`
      message += ` - Descrição: ${repo.description}\n`
      message += ` - Fork: ${repo.fork ? 'Sim' : 'Não'}\n`
      message += ` - Stars: ${repo.stargazers_count}\n\n`
    });
  }
  
  alert(message)
}

function showAllGitHubUsers() {
  let message: string = ''
  Users.forEach(user => {
    message += ` - Nome: ${user.name}\n`
    message += ` - Bio: ${user.bio}\n`
    message += ` - Repositórios Públicos: ${user.public_repos}\n\n`
  });
  
  alert(message)
}

function countGitHubUsersRepos() {
  const repos_count = Users.reduce((count, user) => count + user.public_repos, 0);

  alert(`Soma dos repositórios de todos os usuários: ${repos_count}`)
}

function top5GitHubUsersNumberOfRepos() {
  let mapped = Users.map((user, index) => {
    return { index: index, value: user.public_repos }
  })

  mapped.sort(function (a, b) {
    return b.value - a.value
  });

  let result = mapped.map(user => Users[user.index])

  let message: string = ''
  if(result.length > 4){
    message += "TOP 5 em número de repositórios Públicos:\n"
    for (let index = 0; index < 5; index++) {
      message += `Top ${index + 1}\n`
      message += ` - Nome: ${result[index].name}\n`
      message += ` - Nº de Repositórios: ${result[index].public_repos}\n\n`
    }
  } else {
    message += "TOP 5 em número de repositórios Públicos:\n"
    result.forEach((user, index) => {
      message += `Top ${index + 1}\n`
      message += ` - Nome: ${user.name}\n`
      message += ` - Nº de Repositórios: ${user.public_repos}\n\n`
    });
  }
  
  alert(message)
}
