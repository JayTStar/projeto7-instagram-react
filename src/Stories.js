import Users from "./Users";
import Storie from "./Storie";

export default function Stories(){
    return(
        <section class="stories">
            {Users[3].map(usuario => <Storie name={usuario.username} profile={usuario.profilepic}/>)}
            <ion-icon id="seta" name="chevron-forward-circle"></ion-icon>
        </section>
    )
}