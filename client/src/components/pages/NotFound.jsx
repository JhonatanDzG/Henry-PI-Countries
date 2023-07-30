import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes.constant"


export default function NotFound() {
  return (
    <>
    <div>NotFound</div>
    <div className="button-home">
      <Link to={ROUTES.home}>
        <button>Home</button>      
      </Link>
    </div>
    </>
  )
}
