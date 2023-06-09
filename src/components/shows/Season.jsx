const Season = ({ seasons }) => {
    return (
        <div>
            <p> Season in total : {seasons.length}</p>
            
            <p>
                Episode in total : {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
            </p>

            <div>
                {seasons.map((season) => {
                    return (
                        <div key={season.id}>
                            <div>
                                <p>Season {season.number}</p>
                                <p>Episodes: {season.episodeOrder}</p>

                                <p>
                                    Aired:{' '} 
                                    {season.premiereDate} - {season.endDate}
                                </p>
                            </div>
                        </div>
                        )
                })}
            </div>
        </div>
    )

}

export default Season;
        