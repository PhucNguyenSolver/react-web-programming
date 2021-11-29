import React from 'react';
import { CustomTag } from '../Utils/Input';

/**
 * Mock data for Article & Other articles
 */
// const article = {
//   title: 'Another article title example etc',
//   tags: [
//     { value: 'World', url: '#!'},
//     { value: 'VR', url: '#!'},
//     { value: 'Meta', url: '#!'},
//   ],
//   author: 'Alen',
//   timestamp: '20 Nov 2021',
//   imgUrl: 'https://picsum.photos/150',
// }

// const otherArticles = [1, 2, 3, 4].map((id) => (
//   { ...article, id: id }
// ))

export default function Aside({relatedArticles}) {
  const otherArticles = relatedArticles;
  return (<>
    {/* Search widget */}
    <div class="card mb-4">
      <div class="card-header">Search</div>
      <div class="card-body">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..."
            aria-describedby="button-search"/>
          <button class="btn btn-primary" id="button-search" type="button">Go!</button>
        </div>
      </div>
    </div>
    {/* Categories widget */}
    <div class="card mb-4">
      <div class="card-header">Categories</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#!">Web Design</a></li>
              <li><a href="#!">HTML</a></li>
              <li><a href="#!">Freebies</a></li>
            </ul>
          </div>
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#!">JavaScript</a></li>
              <li><a href="#!">CSS</a></li>
              <li><a href="#!">Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Related Articles */}
    {otherArticles.map(({id, title, author, tags, timestamp, imgUrl}) => (
      <div key={id} class="card flex-md-row my-1 box-shadow h-md-250 mb-3">
        <MoreArticle 
          title={title} author={author} tags={tags} timestamp={timestamp} imgUrl={imgUrl}
        />
      </div>
    ))}
  </>);
}

const MoreArticle = ({title, tags, timestamp, imgUrl}) => {
  return (<>
    <div class="card-body d-flex flex-column align-items-start">
      <h4>
        <a class="text-dark" href="#">{title}</a>
      </h4>
      <div class="mb-1 text-muted">{timestamp}</div>
      <div>
        {tags.map(({value, url}) => (
          <CustomTag key={value} url={url} value={value}/>
        ))}
      </div>
    </div>
    <img src={imgUrl} alt="Thumbnail" className="card-img-left flex-auto d-none d-md-block mw-100"/>
    {/* TODO: what if we pass in larger image */}
  </>);
};