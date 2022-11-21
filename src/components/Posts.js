export default function Posts() {

    const posts = [
        {
            name: "Loki.Oficial",
            logo: "loki2",
            class: "post",
            postContent: "loki_post",
            footerLikeImg: "loki2",
            footerLikeName: "Loki_Sylvie",
            footerLikeNumber: "101.523",
            footerCommentProfile: "Não"
        },
        {
            name: "Gamora",
            logo: "1",
            class: "post",
            postContent: "Guardioes",
            footerLikeImg: "2",
            footerLikeName: "Rocket",
            footerLikeNumber: "120.568",
            footerCommentProfile: "Sim"
        },
        {
            name: "razoesparaacreditar",
            logo: "razoesparaacreditar",
            class: "post",
            postContent: "tony",
            footerLikeImg: "badvibes",
            footerLikeName: "bad.vibes.memes",
            footerLikeNumber: "125.568",
            footerCommentProfile: "Não"
        },
        {
            name: "Gamora",
            logo: "1",
            class: "post",
            postContent: "Guardioes",
            footerLikeImg: "2",
            footerLikeName: "Rocket",
            footerLikeNumber: "120.568",
            footerCommentProfile: "Não"
        },
        {
            name: "Gamora",
            logo: "1",
            class: "post",
            postContent: "Guardioes",
            footerLikeImg: "2",
            footerLikeName: "Rocket",
            footerLikeNumber: "120.568",
            footerCommentProfile: "Não"
        },
    ];

    const postsRender = posts.map((post) => {
        return <CardPost class={post.class} logo={post.logo} name={post.name} postContent={post.postContent} footerLikeImg={post.footerLikeImg} footerLikeName={post.footerLikeName} footerLikeNumber={post.footerLikeNumber} footerCommentProfile={post.footerCommentProfile} />
    });

    return (
        <div class="posts">
            {postsRender}
        </div>
    );
}

function CardPost(props) {
    return (
        <>
            <div data-test="post" class={`card-post ${props.class}`}>
                <div class="up-post">
                    <div class="img-profile">
                        <img src={`./assets/${props.logo}.jpg`} alt="" />
                    </div>
                    <b>{props.name}</b>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <div data-test="post-image" class="img-post">
                    {props.class === "video" ?

                        <video width="100%" controls="controls" autoplay="autoplay" muted="muted">
                            <source src="./assets/video.mp4" type="video/mp4" />
                            <source src="./assets/video.ogv" type="video/ogg" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>

                        :

                        <img src={`./assets/${props.postContent}.jpg`} alt="" />
                    }
                </div>

                <div class="down-post">
                    <div class="icons-post">
                        <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                    </div>
                    <div class="curtidas">
                        <div class="img-like">
                            <img src={`./assets/${props.footerLikeImg}.jpg`} alt="" />
                        </div>
                        <p>Curtido por <b>{props.footerLikeName}</b> e outras <b data-test="likes-number"> {props.footerLikeNumber} </b>pessoas</p>
                    </div>
                </div>

                {props.footerCommentProfile === "Sim" ?
                    <div class="footer-add-comment">
                        <div class="footer-comment-profile">
                            <div class="comment-content">
                                <span class="footer-comment-name">netflixbrasil</span> <span class="footer-comment">Deixem aqui</span>
                                <div class="see-all-comments mt6">
                                    <span>Ver todos os 194 comentários</span>
                                </div>
                                <div class="footer-comments-section">
                                    <div class="footer-comment-section">
                                        <ul>
                                            <li><span class="footer-comment-name">bad.vibes.memes</span> <span class="footer-comment">Vi tudo em um dia só 😅😅😅</span></li>
                                        </ul>
                                        <ion-icon class="footer-comment-icon" name="heart-outline"></ion-icon>
                                    </div>
                                    <div class="footer-comment-section mt6">
                                        <ul>
                                            <li><span class="footer-comment-name">adorable_animals</span> <span class="footer-comment">👏👏👏</span></li>
                                        </ul>
                                        <ion-icon class="footer-comment-icon" name="heart-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="post-time mt10">
                                    <span>HÁ 2 HORAS</span>
                                </div>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="send-comment">
                            <form class="send-comment-form">
                                <ion-icon class="icon-happy" name="happy-outline"></ion-icon>
                                <input class="input-comment" type="text" placeholder="Adicione um comentário..." />
                                <input class="btn" type="button" value="Publicar" />
                            </form>
                        </div>
                    </div>
                    : ""
                }
            </div>

            <div class="middle"></div>
        </>
    );
}