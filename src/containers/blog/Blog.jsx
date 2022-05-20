import React from 'react'
import blogData from '../../constants/blogData'
/*const payload= BlogData.map((b) =>{ return b.payload.title})
console.log(payload);*/
/*const paragraphe= payload.map((b) =>{ return b.type})
import images from '../../constants/images';

console.log(paragraphe);*/
import {Article} from '../../components'
import images from '../../constants/images';
import {
  Link,
  useLocation 
} from "react-router-dom";
const BlogData = blogData.payload.map((blog) =>{ return blog})
console.log(BlogData)
const p= BlogData.find((blog) => blog.title==='Programation')
console.log(p)
const B = p.payload.map((blog) =>{ return blog})
console.log(B)
/*const v=p.payload.find(blog => blog==="blogProgramation")
console.log(v)*/
export default function Blog() {
  return (
<QueryParamsDemo/>
    
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function QueryParamsDemo() {
  let query = useQuery();
  return (
    <div>
      <div>
        <h2>Blog</h2>
        <ul>
          <li>
            <Link to="/Blog/account?name=Programation"></Link>
          </li>
          <li>
            <Link to="/Blog/account?name=Robotique"></Link>
          </li>
          <li>
            <Link to="/Blog/account?name=Devolopement"></Link>
          </li>
        </ul>
        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  console.log('gff')
  return(
    <div></div>
      ) 
    
  
}
