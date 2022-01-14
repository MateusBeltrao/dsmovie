import Pagination from "../../components/Pagination"
import MovieCard from "../../components/MovieCard"
import {BASE_URL} from "utils/requests"
import axios from "axios"

function Listing (){


    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data)
    })
    
    return(
        <div>
        <Pagination></Pagination>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard></MovieCard>
                </div>
            </div>
        </div>
        
        
        </div>
    )
}

export default Listing