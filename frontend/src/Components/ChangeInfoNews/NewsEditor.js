import "./admin.scss";
import { Modal, Button, Form, Badge } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { PlusLg, Pencil, XLg, Trash } from "react-bootstrap-icons"
import { AppContext } from "../../context/AppProvider";
import { NewsService } from "../../services/NewsService";

const tagOptionList = [
  { id: '1', name: 'Tech' },
  { id: '2', name: 'Android' },
  { id: '3', name: 'Crypto' },
  { id: '4', name: 'CSS' },
];

export function NewsEditor({ show, onHide, mode, id }) {
    console.log('Open news editor: ' + id);
    const {user} = useContext(AppContext);
    const getInitInfo = () => {
      return {
        title: '',
        imgUrl: '',
        description: '',
        tags: [],
      }
    };
    const [basicInfo, setBasicInfo] = useState(getInitInfo());
    
    const fetchBasicInfo = async () => {
      const res = await NewsService.getNewsById(id);
      console.log('Hello sa');
      console.log(res);
      const { title, imgUrl, timestamp, author } = res;
      const updatedInfo = {
        ...basicInfo,
        title: title,
        imgUrl: imgUrl,
        // description: description,
        // timestamp: timestamp,
        // author: author,
      };
      setBasicInfo(updatedInfo);
      console.log({basicInfo});
    }

    useEffect(() => {
      if (mode === 'edit') {
        // initEditMode
        fetchBasicInfo();
      } else {
        // initAddMode TODO: get tags list from DB
      }
    }, []);

    const tags = basicInfo.tags;
    const setTags = (newTags) => {
      setBasicInfo({ ...basicInfo, tags: newTags});
    }

    const addTag = (newTagId) => {
      let newTags = tags.filter(id => id != newTagId);
      newTags = [...newTags, newTagId];
      setTags(newTags);
    }

    const deleteTag = (victimId) => {
        setTags(tags.filter(tagId => tagId !== victimId));
    }

    const resetState = () => {
      setBasicInfo(getInitInfo());
    }

    const addNews = () => {
        console.log('TODO: add news');
        NewsService.createNews(basicInfo.title, basicInfo.imgUrl, user.id);
        resetState();
        onHide();
    }
    const editNews = () => {
      console.log('TODO: edit news');
      NewsService.updateBasicInfo(id, basicInfo.title, basicInfo.imgUrl)
      resetState();
      onHide();
    }

    const deleteNews = () => {
        let deleteConfirm = window.confirm("Are you sure about that ?")
        // if(deleteConfirm) NewsService.deleteNews(id).then(response => {
        //     alert(response.data.msg)
        // })
        onHide();
    }

    return <Modal size='lg' centered show={show} onHide={onHide} scrollable>
        <Modal.Header closeButton>
            <Modal.Title>{mode === 'add' ? 'Thêm bài viết' : 'Chỉnh sửa'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control tags='text' placeholder={'Title'} value={basicInfo.title}
                        onChange={e => setBasicInfo({ ...basicInfo, title: e.target.value })} />
                </Form.Group>

                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control placeholder={'Description'} as='textarea' value={basicInfo.description}
                        onChange={e => setBasicInfo({ ...basicInfo, description: e.target.value })} />
                </Form.Group>

                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Link ảnh</Form.Label>
                    <Form.Control placeholder={'URL'} tags='text' value={basicInfo.imgUrl}
                        onChange={e => setBasicInfo({ ...basicInfo, imgUrl: e.target.value })} />
                </Form.Group>

                <Form.Group className='col-12 mb-1'>
                    <Form.Label>Danh mục</Form.Label>
                    <Form.Select
                      defaultValue='default'
                      onChange={e => {
                        addTag(e.target.value);
                        e.target.value = 'default';
                      }}
                    >
                        <option key='default' id='default' value='default'>
                          Lựa chọn danh mục
                        </option>
                        {tagOptionList.map(({id, name}) => (
                          <option key={id} value={id}>{name}</option>
                        ))}
                    </Form.Select>
                    <TextList list={tags} deleteItem={deleteTag} />
                </Form.Group>
            </div>
        </Modal.Body>

        <Modal.Footer className='justify-content-between p-1'>
            <Button className={'d-flex align-items-center btn-info'}
                onClick={mode === 'add' ? onHide : deleteNews}>
                {mode === 'add' ? 'Huỷ' : 'Xoá bài viết'}
                {mode === 'add' ? null
                    : <Trash size={16} fontWeight={800} className='ms-2' />}
            </Button>
            <Button className='d-flex align-items-center'
                onClick={mode === 'add' ? addNews : editNews}>
                {mode === 'add' ? 'Thêm' : 'Chỉnh sửa'}
                {mode === 'add' ? <PlusLg size={20} fontWeight={800} className='ms-1' />
                    : <Pencil size={16} fontWeight={800} className='ms-2' />}
            </Button>
        </Modal.Footer>
    </Modal>
}

const getTagNameById = (id) => {
  return tagOptionList.find(tag => tag.id === id).name;
}

function TextList({list, deleteItem}) {
  return (!list.length) ? null : <div className="my-3">
    <div className='d-flex align-items-center'>
      {list.map((id) => (
        <Badge key={id} className='d-flex align-items-center me-1'>
            <span className="overflow-hidden me-1">{getTagNameById(id)}</span>
            <XLg  className='hoverable' onClick={() => deleteItem(id)}/>
        </Badge>
      ))}
    </div>
  </div>
}