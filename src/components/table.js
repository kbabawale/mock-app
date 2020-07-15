import React, { useState, useEffect } from 'react';
import Header from './Header';

function Table(props) {

    const [count, setCount] = useState(0);

    const onSiteChanged = (e) => {




    }




    return (
        <React.Fragment>
            <Header />
            <div className="mainbody2">
                <div className="options">
                    <p className="table-count">Count: {count}</p>
                    <button type="button">Export</button>
                </div>
                <table border="0" className="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" name="select" /></th>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input type="checkbox" name="select" /></th>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th><input type="checkbox" name="select" /></th>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th><input type="checkbox" name="select" /></th>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </React.Fragment>
    );

}

export default Table;