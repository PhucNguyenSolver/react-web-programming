import './article.scss';
import {useParams} from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import {AppContext} from '../../context/AppProvider';
import { CustomTag } from '../Utils/Input';
import ControlledEditor from './ControlledEditor';
import Comment from './Comment';
import Aside from './Aside';
import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { NewsService } from "../../services/NewsService";

import rawJSON from './html3.json';
const defaultArticle = {
  // title: 'How Crypto Is Shaping The Digital Revolution',
  // title: 'Loading...',
  // imgUrl: "https://dummyimage.com/900x400/ced4da/6c757d.jpg",
  // timestamp: '20 Nov 2021',
//   author: 'Mario Laul',
//   tags: [
//     { value: 'World', url: '#!'},
//     { value: 'VR', url: '#!'},
//     { value: 'Meta', url: '#!'},
//   ],
//   content: rawJSON, // TODO: get `html` from database instead;
// }
  title: 'Loading...',
  imgUrl: "https://dummyimage.com/900x400/ced4da/6c757d.jpg",
  timestamp: '...',
  author: '...',
  tags: [],
  content: rawJSON, // TODO: get `html` from database instead;
}
const otherArticles = [1, 2, 3, 4].map((id) => (
  { ...defaultArticle, id: id, imgUrl: 'https://picsum.photos/150' }
))

/**
 * Mock data:
 *  See: https://getbootstrap.com/docs/5.0/examples/blog/
 */

export default function Article() {
  const { isAdmin } = useContext(AppContext);
  const [article, setArticle] = useState(defaultArticle);

  // TODO: Load article from DB
  const {id} = useParams();

  useEffect(() => {
    try {
        NewsService.getNewsById(id).then(res => {
          setArticle(res);
          setDraft(getInitState());
        })
    }
    catch (err) {
      console.log(err);
    }
  }, []);

  const [relatedArticles, setRelatedArticles] = useState(otherArticles);
  // Done load article from DB
  
  const [inEditorMode, setInEditorMode] = useState(false);
  const handleToggleMode = () => {
    setInEditorMode(!inEditorMode);
  }
  const getInitState = () =>{
    const contentBlock = htmlToDraft(JSON.parse(article.content));
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      return editorState;
    }
    else {
      return EditorState.createEmpty();
    }
  } 
  const [draft, setDraft] = useState(getInitState());
  useEffect(() => {
    setDraft(getInitState);
  }, [article.content]);  
  const handleSaveDraft = () => {
    if (draft === null) {
      alert('This should never happen. Draft is null');
      return;
    }
    console.log('Save draft to database');
    const newHtml = stateToHtml(draft);
    // console.log({newHtml});
    
    // Make post request
    NewsService.updateContent(id, newHtml);
  }

  return <>
    {isAdmin && // Toggle Control Bar
    <div class="d-flex justify-content-evenly">
      <button className="btn btn-primary my-2" onClick={handleToggleMode}>
        View/Edit
      </button>
      <button className="btn btn-primary my-2" onClick={handleSaveDraft}>
        Save
      </button>
    </div>}
    <Editor draft={draft} article={article} setDraft={setDraft} isVisible={inEditorMode}/>
    <Viewer draft={draft} isVisible={!inEditorMode}
      article={article} relatedArticles={relatedArticles} newsId={id}/>
  </>;
}

const stateToHtml = (_editorState) => {
  return draftToHtml(convertToRaw(_editorState.getCurrentContent()));
}

const Editor = ({isVisible, draft, setDraft, article}) => {
  const onStateChange = setDraft;

  if (!isVisible) return null;
  return (<>
    <div className="container-fluid container-md p-5 my-5">
    <div class="container mt-2">
    <div class="row d-flex justify-content-evenly flex-nowrap">
      <div class="col-lg-8 overflow-hidden">
        {/* Primary column */}
        <article>
          <PostHeader {...article}/>
          {/* Preview image */}
          <figure class="mb-4">
            <img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..."/>
          </figure>
        </article>
        {/* <Article/> */}
        <section class="mb-5">
          <ControlledEditor draft={draft} onStateChange={onStateChange}/>
        </section>
      </div>
      <div class="col-lg-4">Put something in here, Maybe</div>
    </div>
    </div>
    </div>
  </>);
}

const Viewer = ({isVisible, draft, article, relatedArticles, newsId}) => {
  if (!isVisible) return null;

  const html = stateToHtml(draft);
  return (<>
    <div className="container-fluid container-md">
    <div class="container mt-5">
    <div class="row d-flex justify-content-evenly flex-nowrap">
      <div class="col-lg-8">
        {/* Primary column */}
        <article>
          <PostHeader {...article}/>
          {/* Preview image */}
          <figure class="mb-4">
            <img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..."/>
          </figure>
          {/* Post content */}
          <section class="mb-5 post-content">
            <div dangerouslySetInnerHTML={{__html: html}} />
          </section>
        </article>
        {/* Comments section */}
        <Comment newsId={newsId}/>
      </div>
      {/* Side widgets */}
      <div class="col-lg-4">
        <Aside relatedArticles={relatedArticles}/>
      </div>
    </div>
  </div>
  </div>
  </>);
}

const PostHeader = ({title, timestamp, author, tags}) => {
  return <>
    <article>
      <header class="mb-4">
        <h1 class="fw-bolder mb-1">{title}</h1>
        <div class="text-muted fst-italic mb-2">{timestamp + " / " + author }</div>
        {tags.map(({value, url}) => (
          <CustomTag key={value} value={value} url={url}/>
        ))}
      </header>
    </article>
  </>;
}