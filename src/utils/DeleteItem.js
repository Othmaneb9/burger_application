import axios from 'axios';

export default function DeleteItem() {
    axios.delete('src/components/fakeData/fakeMenu.js') // Je veux supprimer un element dans fakeMenu
    .then(res => console.log(res.data))
    .catch(error => console.error(error));
}
