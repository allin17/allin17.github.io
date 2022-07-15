import React from 'react'

export const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part);
}

export const getDateForRenderDetailView = (selectedItem: any) => {
    if (!selectedItem) {
        return {}
    }
    const {group, name} = selectedItem;
    switch (group) {
        case 'films': {
            const {title, director, producer, release_date} = selectedItem;
            return {row1: title, row2: director, row3: producer, row4: release_date}
        }
        case 'people': {
            const {gender, height, mass} = selectedItem;
            return {row1: 'name: '+name, row2: 'gender: '+gender, row3: 'height: '+height, row4: 'mass: '+mass}
        }
        case 'planets': {
            const {diameter, rotation_period, orbital_period} = selectedItem;
            return {row1: 'name: '+name, row2: 'diameter: '+diameter, row3: 'rotationPeriod: '+rotation_period, row4: 'orbitalPeriod: '+orbital_period}
        }
        case 'species': {
            const {classification, designation, average_height} = selectedItem;
            return {row1: 'name: '+name, row2: 'classification: '+classification, row3: 'designation: '+designation, row4: 'averageHeight: '+average_height}
        }
        case 'starships': {
            const {consumables, crew, manufacturer} = selectedItem;
            return {row1: 'name: '+name, row2:'consumables: '+ consumables, row3: 'crew: '+crew, row4: 'manufacturer: '+manufacturer}
        }
        case 'vehicles': {
            const {model, vehicle_class, manufacturer} = selectedItem;
            return {row1: 'name: '+name, row2: 'model: '+model, row3: 'vehicle class: '+vehicle_class, row4: 'manufacturer: '+manufacturer}
        }
        default:
            return {}
    }
}

