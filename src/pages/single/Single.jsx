import "../single/single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../singlepost"
export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}