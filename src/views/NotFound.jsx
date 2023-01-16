
import NotFoundLogo from '../assets/img/notfoung.jpg';
export default function NotFound() {
   
    
    return (
        <div className="mt-5">
            <h1>Pagina No Encontrada </h1>
            <img src={NotFoundLogo} alt="NotFound404" height={750}></img>
        </div>
    );
}