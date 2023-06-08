import ShowCard from "./ShowCard";

const ShowGrid = ( { shows}) => {
    return (
        <div>
            {
                shows.map(data =>
                    // <div key={data.show.id}>
                    //     {data.show.name}
                    // </div>

                    <ShowCard
                        key={data.show.id}
                        id={data.show.id}
                        name={data.show.name}
                        summary={data.show.summary}
                        image={data.show.image ? data.show.image.medium : 'not-found.png'} />
                    )
            }
        </div>
    );
}

export default ShowGrid;