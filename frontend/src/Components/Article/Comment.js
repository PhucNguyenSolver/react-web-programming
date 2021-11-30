import { useState, useEffect, useContext } from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { TrashFill, PencilSquare } from 'react-bootstrap-icons';
import { timeSince } from '../Utils/utils';
import { AppContext } from '../../context/AppProvider';
import { CommentService } from '../../services/CommentService';


export default function Comment({newsId, productId}) {
  
  const {user, isAdmin} = useContext(AppContext);
  user.avaUrl = user.imgUrl;
  const currentUser = user;
  
  const [commentItems, setCommentItems] = useState([]);
  // TODO: load data from database
  console.log('Hello all Comment: ' + newsId); 
  
  useEffect(() => {
    CommentService.getCommentById(newsId, productId)
      .then(res => { setCommentItems(res) })
      // .then(res => { console.log(res); })
  }, []);

  // Done load data from database


// const commentItems = [ // TODO: load data from API
//   { id: 1, userId: 113, content: 'hello', timestamp: "Fri Nov 05 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Sa', avaUrl : 'https://picsum.photos/200' },
//   { id: 2, userId: 113, content: 'another hello', timestamp: "Fri Nov 05 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Sa', avaUrl : 'https://picsum.photos/200' },
//   { id: 3, userId: 911, content: 'Who are you ?', timestamp: "Fri Nov 12 2021 15:00:33 GMT+0700 (Indochina Time)", 
//   name: 'Nguyễn Hữu Phúc', avaUrl : 'https://picsum.photos/300' },
// ];

  // TODO: handle in Controller
  const handleInsertComment = (content) => {
    if (user?.id) {
      CommentService.createComment(user.id, content, newsId || null, productId || null);
    } else {
      alert('Quí khách hàng vui lòng đăng nhập');
    }
    // console.log(currentUser.name);
    // console.log('[DB] Submit comment #' + content);
  };
  const handleUpdateComment = (victimId, newContent) => { 
    console.log('[DB] update comment #' + victimId + ' by ' + newContent);
  }
  const handleDeleteComment = (victimId) => {
    console.log('DB: Delete comment #' + victimId);
  };


// TODO: set currentUserId
// const currentUser = { id: 911, name: 'Nguyễn Hữu Phúc', avaUrl : 'https://picsum.photos/300' };


const ShyComment = () => {
  const [collapse, setCollapse] = useState(true);
  const editable = (acomment) => (currentUser.id === acomment.userId);
  return (<>
    <div className="comment mb-4">
      <Button className={(commentItems.length == 0) ? 'd-none' : null}
        variant={collapse ? 'primary' : 'secondary'}
        onClick={() => setCollapse(!collapse)}>
        Bình luận ({commentItems.length})
      </Button>
      <div className={'item-list ' + (collapse ? 'd-none' : null)}>
        {commentItems.map((item, index) => (
          <CommentItem key={item.id} index={index} editable={editable(item)} item={item} />)
        )}
      </div>
      <Editor onSubmit={handleInsertComment} />
    </div>
  </>);
}

const Editor = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const handleChange = (evt) => { setContent(evt.target.value); }
  const handleSubmitClick = () => {
    if (content != '') {
      onSubmit(content);
      setContent('');
    }
  }

  return (<>
    <div className="d-flex align-items-end">
      <InputGroup>
        <FormControl className="new-comment"
          onChange={handleChange}
          value={content}
          as="textarea" aria-label="With textarea"
          placeholder='Nhập bình luận' rows='3'
        />
      </InputGroup>
      <Button variant='dark' onClick={handleSubmitClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16"><path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>
      </Button>
    </div>
  </>);
}

const MiniEditor = ({ initContent, onSubmit, onCancel }) => {
  const [content, setContent] = useState(initContent);
  const handleChange = (evt) => { setContent(evt.target.value); }
  const handleSubmitClick = () => {
    if (content != '') {
      onSubmit(content);
      setContent('');
    }
  }

  return (<>
    {/* <Container fluid> */}
      <InputGroup>
        <FormControl
          onChange={handleChange}
          value={content}
          as="textarea" aria-label="With textarea"
          placeholder='Sửa bình luận' rows='2'
        />
      </InputGroup>
      <Button variant='light' onClick={handleSubmitClick}>Gửi</Button>
      <Button variant='light' onClick={onCancel}>Huỷ</Button>
    {/* </Container> */}
  </>);
}

const CommentItem = ({ index, item, editable })  => {
  const [editMode, setEditMode] = useState(false);
  const handleDeleteClick = () => { handleDeleteComment(item.id)}
  const handleEditClick = () => { setEditMode(true); }
  const handleCancelEdit = () => { setEditMode(false); }
  const handleSubmitEdit = (newContent) => {
    handleUpdateComment(item.id, newContent);
    setEditMode(false);
  }

  const [hover, setHover] = useState(false);
  const _bg = hover ? 'bg-secondary' : (index % 2 ? 'bg-white' : 'bg-light');
  return (<>
    <Container fluid className={'comment-item ' + _bg}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Row>
        <Col xs="auto">
          <div className='avatar'><img src={item.avaUrl}/></div>
        </Col>
        <Col>
          <div className='author'>{item.name}</div>
          {editMode ? 
            <MiniEditor 
              initContent={item.content} 
              onCancel={handleCancelEdit}
              onSubmit={handleSubmitEdit}
            /> :
            <>
              <div className='timestamp'>{timeSince(new Date(item.timestamp))}</div>
              <div className='content'>{item.content}</div>
            </>
          }
        </Col>
      </Row>
      <div className={'option-menu ' + (editable && hover ? '' : 'd-none')}>
        <Button variant='light' onClick={handleDeleteClick}>
          <TrashFill/>
        </Button>{' '}
        <Button variant='light' onClick={handleEditClick}>
          <PencilSquare/>
        </Button>
      </div>
    </Container>
  </>);
}

  return <ShyComment/>;
}