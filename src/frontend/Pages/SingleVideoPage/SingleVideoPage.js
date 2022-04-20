import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, ReactPlayerFrame } from "../../index";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const { videoID } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${videoID}`);
        setSingleVideo(data.video);
      } catch (e) {
        console.error(e);
        return;
      }
    })();
  }, []);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num < 900) {
      return num;
    }
  }
  return (
    <>
      <Sidebar />
      <div className="single-video-page">
        <div className="single-video-container">
          <ReactPlayerFrame id={videoID} />
          <div className="video-details-container">
            <div className="video-details">
              <em>
                <h4>{singleVideo.speaker}</h4>
              </em>
              <p>{singleVideo.title}</p>
              <h5>View : {numFormatter(singleVideo.views)}</h5>
            </div>
            <div className="video-btns">
              <button className="video-like-btn">
                <span className="material-icons-outlined">favorite_border</span>
                <span className="video-btns-text">Likes</span>
              </button>
              <button className="video-like-btn">
                <span className="material-icons-outlined">ios_share</span>
                <span className="video-btns-text">Share</span>
              </button>
              <button className="video-like-btn">
                <span className="material-icons-outlined">playlist_add</span>
                <span className="video-btns-text">Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className="watch-next-container">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, repellat ab necessitatibus ad nemo tempore perferendis
            labore, sunt et architecto obcaecati beatae veniam quasi eum
            praesentium a officia quod ullam debitis temporibus voluptate
            deleniti ut! Temporibus dolor in ab at minima nihil! Provident a
            rerum ipsa, autem dolor, tempora culpa, aliquid aliquam quae
            reiciendis consequatur quam impedit. Omnis, harum impedit ratione
            aspernatur quas ipsa modi blanditiis ullam nisi quaerat sint maiores
            culpa? Maiores ipsum vero nemo delectus, ut et eius, tenetur
            molestias quam architecto laboriosam! Totam, numquam. Mollitia
            delectus obcaecati necessitatibus officia itaque non corrupti enim
            maxime cupiditate provident eos accusantium sapiente ea praesentium,
            vel pariatur iusto et beatae incidunt laudantium nesciunt?
            Distinctio explicabo animi neque accusantium odio dicta, repellendus
            id at, cum aliquam ex maxime vero sapiente esse eos doloribus, ullam
            nulla ipsa a voluptatum ea qui enim ut. Omnis, praesentium vero sed
            enim facilis sapiente! Dolorem, facere reiciendis voluptates saepe
            dicta sint. Dolor ipsum cum inventore id distinctio quas. Ipsam,
            reiciendis omnis? Facere soluta repudiandae, repellat deleniti at
            consectetur libero architecto quibusdam nesciunt quam, voluptatem
            quas. Corporis temporibus reprehenderit quaerat commodi debitis
            consectetur iusto quis quas maxime adipisci quam dignissimos,
            laudantium iste veniam, incidunt ex quibusdam excepturi nemo
            voluptatibus atque repudiandae, ducimus omnis eaque. Voluptatem quis
            ducimus minima fuga. Ut molestias hic possimus impedit voluptas sit
            consequuntur pariatur quisquam repellat ipsam. Praesentium,
            dignissimos! Molestiae voluptatum nemo in ratione. Beatae
            consectetur reprehenderit, tenetur aperiam, animi sint iure incidunt
            nemo dignissimos illum inventore a illo, repudiandae repellendus!
            Debitis maiores eius repellendus velit aut in, ducimus soluta
            pariatur iure magnam recusandae dicta veritatis beatae repellat
            dignissimos, quo commodi. Facilis fuga reiciendis consectetur
            corporis, odio dolores voluptates labore provident est officia quod
            iste accusamus dolorem sunt obcaecati perferendis quas? Delectus
            quod est architecto itaque magni quaerat voluptatum soluta, debitis
            expedita aperiam velit illo placeat odio saepe earum pariatur modi
            consequuntur ipsum ex, iste eligendi possimus eius maiores! Saepe,
            reiciendis enim? Impedit illo aliquid ipsum, suscipit laboriosam
            dignissimos doloremque laborum nobis dolores alias placeat ex odit!
            Deserunt exercitationem eaque debitis obcaecati sequi fugit magnam,
            voluptate sunt minus ipsum, sed, nihil esse laboriosam maxime ad
            atque tempore. Animi accusamus amet est, asperiores, molestias eum
            illo culpa nobis doloribus quisquam perferendis aliquid quod odit
            recusandae optio tenetur? Provident harum obcaecati doloremque
            fugiat eius! Neque incidunt, ratione voluptatibus quis blanditiis
            assumenda consectetur omnis quibusdam iure molestiae ab! Commodi eum
            nihil nulla assumenda quaerat minus sit veniam consequatur aliquam
            molestias nisi quas voluptate iusto, dolorem sint delectus neque?
            Quasi eveniet, exercitationem, quis eligendi commodi vel
            consequuntur veritatis sint maxime, expedita totam cupiditate
            mollitia optio doloremque eaque? Voluptates ut ad architecto
            delectus! Dicta, eaque nisi necessitatibus voluptatem, fugit
            nesciunt odit excepturi quae fugiat deleniti reprehenderit magnam
            voluptas hic repudiandae velit pariatur officia laboriosam,
            recusandae maxime? Magni dicta ullam hic totam sed? Obcaecati
            officia voluptatem autem reprehenderit libero sapiente aperiam at
            sunt sed. Unde corporis facilis amet cumque? Animi sit atque
            recusandae perferendis molestias odit veritatis accusantium placeat
            inventore, quo sint ex quas? Possimus repudiandae reiciendis unde,
            ullam qui dignissimos numquam animi quasi est at cupiditate. Fugiat
            iusto numquam error, quam eveniet accusamus, fugit deleniti quisquam
            obcaecati temporibus ea maxime reiciendis perspiciatis doloremque.
            Illo eum, natus et cupiditate distinctio itaque laboriosam doloribus
            harum obcaecati recusandae numquam praesentium, quisquam accusantium
            aut explicabo architecto molestiae ipsum ad non ullam debitis,
            accusamus at expedita eligendi. Inventore nulla facilis
            exercitationem adipisci. Maiores temporibus repellendus dolor
            numquam aut nobis explicabo molestiae, accusamus atque quia ea earum
            quaerat ut facere ducimus consectetur tempora ipsum, nemo sed
            incidunt ad voluptate obcaecati fuga sequi. Rerum cupiditate est
            odit nemo temporibus, ad sequi quia explicabo inventore nisi quaerat
            incidunt delectus? Nostrum ab vel non aspernatur, quidem dolore ut!
            Incidunt esse, ducimus rem, nihil ex exercitationem est saepe
            eligendi dolores quas odit autem optio quia officiis obcaecati
            laboriosam ratione quidem consequatur odio, enim cumque ullam minus
            voluptatem. Assumenda excepturi eligendi officia similique
            perferendis? Assumenda laboriosam, ipsum est expedita veniam saepe
            porro sequi error fugiat minima rerum perferendis soluta maiores
            neque praesentium adipisci autem! Facilis aliquam, error voluptas
            sequi ipsum fugit praesentium enim rerum sunt, cumque ipsam
            cupiditate optio, magnam in! Perspiciatis quis suscipit consectetur
            ex voluptas debitis at blanditiis, facilis, modi, quos ullam
            pariatur sint iusto dolore ratione? Laboriosam sint dolorem delectus
            animi velit optio nulla. Enim, neque vitae ex ut praesentium,
            dolorum labore eaque reprehenderit aperiam consequuntur inventore
            aliquam architecto sapiente laboriosam sed ea modi amet quam
            perspiciatis! Hic laudantium ipsam voluptatibus impedit repellat
            eveniet praesentium asperiores, neque, officiis ad iste, repudiandae
            veritatis quas dolor quos velit beatae dolorum quidem consectetur
            assumenda vero dicta corporis saepe. Corrupti reiciendis aspernatur
            odit animi ullam. Labore voluptatum commodi, at illum distinctio
            optio officia ut alias saepe doloribus quibusdam recusandae harum
            officiis dolor quisquam odio iste atque iusto facere quidem nisi!
            Amet facere officia natus deleniti corporis consequatur officiis
            nostrum, eos sint commodi cumque incidunt rem veniam odit. Beatae
            nulla modi suscipit assumenda in omnis corrupti corporis laudantium
            praesentium, dignissimos nesciunt ut, non quae asperiores expedita!
            Ipsam doloremque at sed ea. Beatae, ea facilis. Iure numquam,
            voluptatibus fuga explicabo expedita fugiat doloremque placeat
            suscipit quo sit, itaque velit veritatis, aut praesentium. Est
            numquam doloremque officia? Commodi provident dicta alias quae est,
            iure, quas vero voluptas porro amet ad quis ea unde quam esse aut
            quaerat reiciendis consequatur sunt cumque magnam, corrupti
            voluptatum. Aliquid magnam quod labore ullam blanditiis dolore modi
            obcaecati facilis minus, id, delectus vel atque sunt dolorem
            quibusdam animi laborum recusandae pariatur soluta amet voluptatem
            placeat explicabo deserunt excepturi. Iusto excepturi dolore, odit
            soluta minima asperiores. Enim ex alias rem inventore, quam
            excepturi. Quod debitis nihil nam dolorum itaque, aspernatur, dolor
            minus facilis velit maiores fuga. Unde omnis sed nemo nobis
            accusantium consequatur quod, tempora, saepe cumque ea quae et quam
            quos vitae! Exercitationem, vel impedit ab distinctio dolore esse
            autem reprehenderit illo voluptatibus deserunt beatae non veritatis,
            voluptas facilis aperiam harum incidunt, in eius molestias quo! Esse
            enim recusandae ad pariatur ullam, ipsum explicabo quam harum
            eligendi perferendis quidem sint. Quidem provident assumenda placeat
            eius. Quam tempora eos enim?
          </h1>
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
