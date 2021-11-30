export default function Footer() { // TODO: add footer
	return (
		<footer class="text-center text-lg-start bg-dark text-light py-4">
			<div class="container">
				<div class ="row justify-content-between">
					<div class="col-md-6 col-sm-10 col-10">
						<h5>Công ty TNHH thương mại ABC</h5>
						<p>ABC là doanh nghiệp chuyên cung cấp thiết bị, giải pháp về máy tính, thiết bị chơi game,
							thiết bị công nghệ cao cấp hàng đầu Việt Nam.
						</p>
						<p>Địa chỉ:
							<ul>
								<li>78-80-82 Hoàng Hoa Thám, phường 12, quận Tân Bình, TP.HCM</li>
								<li>37 ngõ 121 Thái Hà, phường Trung Liệt, quận Đống Đa, Hà Nội</li>
							</ul>
						</p>
					</div>
					<div class="col-12 col-md-6">
						<div class="row d-flex justify-content-between">
							{/* <div class="col-md-6"> */}
							<div class="col-6 col-md-auto">
								<h6>SITE MAP</h6>
								<p>
									<ul>
										<li>Trang chủ</li>
										<li>Giới thiệu</li>
										<li>Sản phẩm</li>
										<li>Blogs</li>
									</ul>
								</p>
							</div>
							{/* <div class="col-md-6"> */}
							<div class="col-6 col-md-auto">
								<h6>VỀ ABC</h6>
								<p>
									<ul>
										<li>Giới thiệu về ABC</li>
										<li>Tuyển dụng Cộng tác viên</li>
										<li>Điều khoản sử dụng</li>
										<li>Chính sách bảo mật</li>
									</ul>
								</p>
							</div>
						</div>
						<div class="row p-0">
							<h6>Kết nối với chúng tôi</h6>
            			</div>
						<div class="row d-flex justify-content-between align-items-start">
              <div class="col-6 col-md-auto">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
								</svg> abc@gmail.com
              </div>
              <div class="col-6 col-md-auto">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
								</svg> 0123 456 789
							</div>
              <div class="col-12 col-md-auto">
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(18,152,245)" class="bi bi-facebook m-2" viewBox="0 0 16 16">
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
									</svg>

									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(255,0,0)" class="bi bi-youtube m-2" viewBox="0 0 16 16">
									<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
									</svg>
									
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(17,154,251)" class="bi bi-twitter m-2" viewBox="0 0 16 16">
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
									</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}