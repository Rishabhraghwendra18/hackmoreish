import styles from "../styles/Home.module.css";
import Hero from "../sections/Hero";
import Prizes from "../sections/Prizes/index";
import Theme from "../sections/Theme/index";
import About from "../sections/About/index";
import Sponsors from "../sections/Sponsors";
import Schedule from "../sections/Schedule";
import Faqs from "../sections/Faqs";
import Team from "../sections/Team";
import ContactForm from "../sections/ContactForm";

export async function getStaticProps() {
  const query = `{
    nameCollection{
      items{
        title
        description
        icon{
          description
          url
          width
          height
        }
      }
    }
    prizesCollection{
      items{
        title
        description
        icon{
          description
          url
          width
          height
        }
      }
    }
  faQsCollection{
    items{
      question
      answer
    }
  }
  goldSponsorsCollection{
    items{
      sponsorIcon{
        title
        url
      }
      sponsorWebsiteLink
    }
  }
  silverSponsorsCollection{
    items{
      sponsorIcon{
        url
        title
      }
      sponsorWebsiteLink
    }
  }
  level4SponsorCollection{
    items{
      sponsorIcon{
        title
        url
      }
      sponsorWebsiteLink
    }
  }
  communitySponsorCollection{
    items{
      logo{
        url
      }
      link
    }
  }
  }`;
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json());
  return {
    props: {
      content: response.data.nameCollection.items,
      prizes: response.data.prizesCollection.items,
      faqs: response.data.faQsCollection.items,
      goldSponsors: response.data.goldSponsorsCollection.items,
      silverSponsors: response.data.silverSponsorsCollection.items,
      level4Sponsors: response.data.level4SponsorCollection.items,
      communitySponsors: response.data.communitySponsorCollection.items,
    },
  };
}

export default function Home({ content, prizes, faqs, goldSponsors, silverSponsors,level4Sponsors,communitySponsors}) {
  return (
    <>
      <div className={styles.container}>
        <Hero></Hero>
        <About></About>
        <Prizes prizes={prizes}></Prizes>
        <Theme content={content}></Theme>
        <Schedule></Schedule>
        <Sponsors goldSponsors={goldSponsors} silverSponsors={silverSponsors} level4Sponsors={level4Sponsors}
        communitySponsors={communitySponsors}
        ></Sponsors>
        <Faqs faqs={faqs}></Faqs>
        <Team></Team>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}
