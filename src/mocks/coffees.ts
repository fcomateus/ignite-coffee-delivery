import expresso from '../assets/expresso.png'
import americano from '../assets/americano.png'
import expressoCremoso from '../assets/expresso_cremoso.png'
import expressoGelado from '../assets/expresso_gelado.png'
import cafeComLeite from '../assets/cafe_com_leite.png'
import latte from '../assets/latte.png'
import cappucino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import chocolateQuente from '../assets/chocolate_quente.png'
import cubano from '../assets/cubano.png'
import havaino from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const coffeeMock = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    tags: ['Tradicional'],
    imagePath: expresso,
    imageDescription: 'Expresso tradicional'
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    tags: ['Tradicional'],
    imagePath: americano,
    imageDescription: 'Expresso americano'
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    tags: ['Tradicional'],
    imagePath: expressoCremoso,
    imageDescription: 'Expresso cremoso'
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    tags: ['Tradicional', 'Gelado'],
    imagePath: expressoGelado,
    imageDescription: 'Expresso gelado'
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    tags: ['Tradicional', 'Com leite'],
    imagePath: cafeComLeite,
    imageDescription: 'Café com leite'
  },
  {
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    tags: ['Tradicional', 'Com leite'],
    imagePath: latte,
    imageDescription: 'Café latte'
  },
  {
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    tags: ['Tradicional', 'Com leite'],
    imagePath: cappucino,
    imageDescription: 'Capuccino'
  },
  {
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    tags: ['Tradicional', 'Com leite'],
    imagePath: macchiato,
    imageDescription: 'Café macchiato'
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    tags: ['Tradicional', 'Com leite'],
    imagePath: mocaccino,
    imageDescription: 'Café mocaccino'
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    tags: ['Especial', 'Com leite'],
    imagePath: chocolateQuente,
    imageDescription: 'Chocolate quente'
  },
  {
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    imagePath: cubano,
    imageDescription: 'Café cubano'
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    tags: ['Especial'],
    imagePath: havaino,
    imageDescription: 'Café havaiano'
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    tags: ['Especial'],
    imagePath: arabe,
    imageDescription: 'Café árabe'
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
    price: 9.90,
    tags: ['Especial', 'Alcóolico'],
    imagePath: irlandes,
    imageDescription: 'Café irlandês'
  }
]