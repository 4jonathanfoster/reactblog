import Header2 from "../../components/header2/Header2";
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar";
import "../home/home.css";

export default function Home() {
    return (
        <>
        <Header2 />
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
