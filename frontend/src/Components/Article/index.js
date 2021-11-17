import Comment from './Comment/Comment';
// import 
export default function Article() {
  return (<>
    <div className="container-fluid container-md article">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <h1>Main content</h1>
          <Comment/>
        </div>
        <div className="col-0 col-lg-3 col-xl-2">
          <h1>Banner</h1>
          {/* <Comment/> */}
        </div>
      </div>
    </div>
  </>);
}