import React from 'react'
import useUserStore from 'helpers/useUserStore'


const Login: React.FC = () => {
  const userStore = useUserStore()
  console.log("userStore", userStore)
  return (
    <div>
      Login
    </div>
  )
}

export default Login