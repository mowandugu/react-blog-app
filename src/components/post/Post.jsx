import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img src="https://images.unsplash.com/photo-1651488263698-6c95dd622fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="postImg"/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quia culpa possimus maiores cumque! 
        Totam, iusto aperiam? Eveniet corporis quam 
        autem delectus, ut, natus quaerat dicta, necessitatibus 
        dolor facilis laudantium deserunt.
      </p>
    </div>
  )
}