import { useState, useEffect } from 'react'
import TestCard from "./TestCard";
import TestHeader from "./TestHeader";
import TestPagination from './TestPagination';

const imgUrlList = [
  "https://gstatic.gvn360.com/2021/11/Fortnite-Trung-Quoc-1-218x150.jpg",
  "https://gstatic.gvn360.com/2021/11/21ADL_Chip_Angle_7_Color_BKG_3000-Pixels-218x150.jpg",
  "https://gstatic.gvn360.com/2021/11/DSC8603-1-1-218x150.jpg",
  "https://gstatic.gvn360.com/2021/10/google-chrome-generic-hero-pinwheeldfb21354c07a64185610f9149b48e2d3-218x150.jpg",
  "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png",
  "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png",
  "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png",
  "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png",
  "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png"
];

const articleList = [
  {
    title: "Fortnite đóng server do chính sách game online khắc nghiệt của Trung Quốc",
    author: "Axium Fox",
    description: "Trung Quốc gần đây có những chính sách vô cùng khắc nghiệt để kìm hãm sự phát triển của game online, và nạn nhân lần này là Fortnite. Mới...",
    source: "https://gvn360.com/tin-game/fortnite-dong-server-do-chinh-sach-game-online-khac-nghiet-cua-trung-quoc-2/",
    lastModified: "01/11/2021"
  },
  {
    title: "Hiệu năng CPU đầu bảng Intel Core i9-12900K được cải thiện đến 36% nhờ tính năng Maximum Turbo",
    author: "Axium Fox",
    description: "Nhờ chế độ Maximum Turbo Power mà CPU Intel Core i9-12900K cải thiện được đến 36% hiệu năng. Bắt đầu từ CPU thế hệ 12 “Alder Lake”, Intel chia các...",
    source: "https://gvn360.com/tin-game/fortnite-dong-server-do-chinh-sach-game-online-khac-nghiet-cua-trung-quoc-2/",
    lastModified: "01/11/2021"
  },
  {
    title: "Từng chê bàn phím laptop phèn, sau vài tháng dùng mình thấy nó cũng được",
    author: "Axium Fox",
    description: "Cách đây hơn nửa năm thì mình có dùng laptop cũng phải cắm phím cơ rời mấy bạn ạ, lý do là vì bàn phím laptop gõ không sướng...",
    source: "https://gvn360.com/cong-nghe/tung-che-ban-phim-laptop-phen-sau-vai-thang-dung-minh-thay-no-cung-duoc/",
    lastModified: "01/11/2021"
  }
];


export default function News () {  
  const [activePage, setActivePage] = useState(1);

  // TODO: add wrapper container to limit view width 
  return (<>
    <div>News</div>
    <TestHeader />
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" 
        data-masonry='{"percentPosition": true }'> 
        {
          imgUrlList.map((imgUrl, index) => (
            <div class="col">
              <TestCard 
                imgUrl={imgUrl} 
                content={articleList[index]}
              />
            </div>)
          )
        }
      </div>
      <br/><br/>
      <div class="row">
        <div class="col-12">
          <TestPagination activePage={1} setActivePage={setActivePage}/>
        </div>
      </div>
    </div>
  </>)
}