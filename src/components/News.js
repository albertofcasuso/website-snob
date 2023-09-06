import Link from "next/link";
const newsData = [
  {
    img: "img/news/1.jpg",
    tag: "Interview / Magazine / ID Italy",
    date: "August 9, 2021",
    title: '"Mijo" ID- Italy Among the 21 FASHION FILMS FAVS by the Vice team.',
    link: "https://i-d.vice.com/it/article/epxbqm/migliori-fashion-film-2021",
  },
  {
    img: "img/news/1.jpg",
    tag: "Interview / Magazine UK",
    date: "August 9, 2021",
    title: "Directors Notes Interview",
    link: "https://directorsnotes.com/2022/02/15/mazdey-snob-mijo",
  },
  {
    img: "img/news/1.jpg",
    tag: "Article / Magazine / Spain ",
    date: "August 9, 2021",
    title: "Neo2 Magazine - “Estreno de Mijo” ",
    link: "https://www.neo2.com/fashion-film-mijo-mazdey-snob-mexico-anos-40-pachucos",
  },
  {
    img: "img/news/1.jpg",
    tag: "Interview / Magazine & Festival / Chicago ",
    date: "August 9, 2021",
    title:
      "Interview: “Mijo” director Mazdey Snob, 2022 recipient of the Cinema Femme Short Film Fest Phenomenal Woman in Film award",
    link: "https://cinemafemme.com/2022/05/20/interview-mijo-director-mazdey-snob-2022-recipient-of-the-cinema-femme-short-film-fest-phenomenal-woman-in-film-award/",
  },
  {
    img: "img/news/1.jpg",
    tag: "Article / Magazine / Johannesburg",
    date: "August 9, 2021",
    title: "Bubblegum Club - Johannesburg, South Africa",
    link: "https://bubblegumclub.co.za/fashion/mijo-a-colourful-film-inspired-by-pachucos-fashion",
  },
  {
    img: "img/news/1.jpg",
    tag: "Article / Magazine / Berlin",
    date: "August 9, 2021",
    title: "Kaltblut Magazine Mijo – An Ode to Mexican Fashion of the 40s",
    link: "https://www.kaltblut-magazine.com/mijo-an-ode-to-mexican-fashion-of-the-40s/",
  },
  {
    img: "img/news/1.jpg",
    tag: "Article / Magazine ",
    date: "August 9, 2021",
    title: "GIRLS IN FILMS",
    link: "https://www.girlsinfilm.net/videos/mijo",
  },
  {
    img: "img/news/1.jpg",
    tag: "Interview / Magazine / Mexico ",
    date: "August 9, 2021",
    title: "Entrevista con Mazdey, El Fashion Film para el #futuromoda ",
    link: "https://www.kavolta.com/2020/07/mazdey-snob-solutions-fashion-film-kavoltalive",
  },
  {
    img: "img/news/1.jpg",
    tag: "Interview / Magazine / Mexico",
    date: "August 9, 2021",
    title: "Entrevista / Snob Solutions Fashion Film ",
    link: "https://www.kavolta.com/2015/03/entrevista-snob-solutions",
  },
];

const News = ({ ActiveIndex, animation }) => {
  return (
    <>
      <div
        className={
          ActiveIndex === 3
            ? `cavani_tm_section active animated ${
                animation ? animation : "fadeInUp"
              }`
            : "cavani_tm_section hidden animated"
        }
        id="news__"
      >
        <div className="section_inner">
          <div className="cavani_tm_news">
            <div className="cavani_tm_title">
              <span>Latest News</span>
            </div>
            <div className="news_list">
              <ul>
                {newsData.map((news, i) => (
                  <li data-img={`img/news/${i + 1}.jpg`} key={i}>
                    <div className="list_inner">
                      <span className="number">{`${i <= 9 ? 0 : ""}${
                        i + 1
                      }`}</span>
                      <div className="details">
                        <span>{news.tag}</span>
                        <div className="extra_metas"></div>
                        <div className="post_title">
                          <h3>
                            <Link
                              href={news.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {news.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
