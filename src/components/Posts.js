import React from 'react'

export default function Posts() {

    const posts = [
        {
            name: "Loki.Oficial",
            logo: "loki2",
            class: "post",
            postContent: "loki_post",
            footerLikeImg: "loki2",
            footerLikeName: "Loki_Sylvie",
            footerLikeNumber: '101',
            footerCommentProfile: "Não"
        },
        {
            name: "Gamora",
            logo: "1",
            class: "post",
            postContent: "Guardioes",
            footerLikeImg: "2",
            footerLikeName: "Rocket",
            footerLikeNumber: '168',
            footerCommentProfile: "Sim"
        },
        {
            name: "Tony_Stark",
            logo: "tony",
            class: "post",
            postContent: "tony_post",
            footerLikeImg: "thor",
            footerLikeName: "Thor",
            footerLikeNumber: '125,68',
            footerCommentProfile: "Não"
        },
        {
            name: "Dr. Strange",
            logo: "strange",
            class: "post",
            postContent: "strange",
            footerLikeImg: "2",
            footerLikeName: "Rocket",
            footerLikeNumber: '12',
            footerCommentProfile: "Não"
        },
    ];

    const postsRender = posts.map((post) => {
        return <CardPost class={post.class} logo={post.logo} name={post.name} postContent={post.postContent} footerLikeImg={post.footerLikeImg} footerLikeName={post.footerLikeName} footerLikeNumber={post.footerLikeNumber} footerCommentProfile={post.footerCommentProfile} />
    })

    return (
        <div class="posts">
            {postsRender}
        </div>
    )
}

function CardPost(props) {

    const [salvar, setSalvar] = React.useState("bookmark-outline")
    const [like, setLike] = React.useState("heart-outline")
    const [curtidas, setLikes] = React.useState(parseFloat(props.footerLikeNumber))

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
                    <img onDoubleClick={() => {
                        if (like == "heart-outline") {
                            setLike("heart")
                            setLikes(curtidas + 1)
                        }
                    }}
                        src={`./assets/${props.postContent}.jpg`} alt="" />

                </div>

                <div class="down-post">
                    <div class="icons-post">
                        <ion-icon data-test="like-post" onClick={() => {
                            if (like == "heart-outline") {
                                setLike("heart")
                                setLikes(curtidas + 1)
                            }

                            else {
                                setLike("heart-outline")
                                setLikes(curtidas - 1)
                            }

                        }} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon data-test="save-post" onClick={() => salvar === "bookmark-outline" ? setSalvar("bookmark") : setSalvar("bookmark-outline")} name={salvar}></ion-icon>
                    </div>
                    <div class="curtidas">
                        <div class="img-like">
                            <img src={`./assets/${props.footerLikeImg}.jpg`} alt="" />
                        </div>
                        <p>Curtido por <b>{props.footerLikeName}</b> e outras <b data-test="likes-number"> {curtidas} </b>pessoas</p>
                    </div>
                </div>

                {props.footerCommentProfile === "Sim" ?
                    <div class="footer-add-comment">
                        <div class="footer-comment-profile">
                            <div class="comment-content">
                                <span class="footer-comment-name">{props.name}</span> <span class="footer-comment">Segura essa</span>
                                <div class="see-all-comments mt6">
                                    <span>Ver todos os 194 comentários</span>
                                </div>
                                <div class="footer-comments-section">
                                    <div class="footer-comment-section">
                                        <ul>
                                            <li><span class="footer-comment-name">Loki.Oficial</span> <span class="footer-comment">Criaturas adoraveis</span></li>
                                        </ul>
                                        <ion-icon class="footer-comment-icon" name="heart-outline"></ion-icon>
                                    </div>
                                    <div class="footer-comment-section mt6">
                                        <ul>
                                            <li><span class="footer-comment-name">Rocket</span> <span class="footer-comment">lov u</span></li>
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