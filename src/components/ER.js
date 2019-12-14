import React from 'react';
import './Sidebar+main.css';
import './ER.css';

const ER = () => {
    return (
        <React.Fragment>
           <form class="main" id="ER">
           <table>
                <tr>
                    <td>Code :</td>
                    <td><input type="text" name="Code" id="Code" /></td>
                    <td>Country :</td>
                    <td><input type="text" name="Country" id="Country" /></td>
                </tr>
                <tr>
                    <td>Employee Name :</td>
                    <td><input type="text" name="EmployeeName" id="EmployeeName" /></td>
                    <td>City :</td>
                    <td><input type="text" name="City" id="City" /></td>
                </tr>
                <tr>
                    <td>ID Type :</td>
                    <td><select>
                        <option name="IDType" id="IDType" value=""></option>
                        </select></td>
                    <td>Region :</td>
                    <td><input type="text" name="Region" id="Region" /></td>
                </tr>
                <tr>
                    <td>ID Number :</td>
                    <td><input type="text" name="IDNumber" id="IDNumber" /></td>
                    <td>Postal Code :</td>
                    <td><input type="text" name="PostalCode" id="PostalCode" /></td>
                </tr>
                <tr>
                    <td>Phone :</td>
                    <td><input type="text" name="Phone" id="Phone" /></td>
                    <td>Adress Line 1 :</td>
                    <td><input type="text" name="AdressLine1" id="AdressLine1" /></td>
                </tr>
                <tr>
                    <td>Mobile :</td>
                    <td><input type="text" name="Mobile" id="Mobile" /></td>
                    <td>Adress Line 2 :</td>
                    <td><input type="text" name="AdressLine2" id="AdressLine2" /></td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td><input type="text" name="Email" id="Email" /></td>
                    <td>Language :</td>
                    <td><select>
                        <option name="Language" id="Language" value=""></option>
                        </select></td>
                </tr>
                <tr>
                    <td>Note :</td>
                    <td><textarea rows="4" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td>Job :</td>
                    <td><select>
                        <option name="Job" id="Job" value=""></option>
                        </select></td>
                    <td>Upload Photo :</td>
                    <td><input type="file" name="UploadPhoto" id="UploadPhoto" /></td>
                </tr>
                <tr>
                    <td>Employee Status :</td>
                    <td><select>
                        <option name="EmployeeStatus" id="EmployeeStatus" value=""></option>
                        </select></td>
                    <td><img src="https://i.ibb.co/DMCn29T/profile.jpg" alt="profile" width="50" height="50"/></td>
                </tr>
            </table>
            <button type="submit" className="mainB" form="ER" value="New">New</button>                
            <button type="submit" className="mainB" form="ER" value="Save">Save</button>                
</form>
        </React.Fragment>
    );
};

export default ER;