'use client'
import "./Footer.scss"
import TermsItem from "./_components/termsItem/TermsItem"
import { termsItems } from './tems';

export default function Footer() {

    return (<div>
        <hr />
        <div className="terms-container-wrapper">
            <div className="terms-container">
                {termsItems.map((terms) => {
                    return <TermsItem key={terms.title} terms={terms} />
                })}
            </div>
        </div>
        <hr />
        <div className="footer-content-wrapper">
            <div className="footer-content">
                <p className="footer-title">파밍 사업자 정보</p>
                <div className="company-info">
                    대표이사 : 최재화, 강승현   |   개인정보보호책임자 : 박병성
                    <br />
                    사업자등록번호 : 113-86-45836   |   통신판매업신고 : 2019-서울서초-1126
                    <br />
                    호스팅서비스 제공자 : Amazon Web Services (AWS)
                    <br />
                    EMAIL : help@bunjang.co.kr   |   FAX : 02-598-8241
                    <br />
                    주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층(서초동, 마제스타시티, 힐스테이트 서리풀)
                    <br />
                </div>
            </div>
            <div className="footer-content">
                <p className="footer-title">앱 다운로드</p>

                <div className="footer-button-container">
           
                 

                </div>
            </div>

        </div>
    </div>)
}