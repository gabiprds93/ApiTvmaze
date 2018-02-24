import store from './store';

export const api = () =>
{
    if(store.getState().episodes == null)
    {
        const url = "http://api.tvmaze.com/shows/1/episodes";
        fetch(url)
            .then(result => result.json())
            .then(datos => 
                {
                    store.setState({
                        episodes: data,
                        index: data.length
                    })
                });
    }
}