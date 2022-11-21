export default function Storys() {

    const stories = [
        {
            alt: "Dr.Strange",
            src: "./assets/strange.jpg",
            name: "Dr.Strange"
        },
        {
            alt: "Thor",
            src: "./assets/thor.jpg",
            name: "Thor"
        },
        {
            alt: "Gamora",
            src: "./assets/1.jpg",
            name: "Gamora"
        },
        {
            alt: "Tony_Stark",
            src: "./assets/tony.jpg",
            name: "Tony_Stark"
        },
        {
            alt: "Wanda",
            src: "./assets/wanda.jpg",
            name: "Wanda"
        },
        {
            alt: "Rocket",
            src: "./assets/2.jpg",
            name: "Rocket"
        },
        {
            alt: "Deadpool",
            src: "./assets/deadpool.jpg",
            name: "Deadpool"
        },
        {
            alt: "Loki",
            src: "./assets/loki2.jpg",
            name: "Loki"
        },
    ]

    const storysReder = stories.map((story) => { return <Story alt={story.alt} src={story.src} name={story.name} /> })

    return (
        <div class="storys">
            {storysReder}
            <div class="forward">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {

    return (
      <div class="story">
        <div class="img-story">                 
          <img src={props.src} alt={props.alt} />
        </div>
        <p>{props.name}</p>
      </div>
    );
}