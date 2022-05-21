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
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export default function Blog() {
  return (

    <QueryParamsDemo />

  );
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function QueryParamsDemo() {
  let query = useQuery();
  console.log(query.get("name"))
  return (
    <div>
      <div>
        <h2>Blog</h2>
        <ul>
          <li>
            <Link to="/Blog?name=Programation">programation</Link>
          </li>
          <li>
            <Link to="/Blog?name=Robotique"></Link>
          </li>
          <li>
            <Link to="/Blog?name=Devolopement"></Link>
          </li>
        </ul>
        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  console.log(name);
  const BlogData = blogData.payload.map((blog) => { return blog })
  console.log(BlogData)
  const articleData = BlogData.find((blog) => blog.title == name)
  console.log(articleData);
  if (!articleData) {
    return (
      <div>hh</div>
    )
  }
  console.log('gg')
  return(
    <div>
      {articleData.payload.map((block) => { 
        console.log(block)
        return block.payload()
      })}
    </div>
  )
}
