export default function Header(){
    return(
        <div className="header">

        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
        <div className="input">
            <i class="fa-solid fa-magnifying-glass"></i>

            <input type="text" placeholder="Search for songs, artists etc" />

        </div>
    </div>
    );
}