const ShowMainData = ({image,name, summary, rating,genres }) => {
    
    return (
        <div>
            <img src={image ? image.original : '/not-found.png'} alt={name} />
            <div>
                <h1>{name}</h1>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
                <div>
                    <p>Rating: {rating.average || 'N/A'}</p>
                    <p>
                        Genres: {genres.join(', ')}
                    </p>
                </div>
            </div>
        </div>
    );

}

export default ShowMainData;