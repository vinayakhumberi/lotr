import Home from '../views/Home/Home';
import Books from '../views/Books/Books';
import Movies from '../views/Movies/Movies';
import Characters from '../views/Characters/Characters';

const routes = [
  {
    path: "/books",
    component: Books,
    id: "123"
  },
  {
    path: "/movies",
    component: Movies,
    id: "234"
  },
  {
    path: "/characters",
    component: Characters,
    id: "345"
  },
  {
    path: "/",
    component: Home,
    id: "456"
  }
];

export default routes;
