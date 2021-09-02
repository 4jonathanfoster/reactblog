import Header2 from "../../header2/Header2";
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar";
import "../home/home.css";

export default function Home() {
    return (
        <>
        <Header2 />
        <div className="home">
            <Posts/>
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
