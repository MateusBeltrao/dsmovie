import Pagination from "../../components/Pagination"
import MovieCard from "../../components/MovieCard"
import {BASE_URL} from "utils/requests"
import axios from "axios"
import {useEffect, useState} from "react"
import { MoviePage } from "types/movie"

function Listing (){

    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage
            console.log(data)
            setPageNumber(data.number)
        })
    },[])


    
    
    return(
        <div>
            <p>{pageNumber}</p>
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