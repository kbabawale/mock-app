import React, { useState, useEffect } from 'react';
import Header from './Header';

function Table(props) {

    const [items, setItems] = useState([
        { id: 1, firstname: "Mark", lastname: "Otto", handle: "@mdo", isChecked: false },
        { id: 2, firstname: "Jacob", lastname: "Thorton", handle: "@jTh", isChecked: false },
        { id: 3, firstname: "Larry", lastname: "TheBird", handle: "@lly", isChecked: false }
    ]);
    const [count, setCount] = useState(0);
    const [allChecked, setAllChecked] = useState(false);

    const handleChange = (e) => {
        var list = items;
        var allChecked2 = allChecked;
        if (e.target.value === "checkAll") {

            list = list.map(item => ({ ...item, isChecked: !item.isChecked }));

        }
        else {
            list = list.map(item =>
                item.firstname === e.target.name ? { ...item, isChecked: e.target.checked } : item

            );
            allChecked2 = list.every(item => item.isChecked);

        }
        var nnewCount = list.filter(x => x.isChecked);
        setItems(list);
        setAllChecked(allChecked2);
        setCount(nnewCount.length);
    }

    const renderList = () => {
        return items.map(item =>
            <React.Fragment>
                <tr>
                    <th><input key={item.id} type="checkbox" checked={item.isChecked} name={item.firstname} value={item.id} onChange={handleChange} /></th>
                    <th scope="row">{item.id}</th>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.handle}</td>
                </tr>
            </React.Fragment>
        )
    }

    const showArray = () => {
        var seleted = items.filter(x => x.isChecked);
        console.log(seleted);
    }


    return (
        <React.Fragment>
            <Header />
            <div className="mainbody2">
                <div className="options">
                    <p className="table-count">Selected: {count}</p>
                    <button type="button" onClick={showArray}>Export</button>
                </div>
                <table border="0" className="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" name="selectAll" value="checkAll" checked={allChecked} onChange={handleChange} /></th>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList()}
                    </tbody>
                </table>

            </div>

        </React.Fragment>
    );

}

export default Table;