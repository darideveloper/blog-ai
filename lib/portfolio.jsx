const api = "https://daridev-portfolio.herokuapp.com"

export async function getToken() {

  // Generate token
  let formdata = new FormData()
  formdata.append("username", process.env.PORTFOLIO_USERNAME)
  formdata.append("password", process.env.PORTFOLIO_PASSWORD)

  // Get Token with username and password
  const res = await fetch(`${api}/api-token-auth/`, {
    method: 'POST',
    body: formdata,
  })
  const json = await res.json()
  const token = json.token

  return token
}

export async function getContacts() {

  // Get token
  const token = await getToken()

  // Get contacts
  const res = await fetch(`${api}/contacts/`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${token}`
    }
  })
  const json = await res.json()
  const result = json.results

  return result
}