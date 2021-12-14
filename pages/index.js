import styles from '../styles/Home.module.css'
import Hero from '../sections/Hero'
import Prizes from '../sections/Prizes/index'
import Theme from '../sections/Theme/index'

export async function getStaticProps() {
  const query=`{
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
  }`;
  const response=await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body:JSON.stringify({query})
  }
  )
  .then(res=>res.json());
  return {
    props:{
      content:response.data.nameCollection.items,
      prizes:response.data.prizesCollection.items
    }
  };
}

export default function Home({content,prizes}) {
  return (
    <>
    <div className={styles.container}>
      <Hero></Hero>
      <Prizes prizes={prizes}></Prizes>
      <Theme content={content}></Theme>
    </div>
    </>
  )
}
