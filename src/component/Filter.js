import React, {useContext, useReducer} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {ALL, DONE, TODO} from '../filters';
import AppContext from '../AppContext';


function Filter({setActiveFilter, match}){

    
    // const {state, dispatch} = useContext(AppContext)
    function RoutesFilter({ match }) {
        return <h3>Requested Param: {match.params.id}</h3>;
      } 
   
    function onFilterClick(filter){
        return function(e){
            e.preventDefault();
            setActiveFilter(filter);
        }
    }
    return (
    <div>
        
        <Link className="button--filter" to={`${match.url}/All`} onClick={onFilterClick(ALL)}>All</Link>
        <Link className="button--filter" to={`${match.url}/DONE`} onClick={onFilterClick(DONE)}>Complete</Link>
        <Link className="button--filter" to={`${match.url}/TODO`} onClick={onFilterClick(TODO)}>In progress</Link>
      
        <Route path={`${match.path}/:done`} component={RoutesFilter} />
        <Route exact  path={match.path} />
    </div>

    )
    
}

export default Filter;