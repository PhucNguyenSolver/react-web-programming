import {useState} from 'react';

export default function TestCard(props) {
  // TODO: fix bug overflow (useEffect)
  const defaultItem = {
    // imgUrl: "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png",
    imgUrl: `https://picsum.photos/seed/pho${props.item.id}ne/300/200`,
    title: "Article title example. This should be a bit longer...",
    author: "Some one on earth",
    description: "This is a some summary with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    source: "#",
    lastModified: "01/11/2021"
  };

  const item = props.item || defaultItem;
  item.imgUrl = item.imgUrl || defaultItem.imgUrl;
  item.title = item.title || defaultItem.title;
  item.description = item.description || defaultItem.description;

  const [active, setActive] = useState(false);
  const hightlight = active ? " opacity-50" : "";
  return (<>
    <div class="card shadow-sm m-2 m-md-2 m-lg-3 mx-xl-5"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => console.log("Go to " + item.source)}
    >
      <img class={"card-img-top" + hightlight} src={item.imgUrl} alt="" />

      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <hr/>
        <p class="card-text">{item.description}</p>
        <p class="card-text"><small class="text-muted">{"Last updated: " + item.lastModified}</small></p>
      </div>
    </div>
  </>);
}