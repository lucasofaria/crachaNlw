const linksSocialMedia = {
  github: 'lucasofaria',
  youtube: 'UCnl5V2JxJkgvP4ETMcfOhtQ',
  facebook: 'profile.php?id=100000973919106',
  instagram: 'lucas.oli_',
  twitter: 'lucas_oli'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
