class Siproject extends HTMLElement {
    constructor() {
        super();
        this.itemLoad = 8;
    }

    connectedCallback() {
        const siprojectData = this.getProjectData();
        const siprojectElement = this.createProjectElement();
        this.currentIndex = parseInt(this.getAttribute('initial-item'));
        
        this.renderItems(siprojectData, siprojectElement);
        this.appendChild(siprojectElement);
    }

    getProjectData() {
        return [
            {
                company: '평화재단',
                devices: ['Web, Android, iOS'],
                title: '행복플랫폼', 
                description: '모임 및 교육후기'
            },
            {
                company: '한일팜스',
                devices: ['Web, Android(PDA)'],
                title: '업무관리시스템', 
                description: '고객사의 재고, 생산, 매출에 대한 전반적인 관리'
            },
            {
                company: 'LG',
                devices: ['Web'],
                title: '협력사 역량점검 통합관리 시스템', 
                description: '협력사의 역량 사전점검 및 데이터 시각화'
            },
            {
                company: 'LG',
                devices: ['Web'],
                title: 'Dispensing Simulator', 
                description: '설비의 가동수치를 예상 및 관리'
            },
            {
                company: '청호나이스',
                devices: ['Web, Android, iOS'],
                title: '업무관리시스템', 
                description: '고객사의 업무관리'
            },
            {
                company: 'LG',
                devices: ['Web'],
                title: '디지털 타임 체크', 
                description: '설비의 측정데이터를 관리 및 시각화'
            },
            {
                company: 'SKT',
                devices: ['Web'],
                title: 'SKT TOMARS 시스템', 
                description: 'SKT TOMARS Public Cloud전환 구축'
            },
            {
                company: 'LG',
                devices: ['Web'],
                title: '업무관리시스템', 
                description: '업무 지표 데이터 관리 및 전세계 관계사 현황 관리를 통한 생산성 제고'
            },
            {
                company: 'CJ Freshway',
                devices: ['Web','Android'],
                title: '배송기사, 피킹, 입고검수, CAPA앱', 
                description: '배송 현황 조회 및 상하차검수 등 배송에 필요한 업무용, 결품이 발생한 상품에 대한 확인 및 대응, 협력사별 상품 입고검수, CAPA 현황 조사 및 확인, 협력사 입문 시간 기록 및 입고 도크 안내용'
            },
            {
                company: '한국승강기안전관리공단',
                devices: ['Android'],
                title: '승강기 안전관리 시스템', 
                description: '승강기 검사 오더 조회/접수/업무 진행, E-Green 우편 시스템 연계, 전자서식 연계'
            },
            {
                company: 'AJ',
                devices: ['Web'],
                title: '홈케어 관리시스템',
                description: '매트리스 케어 관리 시스템으로 주문관리부터 설치, AS처리에 대한 전반적인 업무를 지원하는 시스템'
            },
            {
                company: '넥센타이어',
                devices: ['Web'],
                title: '렌탈계약시스템',
                description: '매트리스 렌탈 및 홈케어 관리 시스템'
            },
            {
                company: '현대렌탈케어',
                devices: ['Android','iOS'],
                title: 'AS관리 시스템',
                description: 'AS대상 고객리스트 관리, 전국 AS기사의 업무진행 상태 조회 및 관리 그에 따른 업무 배정 수행'
            },
            {
                company: '미래엔',
                devices: ['Android','iOS','Web'],
                title: '영업관리시스템',
                description: '영업실적의 지표 데이터 관리 및 전국의 영업대상 관리/지원 업무 향상을 통한 리스크 감소'
            },
            {
                company: '대유위니아',
                devices: ['Android','iOS', 'Web'],
                title: 'AS 업무관리시스템',
                description: 'AS대상 고객리스트 관리, 전국 AS기사의 업무진행 상태 조회 및 관리 그에 따른 업무 배정 수행'
            },
            {
                company: '에이텍',
                devices: ['Android','iOS'],
                title: 'AS관리시스템',
                description: 'AS대상 고객리스트 관리, 전국 AS기사의 업무진행 상태 조회 및 관리 그에 따른 업무 배정 수행'
            },
            {
                company: '금복주',
                devices: ['Android'],
                title: '영업 및 판촉사원 업무 시스템',
                description: '스마트폰을 통한 환경에 제약없이 영업활동 지표 및 고객관리 수행하며 판촉업무에 대한 관리 수행'
            },
            {
                company: '세아그룹',
                devices: ['Android','iOS'],
                title: '그룹웨어 시스템',
                description: 'ERP시스템과 연계하여 환경에 제약없이 관련 업무를 수행하고 관리하는 시스템으로 결재 등 다양한 기능 제공'
            },
            {
                company: '농수산식품 유통공사',
                devices: ['Android','iOS'],
                title: '급식관리시스템',
                description: '전국 초,중,고등학교의 학교급식 식자재 공급 관리 시스템으로 식자재의 발주부터 관리까지 모바일을 통하여 서비스를 지원'
            },
            {
                company: 'SPC삼립',
                devices: ['Android','iOS'],
                title: '영업 및 대리점 관리',
                description: '전국영업 및 대리점의 매출, 수익, 재고 등 다양한 관리 지표의 지원을 통한 업무 관리 시스템'
            },
            {
                company: '코웨이 미주법인',
                devices: ['Android','iOS'],
                title: '렌탈관리',
                description: '정수기 렌탈 관리 시스템으로 정수기의 관리 담당자 코디의 업무 효율성 향상'
            },
            {
                company: 'CJ프레시웨이',
                devices: ['Android','iOS'],
                title: 'e커머스시스템',
                description: '전국 지원 단위 대리점의 물류운송 관리 시스템으로 배송에 대한 전단계의 모바일 관리 및 운송 배송 기사 App을 통한 관리 운영 시스템'
            },
            {
                company: 'KC코트렐',
                devices: ['Android'],
                title: '재고관리시스템',
                description: 'ERP와 연계처리를 통한 모바일 재고관리 시스템으로 제품군에 대한 바코드 리딩을 통한 재고 운영관리'
            },
            {
                company: 'KT렌탈',
                devices: ['Android','iOS','Web'],
                title: '홈 딜리버리 시스템',
                description: '고객의 차량선택 이후 렌탈 차량에 대한 배송 및 딜리버리의 운영시스템'
            },
            {
                company: 'HSAD',
                devices: ['Android','Web'],
                title: '글로벌 웹 매장관리 시스템',
                description: '글로벌매장의 노출상품군 상황 및 그에 따른 글로벌매장 직원들간의 커뮤니티 제공을 통한 마케팅 정보 공유 지원 시스템'
            },
            {
                company: 'AJ렌트카',
                devices: ['Web'],
                title: '순회정비 서비스',
                description: '장기렌트 차량에 대한 차량 점검 및 차량관리 지원 서비스'
            },
            {
                company: '부천대학교',
                devices: ['Android','iOS'],
                title: '모바일 학사관리시스템',
                description: '부천대학교 학생, 교직원 모바일시스템으로 학사일정 및 수강신청등 학교생활에 필요한 정보관리와 교직원들의 업무에 필요한 기능을 지원하는 시스템'
            },
            {
                company: '윤선생영어',
                devices: ['Web'],
                title: '진단평가 시스템',
                description: '빅데이터를 기반으로 1:1 맞춤 진단평가 리포트 시스템'
            },
            {
                company: '포스코',
                devices: ['Android','iOS','Web'],
                title: '집진기관리 IoT플랫폼',
                description: '집진기 제어를 통한 전력소모량 감소 및 고장진단에 따른 AS 수행'
            },
            {
                company: '부스타',
                devices: ['Android','Web'],
                title: '보일러 관제 IoT시스템',
                description: '보일러 및 히트펌프의 각종 센서정보와 운영에 필요한정보를 수집 분석하여 각 상황에 따른 전력 제어를 통한 전력소모량 감소 및 고장진단에 따른 AS 수행'
            },
            {
                company: 'LG전자',
                devices: ['Web'],
                title: '금형센터 생산관제시스템',
                description: '제품생산을 위한 금형센터의 전체 업무 실시간 모니터링 : 금형설계 진행일정, 진척률 활동현황 금형 제작의 수주, 설계, 구매, 생산, 사출, 출하/이관에 대한 모니터링'
            },
            {
                company: 'LG전자',
                devices: ['Web'],
                title: '세탁기 성능시험 관리시스템',
                description: '부품관리, 시험부자재관리, 규격조건관리,성능인자 관리 등의 지표 관리와 성능시험 데이터를 수집 분석하는 시스템'
            },
            {
                company: '산켄전기',
                devices: ['Android', 'Web'],
                title: '반도체 생산 설비 관제시스템',
                description: '반도체 생산공정 모니터링 시스템'
            },
            {
                company: '코웨이',
                devices: ['Android','iOS','Web'],
                title: '나노환경센서를 통한 데이터 수집/관리',
                description: '나노환경센서의 센서 데이터를 통한 환경 지표 관리 시스템'
            },
            {
                company: '청호나이스',
                devices: ['Android','iOS'],
                title: 'IoT 모바일 플랫폼',
                description: '청호나이스 제품군의 IOT 플랫폼'
            },
            {
                company: 'CJ푸드빌',
                devices: ['Android','iOS', 'Web'],
                title: '유통물류시스템',
                description: '전국 매장관리의 물류배송 관리 시스템, 물류출발부터 전국 대리점 배송에 이르는 전단계의 차량운영 통합관리 시스템'
            },
            {
                company: 'LG화학',
                devices: ['Android','iOS', 'Web'],
                title: '위험물 운반차량관제시스템',
                description: '위험물 제품군에 대한 배송관리 시스템으로 운반 차량의 실시간 관제 및 허가 받지 않은 지역의 입출입 관리, 운행데이터의 지표관리 시스템(DTG, 스마트폰 기반의 차량관제)'
            },
            {
                company: '유성TNS',
                devices: ['Android','iOS','Web'],
                title: '물류 운송 시스템',
                description: '철강소재 제품의 선박, 열차배송과 연계된 통합적 물류 운송 관리시스템(차량실시간정보, 차량운송 배치등등)'
            },
            {
                company: '경찰청',
                devices: ['Web'],
                title: '범죄 분석 시스템',
                description: 'IBM 왓슨과 연계하여 국가지정 5대범죄에 대한 데이터 수집 및 분석을 통한 범죄분석 시스템 구축'
            },
            {
                company: '더존',
                devices: ['Web'],
                title: '경영교육 시뮬레이션',
                description: '실제 경영사례 데이터에서 도출한 경영문제와 시나리오를 기반으로 학습자들이 문제해결을 시도하고 토론하는 통합 포털 시스템'
            },
            {
                company: 'SK브로드밴드',
                devices: ['Web'],
                title: '스마트 IDC 시스템',
                description: 'IDC센터의 운영모니터링 시스템으로 IDC의 주력업무인 운영서버의 상태정보 실시간모니터링, IP모니터링, 성능테스트등의 지표관리 지원시스템'
            },
            {
                company: 'IITP',
                devices: ['Web'],
                title: '음성분석 시스템',
                description: '소방청을 통해 신고된 각종 전화의 음성을 분석하여 거짓/진실 여부를 통한 장난전화 분리 및 신고전화에 대처를 위한 각종 지표 관리 시스템'
            },
            {
                company: '에스원',
                devices: ['Web'],
                title: '기술지원 포털',
                description: '에스원 전국 단위 설치 및 운영 기사들의 업무처리 지원시스템으로 업무처리시 발생되는 각종 기술지원 관련 업무의 관리 시스템'
            },
            {
                company: 'CJ제일제당',
                devices: ['Web'],
                title: '헬프데스크',
                description: '회사생활도우미, 총무 도움방, 서비스요청, IT컨택센터 등 다양한 업무에 대한 지원 시스템'
            },
            {
                company: 'KT',
                devices: ['Web'],
                title: '위성 단말 관리 시스템',
                description: 'VOC관리, 장애관리, 개통관리를 수행하는 시스템'
            }
        ];
    }

    createProjectElement() {
        const element = document.createElement('div');
        element.className = 'case-wrap';
        return element;
    }

    createDevicesTag(devices) {
        return devices.map(device => `<span>${device}</span>`).join('');
    }

    createProjectHTML(project) {
        return `
            <article class="animate">
                <a href="#a">
                    <div class="row">
                        <div class="order-company">${project.company}
                            <p class="device">${this.createDevicesTag(project.devices)}</p>
                        </div>
                        <dl>
                            <dt>${project.title}</dt>
                            <dd>${project.description}</dd>
                        </dl>
                    </div>
                </a>
            </article>
        `;
    }

    renderItems(projectData, projectElement) {
        const visibleProject = projectData.slice(0, this.currentIndex);
        const loadMoreButton = document.querySelector('#si-apply .btn-more');
        
        projectElement.innerHTML = visibleProject.map(project => this.createProjectHTML(project)).join('');

        if (this.currentIndex < projectData.length && loadMoreButton) {
            loadMoreButton.onclick = () => {
                this.currentIndex += this.itemLoad;
                this.renderItems(projectData, projectElement);
            };
            document.querySelector('.si-inner').appendChild(loadMoreButton);
        } else if (loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    }
}

customElements.define('siproject-component', Siproject);