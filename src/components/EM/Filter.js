import React from 'react';
import '../css/mainB.css'
import '../css/Filter.css'
const Filter = () => {
    return (
        <React.Fragment>
            <div>
                <p>Employee Name: </p><input type="text" name="ename" value="" />
                <p>Phone: </p><input type="text" name="phone" value="" />
                <p>Country: </p><select name="country">
                    <option value=""></option>
                </select>
                <p>Job: </p><select name="job">
                    <option value=""></option>
                </select>
                <p>Status: </p><select name="status">
                    <option value=""></option>
                </select><br/>
                <input className="mainB" type="submit" value="Search"/>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default Filter;