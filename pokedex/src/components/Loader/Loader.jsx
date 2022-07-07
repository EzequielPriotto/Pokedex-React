import './Loader.css';

export default function Loader(props) {
    const urlLoader = '/assets/img/loader.gif'

    const {loading} = props;

        return (
            <div className={loading ? 'loader active' : 'loader'}>
                <img src={urlLoader} alt="gif" />
                <h2>Loading...</h2>
            </div>
        )
  
}