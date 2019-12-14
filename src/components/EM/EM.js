import React from 'react';
import '../css/Sidebar+main.css';

// import Filter from './Filter'
import LargeColumnTable  from './LargeColumnTable'


const EM = () => {
    const data = [
        {
          id: 1,
          name: "Oli Bob",
          age: "12",
          color: "red",
          dob: "01/01/1980",
          rating: 5,
          passed: true,
          pets: ["cat", "dog"]
        },
        {
          id: 2,
          name: "Mary May",
          age: "1",
          color: "green",
          dob: "12/05/1989",
          rating: 4,
          passed: true,
          pets: ["cat"]
        },
        {
          id: 3,
          name: "Christine Lobowski",
          age: "42",
          color: "green",
          dob: "10/05/1985",
          rating: 4,
          passed: false
        },
        {
          id: 4,
          name: "Brendon Philips",
          age: "125",
          color: "red",
          dob: "01/08/1980",
          rating: 4.5,
          passed: true
        },
        {
          id: 5,
          name: "Margret Marmajuke",
          age: "16",
          color: "yellow",
          dob: "07/01/1999",
          rating: 4,
          passed: false
        },
        {
          id: 6,
          name: "Van Ng",
          age: "37",
          color: "green",
          dob: "06/10/1982",
          rating: 4,
          passed: true,
          pets: ["dog", "fish"]
        },
        {
          id: 7,
          name: "Duc Ng",
          age: "37",
          color: "yellow",
          dob: "10/10/1982",
          rating: 4,
          passed: true,
          pets: ["dog"]
        }
      ];
    return (
        <React.Fragment>
            <div className="main">
                {/* <Filter /> */}
                <LargeColumnTable  />
               
            </div>
        </React.Fragment>
    );
};

export default EM;
