import { FunctionComponent, ReactElement } from "react";
import testJson from '../test.json';
import { UIItem } from "./UIItem";

export interface IUIItem {
    id: string,
    itemType: "button"|"label",
    itemValue: string
  }

export const UIBuilder: FunctionComponent = (): ReactElement => {
    const uiItem = JSON.parse(JSON.stringify(testJson)) as IUIItem[];
    
    return(
        <div>
            {
                uiItem.map(item => 
                    <UIItem key={item.id} {...item}/>
                )
            }
        </div>
    );
}