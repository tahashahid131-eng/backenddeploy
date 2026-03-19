require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
  "login": "tahashahid131-eng",
  "id": 244837542,
  "node_id": "U_kgDODpfspg",
  "avatar_url": "https://avatars.githubusercontent.com/u/244837542?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tahashahid131-eng",
  "html_url": "https://github.com/tahashahid131-eng",
  "followers_url": "https://api.github.com/users/tahashahid131-eng/followers",
  "following_url": "https://api.github.com/users/tahashahid131-eng/following{/other_user}",
  "gists_url": "https://api.github.com/users/tahashahid131-eng/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tahashahid131-eng/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tahashahid131-eng/subscriptions",
  "organizations_url": "https://api.github.com/users/tahashahid131-eng/orgs",
  "repos_url": "https://api.github.com/users/tahashahid131-eng/repos",
  "events_url": "https://api.github.com/users/tahashahid131-eng/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tahashahid131-eng/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-11-18T22:54:38Z",
  "updated_at": "2025-11-19T00:23:49Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/x',(req, res) =>{
    res.send('being_jinu')
})
app.get('/login',(req, res)=>{
    res.send('<h1>please login at chai aur code </h1>')
})
app.get('/youtube',(req, res)=>{
    res.send('<h2> chai aur code </h2>')
})
app.get('/github',(req ,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})