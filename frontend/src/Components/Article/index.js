import Comment from './Comment';
import './article.scss';
import { post1, post2 } from './posts';
import Aside from './Aside';

export default function Article() {
  return (<>
    <div className="container-fluid container-md article">
    <div class="container mt-5">
    <div class="row d-flex justify-content-evenly">
      <div class="col-lg-7">
        {/* Primary column */}
        <article>
          {/* Post header */}
          <header class="mb-4">
            <h1 class="fw-bolder mb-1">How Crypto Is Shaping The Digital Revolution</h1>
            <div class="text-muted fst-italic mb-2">October 20, 2021 / Mario Laul</div>
            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Crypto</a>{' '}
            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Revolution</a>
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
      <div class="col-lg-3">
        <Aside/>
      </div>
    </div>
  </div>
  </div>
  </>);
}