export default function AppTitle(props) {

    const { title ="Box-Office" , subTitle = "hehe"} = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
}