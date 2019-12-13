import React from 'react';

const Filter = () => {
    return (
        <React.Fragment>
            <form>
                Employee Name: <input type="text" name="ename" value="" />
                &nbsp;Phone: <input type="text" name="phone" value="" />
                &nbsp;Country: <select name="country">
                    <option value=""></option>
                </select>
                &nbsp;Job: <select name="job">
                    <option value=""></option>
                </select>
                &nbsp;Status: <select name="status">
                    <option value=""></option>
                </select>
                <br/><input type="submit" value="Search"/>
            </form>
            <hr/>
        </React.Fragment>
    );
};

export default Filter;