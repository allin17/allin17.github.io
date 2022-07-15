import React, {useEffect, useMemo, useState} from 'react';
import {Alert, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./search.css";
import {getDateForRenderDetailView, getHighlightedText} from "../../utils/utils";
import {CardInfo} from "../../components/CardInfo/CardInfo";
import {dataAPI} from "../../api/api";
import {ListItemsType} from "../../types/ListItemsTypes"
import {ItemsList} from "../../components/ItemsList/ItemsList";

const Search = () => {
    const [searchText, setSearchText] = useState<string>('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [listItems, setListItems] = useState<Array<ListItemsType> | null>(null);

    const addGroupProperty = (groupName: string, arr: ListItemsType[]) => {
        return arr.map((el: ListItemsType) => ({...el, group: groupName}));
    }

    useEffect(() => {
        if (searchText.length >= 3) {
                const p1 = dataAPI.getAllFilms(searchText)
                    .then((res) => addGroupProperty('films', res));
                const p2 = dataAPI.getAllPeople(searchText)
                    .then((res) => addGroupProperty('people', res));
                const p3 = dataAPI.getAllPlanets(searchText)
                    .then((res) => addGroupProperty('planets', res));
                const p4 = dataAPI.getAllSpecies(searchText)
                    .then((res) => addGroupProperty('species', res));
                const p5 = dataAPI.getAllStarShips(searchText)
                    .then((res) => addGroupProperty('starships', res));
                const p6 = dataAPI.getAllVehicles(searchText)
                    .then((res) => addGroupProperty('vehicles', res));
                Promise.all([p1, p2, p3, p4, p5, p6])
                    .then(values => {
                        setListItems(values.flat());
                    })
                    .catch(() => {
                        setError(true)
                    })
            }
        }
    , [searchText])


    const renderDetailedView = (selectedItem: any) => {
        const {row1, row2, row3, row4} = getDateForRenderDetailView(selectedItem);
        return <CardInfo
            row1={row1}
            row2={row2}
            row3={row3}
            row4={row4}
        />
    }

    return (
        <div className="search-container">
            <h1>Type 3 letters to search</h1>
            <div className="input-search">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter smth"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                </InputGroup>
            </div>

            <div className="listContainer">
                {error

                    ? <Alert>
                        Error, try to reload the page!
                    </Alert>
                    :
                    <div>
                        {listItems && <ItemsList
                            searchText={searchText}
                            listItems={listItems}
                            setSelectedItem={setSelectedItem}
                            setListItems={setListItems}
                            getHighlightedText={getHighlightedText}
                    />}

                        <div className="description">
                            {selectedItem && renderDetailedView(selectedItem)}
                        </div>
                    </div>

                }
            </div>

        </div>
    );
};

export default Search;
