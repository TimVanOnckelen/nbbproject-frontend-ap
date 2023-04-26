import { useState } from "react"

// Bekijk ooķ zeker https://github.com/winderickxeli/portfolio/blob/main/src/Functional/Portfolio.tsx
// Daar gebruik ik useNavigate en NavLink om een Outlet in een Outlet op te vullen.
// Zo kan je ook volledige componenten inladen.

// Het voorbeeld hieronder gebruikt een Boolean om twee componenten te wisselen
// Deze worden bewaart in een useState.

// Deze interface hebben we nodig om de componenten goed op te vullen.
interface ShowProps {
  SignBool:Boolean
  setSignBool: (SignBool: boolean) => void
}

// Dit is een functie om de Boolean te wisselen
const SwitchBool = ({SignBool, setSignBool}: ShowProps) => {
  if(SignBool)
    setSignBool(false)
  else
    setSignBool(true)
}

// Component 1
const Show1 = ({SignBool, setSignBool}: ShowProps) => {

  return(
    <>
      <button onClick={() => {SwitchBool({SignBool, setSignBool})}}>Click Here</button>
    </>
  )
}

// Component 2
const Show2 = ({SignBool, setSignBool}: ShowProps) => {

  return(
    <>
      <button onClick={() => {SwitchBool({SignBool, setSignBool})}}>No... Here!</button>
    </>
  )
}


const Login = () => {
  const [SignBool, setSignBool] = useState<boolean>(true);

  // Als SignBool true is, tonen we Show1, Anders Show2
  if(SignBool){
    return <Show1 SignBool={SignBool} setSignBool={setSignBool} />
  }
  return <Show2 SignBool={SignBool} setSignBool={setSignBool} />
}

export default Login