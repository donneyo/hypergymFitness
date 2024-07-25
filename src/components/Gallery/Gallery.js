/** @jsx jsx */
//import { css, jsx } from '@emotion/core'
//import Gallery2 from "../../images/gallery.png";
//import Gallery1 from "../../images/gallery2.png";
//import Gallery3 from "../../images/gallery3.png";
//import Gallery4 from "../../images/gallery4.png";
//import Gallery5 from "../../images/gallery5.png";
//import Gallery6 from "../../images/gallery1.png";

import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import TrainerCard from "../Trainers/TrainerCard";

import TrainerBg from "../../images/HeroImage.png";
import Trainer1 from "../../images/trainer.png";
import Trainer2 from "../../images/trainer2.png";
import Trainer3 from "../../images/trainer3.png";


const Gallery = () => {
    return (
      <section className="trainers" css={styles}>
                <Heading title="OUR EXERCISES" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                <Container>
                    <TrainerCard trainerImg={Trainer3} trainerName="Jessica Mino" trainerType="Woman Trainer" />
                    <TrainerCard trainerImg={Trainer1} trainerName="Amit Khan" trainerType="Men Trainer" />
                    <TrainerCard trainerImg={Trainer2} trainerName="Paulo Rolac" trainerType="Men Trainer" />
                </Container>
            </section>
//        <section className="gallery" css={styles}>
//            <div className="img1">
//                <img src={Gallery1} alt="" />
//            </div>
//            <div className="img2">
//                <img src={Gallery4} alt="" />
//            </div>
//            <div className="img3">
//                <img src={Gallery5} alt="" />
//            </div>
//            <div className="img4">
//                <img src={Gallery6} alt="" />
//            </div>
//            <div className="img5">
//                <img src={Gallery3} alt="" />
//            </div>
//            <div className="img6">
//                <img src={Gallery2} alt="" />
//            </div>
//        </section>
    )
}

//const styles = css`
//    width: 100%;
//    display: flex;
//    flex-wrap: wrap;
//    .img1, .img3 {
//        width: 30%;
//        height: 500px;
//        img {
//            display: block;
//            width: 100%;
//            height: 100%;
//        }
//    }
//    .img2 {
//        width: 40%;
//        height: 500px;
//        img {
//            display: block;
//            width: 100%;
//            height: 100%;
//        }
//    }
//    .img4 {
//        width: 24%;
//        height: 500px;
//        img {
//            display: block;
//            width: 100%;
//            height: 100%;
//        }
//    }
//    .img5, .img6 {
//        width: 38%;
//        height: 500px;
//        img {
//            display: block;
//            width: 100%;
//            height: 100%;
//        }
//    }
//    @media (max-width: 769px) {
//        .img1, .img2, .img3, .img4, .img5, .img6 {
//            width: 100%;
//        }
//    }
//    @media (min-width: 770px) and (max-width: 1002px) {
//        .img1, .img2, .img3, .img4, .img5, .img6 {
//            width: 50%;
//        }
//    }
//
//`

const styles = css`
    width: 100%;
    background: #000;
    .heading {
        padding: 150px 0 0 0;
    }
    .container {
        padding: 150px 0;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
    }
    @media (max-width: 769px) {
        .heading {
            max-width: 400px;
        }
        .container {
            flex-direction: column;
            .trainerCard {
                margin: 0 auto;
                .trainerBgImage {
                    height: 500px;
                    &:hover {
                        .social {
                            background: rgba(0, 0, 0, 0.5);
                            height: 500px;
                        }
                    }
                    .social {
                        height: 480px;
                    }
                }
            }
        }
    }
    @media (min-width: 770px) and (max-width: 980px) {
        .container {
            flex-wrap: wrap;
            .trainerCard {
                max-width: 45%;
            }
        }
    }
    @media (min-width: 981px) and (max-width: 1324px) {
        .container {
            flex-wrap: wrap;
            .trainerCard {
                max-width: 290px;
            }
        }
    }
`;

export default Gallery;