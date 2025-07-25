import Card from "../card/Card";
import logo from '../../assets/img/my_photo.png';
import '../../styles/Common.css';

function Home() {
    return (
        <div className="section-container">
            <Card
                imagePath={logo}
                title="김 우 성"
                content={[
                    "학력 : 국가평생교육진흥원 학점은행",  
                    "전공 : 컴퓨터공학과",
                    "학위 : 학사"
                ]}
            />
        </div>
    );
}

export default Home;