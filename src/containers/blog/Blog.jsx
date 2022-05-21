import React from 'react'
import blogData from '../../constants/blogData';
/*const payload= BlogData.map((b) =>{ return b.payload.title})
console.log(payload);*/
/*const paragraphe= payload.map((b) =>{ return b.type})
import images from '../../constants/images';
console.log(paragraphe);*/
/*import {Article} from '../../components'
import images from '../../constants/images';*/
import {
  Link,
  useLocation 
} from "react-router-dom";
const BlogData = blogData.payload.map((blog) =>{ return blog})
console.log(BlogData)
export default function Blog(){
  return (
<QueryParamsDemo/>
  );
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function QueryParamsDemo() {
  let query = useQuery();
  console.log(query)
  return (
    <div>
      <div>
        <h2>Blog</h2>
        <ul>
          <li>
            <Link to="/Blog/account?name=Programation">gg</Link>
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

function Child({name}) {
  console.log(name);
  const articleData= BlogData.find((blog) => blog.title==name)
console.log(articleData);
if(!articleData)
  return(
    <div>hh</div>
      ) 
return 
  (
    <div>
      {articleData.payload.map((block)=> {console.log(block)})} 
    </div>
  )
}
