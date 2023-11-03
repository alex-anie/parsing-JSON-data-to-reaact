import techNewsApis from '../techNewsApis.json';
import { Link } from 'react-router-dom';


function Home() {
  console.log(techNewsApis);

  const news = techNewsApis.map((story)=>{
        return(<aside key={story.id}>
                  <Link to={story.url}>{story.title}</Link>
            </aside>
        )
  })
  return (
    <>
      <div className="wrapper-class">
        <h1 className="heading-text">TechNews</h1>
        <p className="text">Latest Stories from the world of tech. Aggregated for you</p>
        {news}
      </div>
    </>
  );
}

export default Home;