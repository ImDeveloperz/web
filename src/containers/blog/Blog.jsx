import React from 'react'
import blogData from '../../constants/blogData'
/*const payload= BlogData.map((b) =>{ return b.payload.title})
console.log(payload);*/
/*const paragraphe= payload.map((b) =>{ return b.type})

console.log(paragraphe);*/
import {Article} from '../../components'
import {
  Link,
  useLocation 
} from "react-router-dom";
const BlogData = blogData.payload.map((blog) =>{ return blog})
console.log(BlogData)
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
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/Blog/account?name=Programation">Programation</Link>
          </li>
          <li>
            <Link to="/Blog/account?name=Robotique">Robotique</Link>
          </li>
          <li>
            <Link to="/Blog/account?name=Devolopement">Devolopement</Link>
          </li>
        </ul>
        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
<div className="child">
  <Article />
</div>
   /* <div>
   {name ? (
            /*<Paragraphe content={}/>
      ) : (
        <h3>There is no name in the query string</h3>
      ) 
    </div> */
  
}
