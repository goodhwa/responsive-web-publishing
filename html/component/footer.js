class Footer extends HTMLElement {
    connectedCallback() {
        const footerElement = document.createElement('footer');
        footerElement.id = 'footer';
        footerElement.innerHTML = `
            <button class="btn-top"><i class="xi-long-arrow-up"></i>TOP</button>
            <div class="footer-inner">
                <div class="footer-company">
                    <div>
                        <p>상호 : (주)트리포스</p>
                        <p>대표 : 서형호</p>
                        <p>사업자등록번호 : 220-86-64863 </p>
                        <p>전화번호 : 02-3432-7723</p>
                    </div>
                    <p><a href="privacy.html">개인정보처리방침</a></p>
                </div>
                <address>
                    경기도 성남시 수정구 창업로 43, A동 906호, C동 401~403호 (창업로, 판교글로벌비즈센터)<br>
                    지번주소 : 경기도 성남시 수정구 시흥동 340 판교글로벌비즈센터 A동 906호
                </address>
                <p class="copyright">ⓒTRIPHOS Corp. all rights reserved.</p>
            </div>
        `;
        this.appendChild(footerElement);
    }
}

customElements.define('footer-component', Footer);