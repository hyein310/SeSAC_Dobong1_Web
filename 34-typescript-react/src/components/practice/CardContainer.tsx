import Card from "./Card";
import { MatzipForm } from "../../types/interface";

interface Props {
    showContent: boolean;
    matzipInfo: MatzipForm[];
}

export default function CardContainer({showContent, matzipInfo}: Props) {

    return(
        <div>
            {showContent &&
                matzipInfo.map((el) => {
                return (
                <Card title={el.title} imgSrc={el.imgSrc} desc={el.desc} key={el.idx}></Card>
                )
        })}
        </div>
    )

}