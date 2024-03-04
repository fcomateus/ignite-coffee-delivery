import { createContext } from "react";

interface Wish {
  title: string
  imagePath: string
  price: number
}

interface WishesContextType {
  wishes: Wish[]
}