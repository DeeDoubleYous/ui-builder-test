import React, {FunctionComponent, ReactElement} from "react";
import { UIItem } from "../App";

export const UIBuilder:FunctionComponent<UIItem> = (item): ReactElement => {
    let returnItem = <div></div>

    switch(item.itemType){
        case "button":
            returnItem = <button id={item.id}>{item.itemValue}</button>;
            break;
        case "label":
            returnItem = <p id={item.id}>{item.itemValue}</p>;
            break;
    }
    
    return returnItem;
}