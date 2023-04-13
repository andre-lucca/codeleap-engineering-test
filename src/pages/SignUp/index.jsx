import { useState } from 'react'

import style from './style.module.css'

export function SignUp() {
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const isEnterButtonDisabled = !Boolean(usernameInputValue)

  const handleUsernameInputChange = (inputValue) => {
    setUsernameInputValue(inputValue)
  }

  const handleEnterClick = (event) => {
    event.preventDefault()
  }

  return (
    <div className={style.signUpContainer}>
      <form className={style.signUpForm} onSubmit={handleEnterClick}>
        <h2>Welcome to CodeLeap network!</h2>
        <label htmlFor="username">Please enter your username</label>
        <input
          id="username"
          type="text"
          placeholder="John doe"
          value={usernameInputValue}
          onChange={({ target }) => handleUsernameInputChange(target.value)}
        />
        <button type="submit" disabled={isEnterButtonDisabled}>Enter</button>
      </form>
    </div>
  )
}