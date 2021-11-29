import "./ProcessBar.css";

export default function ProcessBar({curStage, setCurStage}) {
  const [DRAFT, EDIT, DONE] = ['Nháp', 'Đang chỉnh sửa', 'Đã đăng'];
  const noop = (i) => setCurStage(i);
  return (
      <div className="container">
        <div className="card">
          <div className="p-4 text-center text-white text-lg rounded-top bg-dark">
            <span className="text-uppercase fs-large">Quản lý bài viết</span>
          </div>
          <div className="card-body">
            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between pt-4 pb-0">
              <div
                className={curStage >= 1 ? "step completed" : "step"}
              > 
                <div className="step-icon-wrap">
                  <div
                    className="step-icon"
                    onClick={() => noop(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="pe-7s-light"></i>
                    
                  </div>
                </div>
                <h4 className="step-title">{DRAFT}</h4>
              </div>

              <div
                className={curStage >= 2 ? "step completed" : "step"}
              >
                <div className="step-icon-wrap">
                  <div
                    className="step-icon"
                    onClick={() => noop(2)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="pe-7s-refresh-2"></i>
                  </div>
                </div>
                <h4 className="step-title">{EDIT}</h4>
              </div>

              <div className={curStage >= 3 ? "step completed" : "step"}>
                <div className="step-icon-wrap">
                  <div
                    className="step-icon"
                    onClick={() => noop(3)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="pe-7s-check"></i>
                  </div>
                </div>
                <h4 className="step-title">{DONE}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
