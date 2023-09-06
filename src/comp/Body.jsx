import Interface from "./Interface";
import Menu from "./Menu";

const Body = () => {
    return(
        <div className="min-h-[92vh] bg-gray-950 flex">
            <Menu />
            <Interface />
        </div>
    );
}

export default Body;