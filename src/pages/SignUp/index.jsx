import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import style from './style.module.css'

export function SignUp() {
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const isEnterButtonDisabled = usernameInputValue.replaceAll(' ', '') === ''
  const navigateTo = useNavigate()

  const handleUsernameInputChange = (inputValue) => {
    setUsernameInputValue(inputValue)
  }

  const handleEnterClick = (event) => {
    event.preventDefault()

    localStorage.setItem('username', usernameInputValue.replaceAll(' ', ''))
    navigateTo('/home')
  }

  const warnEmptyInput = () => (isEnterButtonDisabled ? style.warnLabel : '')

  return (
    <div className={style.signUpContainer}>
      <form className={style.signUpForm} onSubmit={handleEnterClick}>
        <h2>Welcome to CodeLeap network!</h2>
        <label className={warnEmptyInput()} htmlFor="username">Please enter your username</label>
        <input
          id="username"
          type="text"
          placeholder="John doe"
          value={usernameInputValue}
          onChange={({ target }) => handleUsernameInputChange(target.value)}
        />
        <button
          type="submit"
          disabled={isEnterButtonDisabled}
        >
          Enter
        </button>
      </form>
    </div>
  )
}