class Header extends HTMLElement {
    connectedCallback() {
        const headerElement = document.createElement('header');
        headerElement.id = 'header';
        headerElement.className = 'active';
        headerElement.innerHTML = `
            <div class="header-wrap">
                <h1 class="logo"><a href="index.html">triphos</a></h1>
                <nav class="gnb">
                    <ul>
                        <li><a href="junryeong.html">사업영역</a>
                            <ul class="depth2">
                                <li><a href="junryeong.html">솔루션&플랫폼</a></li>
                                <li><a href="si.html">시스템 구축</a></li>
                                <li><a href="app.html">앱 개발</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">회사소개</a>
                            <ul class="depth2">
                                <li><a href="about.html">소개</a></li>
                                <li><a href="about.html#history">연혁</a></li>
                                <li><a href="about.html#client">고객사</a></li>
                                <li><a href="about.html#intelle">지적재산권</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">문의하기</a>
                            <ul class="depth2">
                                <li><a href="contact.html#contact">문의하기</a></li>
                                <li><a href="contact.html#map">오시는길</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <a class="btn-menuall"><span></span></a>
            </div>
        `;
        this.appendChild(headerElement);
    }
}

customElements.define('header-component', Header);