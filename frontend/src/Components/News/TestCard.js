import {useState} from 'react';

export default function TestCard(props) {
  const defaultImgUrl = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";
  const imgUrl = props.imgUrl || defaultImgUrl;
  const defaultContent = {
    title: "Article title example. This should be a bit longer...",
    author: "Some one on earth",
    description: "This is a some summary with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    source: "#",
    lastModified: "01/11/2021"
  };
  const content = props.content || defaultContent;


  const [active, setActive] = useState(false);
  const hightlight = active ? " opacity-50" : "";
  return (<>
    <div class="card shadow-sm"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => console.log("Go to " + content.source)}
    >
      <img class={"card-img-top" + hightlight} src={imgUrl} alt="" />

      <div class="card-body">
        <h5 class="card-title">{content.title}</h5>
        <hr/>
        <p class="card-text">{content.description}</p>
        <p class="card-text"><small class="text-muted">{"Last updated: " + content.lastModified}</small></p>
      </div>
    </div>
  </>);
}