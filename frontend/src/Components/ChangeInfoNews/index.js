import { useState, useEffect } from "react";
import { NewsEditor } from "./NewsEditor";
import { NewsService } from "../../services/NewsService";
import { Badge, Button } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

  // TODO: temporary mock tags data
  const tagOptionList = [
    { id: '2', name: 'Android' },
    { id: '3', name: 'Crypto' },
  ];

export default function ChangeInfoNews() {
  console.log('refreshed');
  const [toggle, setToggle] = useState(true);
  const reload = () => { setToggle(!toggle); }
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // console.log('Hello all');
    NewsService.getAll().then(res => {
      setNewsList(res);
    });
  }, [toggle]);

  const AddNews = () => {
    const [isEditorVisible, setIsEditorVisible] = useState(false)  
    return <div className='container px-0 my-2 mx-0'>
        <Button className='btn-secondary d-flex align-items-center' 
          onClick={() => setIsEditorVisible(true)}>
          Thêm bài viết
          <PlusLg size={25} fontWeight={800} className='ms-1' />
        </Button>
        {isEditorVisible && 
        <NewsEditor show={isEditorVisible} mode='add'
          onHide={() => {
            setIsEditorVisible(false);
            reload();
          }}
        />}
    </div>
  }

  function EditNews({ news }) {
    const [editorVisible, setEditorVisible] = useState(false);
    const showEditor = () => setEditorVisible(true);
    return (
      <>
      {editorVisible && 
      <NewsEditor mode={'edit'} id={news.id}
        show={editorVisible} onHide={() => {
          setEditorVisible(false);
          reload();
        }}
      />}
        <tr>
          <td onClick={showEditor} style={{ cursor: "pointer" }}>
            {news.id}
          </td>
          <td onClick={showEditor} style={{ cursor: "pointer" }}>
            {/* {new Date(news.timestamp).toLocaleDateString()} */}
            {news.title}
          </td>
          <td onClick={showEditor} style={{ textAlign: "right" }} >
            {/* tagslist */}
            {/* {news.tags.map((id) => ( TODO */ }
            {tagOptionList.map(({id, name}) => (
              <Badge key={id + '_' + news.id} className='align-items-center me-1 bg-dark'>
                  <span className="overflow-hidden me-1">{name}</span>
              </Badge>
            ))}
          </td>
          <td style={{ textAlign: "center", width: '10rem' }}>
            <button
              class="btn btn-sm btn-outline-primary"
              onClick={() => window.location.href=`article/${news.id}`}
            >Đến bài viết &gt;
            </button>
          </td>
        </tr>
      </>
    );
  }

  return (
    <div class="container">
      <div class="container mt-5 ">
        <div class="d-flex justify-content-end">
          <AddNews/>
        </div>
        <div class="table-responsive rounded-3">
          <table class="table table-striped table-sm table-hover">
            <thead class="bg-primary align-items-center text-white p-3">
              <tr>
                <th scope="col" style={{ width: '3rem' }}>#</th>
                <th scope="col" style={{ textAlign: "left" }}>Tiêu đề</th>
                <th scope="col" style={{ textAlign: "right" }}>Danh mục</th>
                <th scope="col" style={{ textAlign: "center" }}>Điều khiển</th>
              </tr>
            </thead>
            <tbody id="list-news">
              {newsList.map(news => {
                return <EditNews key={news.id} news={news} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
