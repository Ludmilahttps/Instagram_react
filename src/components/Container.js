import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Storys from "./Storys"


export default function Container() {
    return (
        <div class="container">
            <div class="feed">
                <Storys />
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    )
}