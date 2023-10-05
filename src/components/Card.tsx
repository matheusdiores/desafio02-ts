import { Center, Input } from "@chakra-ui/react"
import { MyButton } from "./MyButton/MyButton"
import { login } from "../services/login"

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = () => {
  return (
    <Center flexDirection={"column"}>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <MyButton onClick={login} titulo='Login' />
      </Center>
    </Center>
  )
}