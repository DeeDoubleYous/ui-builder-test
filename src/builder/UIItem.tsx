import React, {FunctionComponent, ReactElement} from "react";
import { IUIItem } from "./UIBuilder";

export const UIItem:FunctionComponent<IUIItem> = (item): ReactElement => {
    let returnItem = <div></div>;

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