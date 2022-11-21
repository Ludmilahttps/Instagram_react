import Bottombar from "./Bottombar"
import Container  from "./Container"
import Topbar from "./Topbar"

//Componente = funcao que retorna um JSX(Layout)
export default function App() {
    return (
        <div className="aux">
            <Topbar />
            <Container/>
            <Bottombar />
        </div>
    )
}