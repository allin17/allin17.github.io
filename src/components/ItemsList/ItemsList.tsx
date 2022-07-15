import {ListItem, ListItemText} from "@material-ui/core";
import React, {ReactNode} from "react";
import {ListItemsType} from "../../types/ListItemsTypes"
import "./itemsList.css"
import {getHighlightedText} from "../../utils/utils";

interface ItemsListType {
    searchText: string
    listItems: Array<ListItemsType>
    setSelectedItem: (element: ListItemsType) => void
    setListItems: (arg0: any) => void
    getHighlightedText : (text: string, highlight: string) => ReactNode
}

export const ItemsList: React.FC<ItemsListType> = ({
                                                       searchText,
                                                       listItems,
                                                       setSelectedItem,
                                                       setListItems}) =>
{
    return (
        <div>
            {listItems.map((el, i) =>
                <ListItem
                    className="listItems"
                    key={i}
                    button
                    onClick={() => {
                        setSelectedItem(el);
                        setListItems(null);
                    }}
                >
                    <ListItemText
                        className="listItemsElement"
                        primary={getHighlightedText(el.name || el.title || '', searchText)}/>
                    <ListItemText className="listItemsElement" primary={el.group}/>
                </ListItem>)}
        </div>
    )
}