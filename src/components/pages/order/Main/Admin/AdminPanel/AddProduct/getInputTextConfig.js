import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (newProduct) => [
        {
          id : "0",
          name:"title",
          value:newProduct.title,
          Icon:<FaHamburger className="icon" />,
          placeholder:"Nom du produit (ex : Super Burger)",
        },
        {
          id : "1",
          name:"imageSource",
          value:newProduct.imageSource,
          Icon:<BsFillCameraFill className="icon" />,
          placeholder:"Lien d'URL d'une image (ex : https://la-photo-de-mon-produit.png)",
        },
        {
          id : "2",
          name:"price",
          value:newProduct.price ? newProduct.price : "",
          Icon:<MdOutlineEuro className="icon" />,
          placeholder:"Prix",
        }
      
]
