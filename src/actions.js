import "./ApiTvmaze";
import store from './store';

export const api = () =>
{
    if(store.getState().episodes == null)
    {
        const url = "http://api.tvmaze.com/shows/1/episodes";
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => 
                {
                    store.setState({
                        episodes: datos,
                        index: datos.length
                    })
                });
        console.log(store.getState());
    }
    console.log("segundo", store.getState());
}