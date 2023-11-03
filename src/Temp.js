import articles from './dummy/articles.js';
import './Temp.css';
import ArticleCard from './components/SuccessStories/ArticleCard.js';

export default function Temp(props) {
  return (
    <div className="a-h" style={{
      // border: '1px solid black',
      display: 'flex',
    //   flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '20px'
    }}>
      <div style={{
        justifySelf: "flex-start",
        alignSelf: "flex-start",
        flex: '3',
        maxWidth: '80%'
      }}>{props.children}</div>
      <div className='aa-h' style={{
        flex: '1',
        maxWidth: '20%',
        display: 'flex',
        // flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', justifySelf: 'center', alignSelf: 'center', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {articles.map((article, index) => (
          <span style={{ width: 'fit-content', height: 'fit-content', margin: '20px'}}key={index}>
            <ArticleCard article={article} key={index} />
          </span>
        ))}
        </div>
      </div>
    </div>
  );
}
