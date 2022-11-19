export const checkEmailFormat = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
}

export const checkLengthPassword = (password) => {
    if (password.length < 6)
        return false
    return true
}