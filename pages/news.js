import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import NewsCard from "./../components/newscard";

const newsContent = {
  "en-US": {
    title: "Your News",
    content: [
      {
        title:
          "Otter2.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      {
        title: "Gillmor Gang: Party Line",
        synopsis:
          "In the early days of social media, all things seemed possible. Twitter was this weird reboot of blogs, with a social layer atop an RSS feed that gave authority to last in/first out musings by provi...",
        imageUrl: "",
      },
      {
        title:
          "Kia’s fast-charging EV6 electric crossover is coming to the U.S. in early 2022        ",
        synopsis:
          "The Kia EV6, an all-electric crossover that kicks off the automaker’s Plan S strategy to shift away from internal combustion engines and toward EVs, will come to the U.S. early next year, the...",
        imageUrl: "",
      },
      {
        title:
          "UTEC, one of Asia’s largest deep-tech investment firms, launches new $275M fund",
        synopsis:
          "        The University of Tokyo Edge Capital Partners (UTEC), a deep-tech investment firm, announced the first close of its fifth fund, which is expected to total 30 billion JPY (or about $275 million USD)...",
        imageUrl: "",
      },
    ],
  },
  "th-TH": {
    title: "ข่าว",
    content: [
      {
        title:
          "ข่าว 1",
        synopsis:
          "Le service de transcription vocale alimenté par A.I. Otter.ai veut rendre encore plus facile pour ses utilisateurs professionnels l'enregistrement de leurs réunions. La société présente aujourd'hui une nouvelle fonctionnalité, Otter Assistant, qui ...",
        imageUrl: "",
      },
      {
        title: "ข่าว 2",
        synopsis:
          "Aux débuts des réseaux sociaux, tout semblait possible. Twitter était ce redémarrage étrange des blogs, avec une couche sociale au sommet d'un flux RSS qui donnait le pouvoir de penser au dernier entré / premier sorti par provi ...",
        imageUrl: "",
      },
      {
        title:
          "ข่าว 3",
        synopsis:
          "Le Kia EV6, un multisegment entièrement électrique qui lance la stratégie Plan S du constructeur automobile visant à abandonner les moteurs à combustion interne pour se tourner vers les véhicules électriques, arrivera aux États-Unis au début de l'année prochaine, le ...",
        imageUrl: "",
      },
      {
        title:
          "ข่าว 4",
        synopsis:
          "L'Université de Tokyo Edge Capital Partners (UTEC), une société d'investissement de haute technologie, a annoncé la première clôture de son cinquième fonds, qui devrait totaliser 30 milliards JPY (soit environ 275 millions USD) ...",
        imageUrl: "",
      },
    ],
  },
};

export default function News(props) {
  const { locale, locales, defaultLocale } = props.context;
  const { title, content } = newsContent[locale];
  return (
    <div className={styles.container}>
      <Head>
        <title>TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <div
            style={{
              padding: "4px",
              marginRight: "4px",
            }}
          >
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
                padding: "2px",
              }}
            >
              {locale}
            </span>
          </div>
          {/* <Link
            activeClassName={locale === "es-ES"}
            href={`/es-ES/news`}
            locale="es-ES"
          >
            es-ES
          </Link> */}

          <Link
            activeClassName={locale === "th-TH"}
            href={`/th-TH/news`}
            locale="th-TH"
            style={{
                padding: "4px",
                marginRight: "4px",
              }}
          >
            th-TH
          </Link>
          <Link
            activeClassName={locale === "en-US"}
            href={`/en-US/news`}
            locale="en-US"
          >
            en-US
          </Link>
        </div>

        <div className={styles.newscontainer}>
          <div className={styles.yournewscasts}>
            <h3>{title}</h3>
          </div>

          <div>
            {content.map((newsItem, i) => (
              <NewsCard key={i} news={newsItem} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      context,
    },
  };
}
