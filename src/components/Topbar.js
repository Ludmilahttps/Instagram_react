export default function Topbar() {
    return (
        <div class="top-bar">
            <div class="top-bar">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="line"> </div>
                <img class="logo-instagram" src={"./icons/logo.png"}/>
                <div class="searchbar">
                    <input type="text" class="search" id="search" placeholder="search" />
                </div>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}