import './article.scss';
import { useState, useContext } from 'react';
import {AppContext} from '../../context/AppProvider';
import { post1, post2 } from './posts';
import { CustomTag } from '../Utils/Input';
import ControlledEditor from './ControlledEditor';
import Comment from './Comment';
import Aside from './Aside';

/**
 * Mock data:
 *  See: https://getbootstrap.com/docs/5.0/examples/blog/
 */

export default function Article() {
  const { isAdmin } = useContext(AppContext);
  const [inEditorMode, setInEditorMode] = useState(false);
  const handleToggleMode = () => {
    setInEditorMode(!inEditorMode);
  }

  return <>
    {isAdmin && // Toggle Control Bar
    <div class="d-flex justify-content-evenly">
      <button className="btn btn-primary my-2" onClick={handleToggleMode}>
        View/Edit
      </button>
    </div>}
    { inEditorMode ? <Editor/> : <Viewer/> }
  </>;
}


const Editor = ({handleSaveDraft, handleRetrieveDraft}) => {
  return (<>
    <div className="container-fluid container-md p-5 my-5">
    <div class="container mt-5">
    <div class="row d-flex justify-content-evenly flex-nowrap">
      <div class="col-lg-8 overflow-hidden">
        {/* Primary column */}
        <article>
          {/* Post header */}
          <header class="mb-4">
            <h1 class="fw-bolder mb-1">How Crypto Is Shaping The Digital Revolution</h1>
            <div class="text-muted fst-italic mb-2">October 20, 2021 / Mario Laul</div>
            <CustomTag value='Crypto' url='#!'/>{' '}
            <CustomTag value='Revolution' url='#!'/>
          </header>
        </article>
        <section class="mb-5 post-content bg-light h-100">
          <ControlledEditor/>
        </section>
        {/* <div className="container">
          <ControlledEditor/>
        </div> */}
      </div>
      <div class="col-lg-4">Put something in here, Maybe</div>
    </div>
    </div>
    </div>
  </>);
}

const Viewer = () => {
  return (<>
    <div className="container-fluid container-md article">
    <div class="container mt-5">
    <div class="row d-flex justify-content-evenly flex-nowrap">
      <div class="col-lg-8">
        {/* Primary column */}
        <article>
          {/* Post header */}
          <header class="mb-4">
            <h1 class="fw-bolder mb-1">How Crypto Is Shaping The Digital Revolution</h1>
            <div class="text-muted fst-italic mb-2">October 20, 2021 / Mario Laul</div>
            <CustomTag value='Crypto' url='#!'/>{' '}
            <CustomTag value='Revolution' url='#!'/>
          </header>
          {/* Preview image */}
          <figure class="mb-4">
            <img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..."/>
          </figure>
          {/* Post content */}
          <section class="mb-5 post-content">
            {post1}
          </section>
        </article>
        {/* Comments section */}
        <Comment/>
      </div>
      {/* Side widgets */}
      <div class="col-lg-4">
        <Aside/>
      </div>
    </div>
  </div>
  </div>
  </>);
}